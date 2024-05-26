# API Design - inspired by google api design

## URL

面向资源（Resource）的API设计：“资源”是被命名的实体，“资源名称”是它们的标识符。资源名称由资源自身的 ID、任何父资源的 ID 及其 API 服务名称组成：

| API 服务名称             | 集合 ID  | 资源 ID           | 集合 ID   | 资源 ID     |
| :----------------------- | :------- | :---------------- | :-------- | :---------- |
| //storage.googleapis.com | /buckets | /bucket-id        | /objects  | /object-id  |
| //mail.googleapis.com    | /users   | /name@example.com | /settings | /customFrom |

Examples:

- 完整资源名称：`//library.googleapis.com/shelves/shelf1/books/book2`
- 相对资源名称：`shelves/shelf1/books/book2`
- 非末尾的资源ID有且仅有一个网址段，末尾的资源ID可以有多个网址URI段：`server/server1/files/source/py/parser.py`
  - 网址：通过对资源名称进行转码 = 协议 tcp http + 版本 v1 v2
    > Pattern: `<protocol>:<service-name><version><collection-id>...<resource-id>` \
   > E.g. `//calendar.googleapis.com/users/john smith/events/123` \
   > E.g. `https://calendar.googleapis.com/v3/users/john%20smith/events/123`

## Method

### 标准方法 Standard methods

| 标准方法                                                                 | HTTP 映射                     | HTTP 请求正文 | HTTP 响应正文             |
| :----------------------------------------------------------------------- | :---------------------------- | :------------ | :------------------------ |
| [`List`](https://cloud.google.com/apis/design/standard_methods#list)     | `GET <collection URL>`        | 无            | 资源*列表                 |
| [`Get`](https://cloud.google.com/apis/design/standard_methods#get)       | `GET <resource URL>`          | 无            | 资源*                     |
| [`Create`](https://cloud.google.com/apis/design/standard_methods#create) | `POST <collection URL>`       | 资源          | 资源*                     |
| [`Update`](https://cloud.google.com/apis/design/standard_methods#update) | `PUT or PATCH <resource URL>` | 资源          | 资源*                     |
| [`Delete`](https://cloud.google.com/apis/design/standard_methods#delete) | `DELETE <resource URL>`       | 不适用        | `google.protobuf.Empty`** |

Examples:

- `GET /shelves/shelf1/books?page_size=2&page_token=3`
  - > 仅适用于获取集合资源；分页、结果排序；过滤字段、结果字段；
- `GET /shelves/shelf1/books/book2`
- `POST /shelves/shelf1/books`
- `PUT /shelves/shelf1/books/book2` or `PATCH /shelves/shelf1/books/book2`
  - > PUT 全量更新；PATCH 部分更新，配合[FieldMask](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#field-masks-in-update-operations)指定哪些字段会被更新；
- `DELETE /shelves/shelf1/books/book2`
  - > 数据保持一致，但是只有第一次会删除成功返回Empty，后续返回NOT_FOUND

### 自定义方法 Custom methods

| 方法名称   | 自定义动词  | HTTP 动词 | 备注                                                                                                                                                                                            |
| :--------- | :---------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Cancel`   | `:cancel`   | `POST`    | 取消一个未完成的操作，例如 [`operations.cancel`](https://github.com/googleapis/googleapis/blob/master/google/longrunning/operations.proto#L100)。                                               |
| `BatchGet` | `:batchGet` | `GET`     | 批量获取多个资源。如需了解详情，请参阅[列表描述](https://cloud.google.com/apis/design/standard_methods#list)。                                                                                  |
| `Move`     | `:move`     | `POST`    | 将资源从一个父级移动到另一个父级，例如 [`folders.move`](https://cloud.google.com/resource-manager/reference/rest/v2/folders/move)。                                                             |
| `Search`   | `:search`   | `GET`     | List 的替代方法，用于获取不符合 List 语义的数据，例如 [`services.search`](https://cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services/search)。 |
| `Undelete` | `:undelete` | `POST`    | 恢复之前删除的资源，例如 [`services.undelete`](https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services/undelete)。建议的保留期限为 30 天。           |

Highlights:

- 使用`:`而非`/`来分隔自定义动词和资源名称，e.g. `POST /files/a/long/file/name:undelete`
  - > 使用自定义方法表达业务动作：提拔员工、完成配送（类似黑马业务能力表的设计）

### Example (works in Spring/Micronaunt)

```kotlin
// controller
@RestController
@RequestMapping("/google")
class GoogleStyleController {
  @GetMapping("/{id}")
  fun get(@PathVariable id: String): String = URLDecoder.decode(id, Charset.defaultCharset())

  @GetMapping("/{id}:print")
  fun print(@PathVariable id: String) = "@<${URLDecoder.decode(id, Charset.defaultCharset())}>@"
}

// controller test
@ActiveProfiles("test")
@WebMvcTest(GoogleStyleController::class, excludeAutoConfiguration = [SecurityAutoConfiguration::class])
internal class GoogleStyleControllerTest {
  @Autowired
  private lateinit var mvc: MockMvc
  private val id = "1a!@#\$%^&*():print" // 如果id存在特殊字符，需要encode避免":"被误解
  private val encoded = URLEncoder.encode(id, Charset.defaultCharset())

  @Test
  fun `should get things`() {
      mvc.get("/google/${encoded}").andExpect { content { string(id) } }
  }

  @Test
  fun `should print things`() {
      mvc.get("/google/${encoded}:print").andExpect { content { string("@<${id}>@") } }
  }
}
```

## Standard Fields & Header

- 标准字段：根据项目类型、行业特征指定一些API的标准字段，比如分页参数、audit信息、auth信息等，保证整个系统API的一致性和可读性
- 系统参数：同上，并包括Header中的一些参数（仅供参考）
  - `X-HTTP-Method-Override`：请求的预期 HTTP 方法。部分网络代理不接受所有 HTTP 方法。（AWS API Gateway）
  - `passwd/password`：避免将密码或credentials放入网址
  - `X-Goog-Request-Reason, X-Server-Timeout`
  - `X-RESOURCE-ID`：创建完成的资源ID（如果Create方法不返回任何数据的话）

## Error

- 使用统一的Code，且不提倡自由扩展：面向数据和行为设计，而非业务场景
- 通过不同的上下文来对Code进行解释和相应
- 能够映射到某一个确定的HttpStatus

> CODE：A simple error code that can be easily handled by the client. \
> Message：A developer-facing human-readable error message in English. \
> Details：Additional error information that the client code can use to handle the error, such as retry info or a help link.

### 重试

客户端可根据（可重试的）Code设计重试策略：重试次数、重试间隔、长任务后台作业

### 传播错误 Propagating / Reproducing

由于上游服务错误导致的服务器错误

- 隐藏实现详细信息和机密信息
- 调整负责该错误的一方：从调用者角度看，无论服务器是因为何种原因发生错误，对调用者的响应结果是一定的
  - Get 资源，依赖上游服务404：404
  - List 资源，部分依赖上游服务404：200 with partial data
  - ...

### Status Code (for example)

> [REST API status code for upstream service failure?](https://stackoverflow.com/questions/26639172/rest-api-status-code-for-upstream-service-failure)

| HTTP | gRPC                  | 错误消息示例                                        |
| :--- | :-------------------- | :-------------------------------------------------- |
| 400  | `INVALID_ARGUMENT`    | 请求字段 x.y.z 是 xxx，预期为 [yyy, zzz] 内的一个。 |
| 400  | `FAILED_PRECONDITION` | 资源 xxx 是非空目录，因此无法删除。                 |
| 400  | `OUT_OF_RANGE`        | 参数“age”超出范围 [0,125]。                         |
| 401  | `UNAUTHENTICATED`     | 身份验证凭据无效。                                  |
| 403  | `PERMISSION_DENIED`   | 使用权限“xxx”处理资源“yyy”被拒绝。                  |
| 404  | `NOT_FOUND`           | 找不到资源“xxx”。                                   |
| 409  | `ABORTED`             | 无法锁定资源“xxx”。                                 |
| 409  | `ALREADY_EXISTS`      | 资源“xxx”已经存在。                                 |
| 429  | `RESOURCE_EXHAUSTED`  | 超出配额限制“xxx”。                                 |
| 499  | `CANCELLED`           | 请求被客户端取消。                                  |
| 500  | `DATA_LOSS`           | 请参阅备注。                                        |
| 500  | `UNKNOWN`             | 请参阅备注。                                        |
| 500  | `INTERNAL`            | 请参阅备注。                                        |
| 501  | `NOT_IMPLEMENTED`     | 方法“xxx”未实现。                                   |
| 503  | `UNAVAILABLE`         | 请参阅备注。                                        |
| 504  | `DEADLINE_EXCEEDED`   | 请参阅备注。                                        |

## Naming Convention

| API 名称       | 示例                                 |                                                                               |
| :------------- | :----------------------------------- | ----------------------------------------------------------------------------- |
| **产品名称**   | `Google Calendar API`                | 营销名称，与书面描述、商标等一致                                              |
| **服务名称**   | `calendar.googleapis.com`            | 语法上有效的 DNS 名称（遵循 [RFC 1035](http://www.ietf.org/rfc/rfc1035.txt)） |
| **软件包名称** | `google.calendar.v3`                 | 单数组件名称                                                                  |
| **接口名称**   | `google.calendar.v3.CalendarService` | 区别于服务名称，API的抽象定义                                                 |
| **来源目录**   | `//google/calendar/v3`               |                                                                               |
| **API 名称**   | `calendar`                           |                                                                               |

### （接口）方法名称：VerbNoun

方法名称的动词部分**应该**使用用于要求或命令的[祈使语气](https://en.wikipedia.org/wiki/Imperative_mood#English)，如果关于 API 子资源的方法名称使用提问动词（经常使用陈述语气表示），则容易让人混淆。例如，要求 API 创建一本书，这显然是 `CreateBook`（祈使语气），但是询问 API 关于图书发行商的状态可能会使用陈述语气，例如 `IsBookPublisherApproved` 或 `NeedsPublisherApproval`。若要在此类情况下继续使用祈使语气，请使用“check”(`CheckBookPublisherApproved`) 和“validate”(`ValidateBookPublisher`) 等命令。

方法名称**不应**包含介词（例如“For”、“With”、“At”、“To”）。通常，带有介词的方法名称表示正在使用新方法，应将一个字段添加到现有方法中，或者该方法应使用不同的动词。例如，如果 `CreateBook` 消息已存在且您正在考虑添加 `CreateBookFromDictation`，请考虑使用 `TranscribeBook` 方法。

### 消息（对象）名称

- （形容词）+名词：无二义性时，形容词可省略
- **不应**包含介词（例如“With”、“For”）（带有介词的消息名称可以通过消息上的可选字段来更好地表示
  - 请求响应使用Request、Response进行区分
  - 除非请求和响应刚好是：
    - Empty
    - 某一个资源类型：通常用于标准方法中
    - 某一个操作：通常用于自定义方法中

### 字段名称

- **不应**包含介词
- **不应**使用后置形容词

### 时间与日期

- 使用Timestamp
- **应该**以 `time`（例如 `start_time` 和 `end_time`）结尾
- （与时区和时段无关的日期）
  - 使用LocalDate（ ISO 8601 日期格式 YYYY-MM-DD）
  - 应具有后缀 `_date`
- （与时区和日期无关的时间）
  - 使用LocalTime（ ISO 8601 24 小时制格式 HH:MM:SS[.FFF]）
  - 应具有后缀 `_time`

### 数量

- 整数数量必须带单位: xxx_{bytes|width_pixels|meters}
- 数量是条目计数，则该字段**应该**具有后缀 `_count`

### 列表

- 过滤字段：`filter`
- 响应：`ListEventResponse { events: [..., ...] }`

### 缩写

- 对于软件开发者熟知的名称缩写，使源代码易于读写...

## Implementation Tips

### 空响应

- 标准Delete应返回空
- “软”删除返回状态已更新的资源（表示正在删除）
  - 此处“软”删除是指对于正常List/Get不可见，但仍可以通过自定义查询获得结果的“条件隐藏式删除”
- 自定义方法一定要有Response：便于后续接口修改和维护

### 耗时操作/异步操作 Long Running Operations

- 异步API会返回标准的Operation对象（异步句柄）
  - List、Get、Delete、Cancel
- 基于Operation查询异步操作的结果
- 即使没有完成，原资源也可以通过List、Get进行查询
  > 例如，在创建资源时，即便资源表明其尚未准备就绪，该资源也**应该**出现在 LIST 和 GET 方法中。

### 分页

- request
  - `page_size`: 结果数
  - `page_token`: 分页令牌，请求特定页
- response
  - `next_page_token`：下一页的分页令牌

> 1. The page token is useful when you don't want users to move to the any given page without fetching first results. Since the next page token is only received when you access the previous page, users won't be able to cache a search and access content later. So the end users can't skip promoted (advertised) content.
> 2. Can't do parallel requests \

links:

- <https://softwareengineering.stackexchange.com/questions/313382/paging-strategies-page-token-vs-skip-start-index>
- <https://stackoverflow.com/questions/35369966/why-use-pagination-tokens>
- <https://softwareengineering.stackexchange.com/questions/351271/api-pagination-how-to-implement-page-token-paging-method>

### 排序

- 使用额外的字段`order_by="foo,bar desc"`，默认asc

### 子集合（跨父集合）

- 使用`-`通配标识跨父集合（`-`可以避免转移，`*`不行）
  - `GET https://library.googleapis.com/v1/shelves/-/books?filter=xxx`
  - `GET https://library.googleapis.com/v1/shelves/-/books/{id}`

### 验证请求（dry run）

- 使用额外的字段`validate_only=true`，仅执行无副作用的请求

### 重复请求

- 不能轻易重复执行的请求（有较大影响：钱、时间、法务风险），请求时需要包含唯一ID（非资源ID）

### 枚举值

- 从`0`开始定义并作为默认值，API必须记录如何处理默认情况
- 这个默认值不允许默认行为，则接口应显示错误INVALID ARGUMENT

### *语法规则：EBNF

### 整数类型

- 避免使用超过32位的无符号；-1、0代表特殊含义时需要额外记录

### 部分响应 Partial Response

- 通过`FieldMask`，提供`$fields`保留字段来提示API Gateway、BFF清洗返回数据

  ```zsh
  GET https://library.googleapis.com/v1/shelves?$fields=shelves.name
  GET https://library.googleapis.com/v1/shelves/123?$fields=name
  ```

- 资源视图，在请求中增加参数`view=<defined view>`，来指定返回某一种视图数据

### *ETag：客户端条件请求

### 单例资源 Singleton

- 仅有一个资源存在其集合（或父资源）中:`/users/{uid}/setting`

### 如何提供Option值

- Bool，提供固定的无需扩展的设置：`bool enable_tracing` 或 `bool enable_pretty_print`
- Enum，灵活的设计但不会频繁修改：`enum TlsVersion` 或 `enum HttpVersion`
- String，开放式设计或兼容外部标准：`sting region_code`或`string language_code`

### 数据保留（backup）Data Retention

- 对于用户元数据、用户设置和其他重要信息，应保留 30 天的数据。例如，监控指标、项目元数据和服务定义。
- 对于大量用户内容，应保留 7 天的数据。例如，二进制 blob 和数据库表。
- 对于暂时性状态或费用昂贵的存储服务，如果可行，应保留 1 天的数据。例如，Memcache 实例和 Redis 服务器。
  > 在数据保留期限期间，可以删除数据而不会丢失数据。如果免费提供数据保留的成本很高，则服务可以提供付费的数据保留。\
  > （使用非业务侵入的方式来保留、恢复这部分数据）

### 数据负载限制 Large Payloads

- Max 32MB
- 大于10MB则需要考虑API设计的合理性，是否需要使用流式传输、异步传输

## Built-in API文档

- API说明：以动词开头说明API功能，e.g.
  - 与世界各地的朋友分享最新动态、照片、视频等。
  - 访问云托管的机器学习服务，轻松构建响应数据流的智能应用。
- 资源说明：资源所表示的内容
- 字段和参数，e.g.
  - 本系列的主题数量。
  - 经纬度坐标的精度，以米为单位。 必须是非负数。
  - 标记是否为本系列的提交资源返回附件网址值。`series.insert` 的默认值为 `true`。
  - 投票信息的容器。仅在记录投票信息时出现。
  - 目前未使用或已弃用。

Checklist：

- 它是什么？
- 如果成功了它会执行什么操作？如果失败了它会执行什么操作？什么可能导致它失败及如何导致它失败？
- 它具有幂等性吗？
- 它的单位是什么？（例如：米、度、像素。）
- 它接受什么范围的值？此范围是否包含边界值？
- 它有什么副作用？
- 应该如何使用它？
- 可能会导致它失败的常见错误有哪些？
- 它总是存在吗？（例如：“用于投票信息的容器。仅在记录投票信息时存在。”）
- 它有默认设置吗？

## Version

主版本号

- 作为URL路径的第一部分
- 重大更改（删除、修改字段）时需要增加API版号 - Server/Client主版本号必须保持一致
  - 向后兼容的非重大更改
    - 向 API 服务定义添加 API 接口
    - 向 API 接口添加方法
    - 向方法添加 HTTP 绑定
    - 向请求消息添加字段：非必须、不更改接口行为的（如分页）
    - 向响应消息添加字段
    - 向枚举添加值
    - 添加仅限输出的资源字段
  - 不兼容的重大更改
    - 移除或重命名服务、字段、方法或枚举值
    - 更改 HTTP 绑定
    - 更改字段的类型
    - 更改资源名称格式
    - 更改现有请求的可见行为
    - 更改 HTTP 定义中的网址格式
    - 向资源消息添加读取/写入字段
- 内部可以通过小版本进行区分，但不应该开放给用户
  - `v1,v2` 稳定的可接受版本
  - `v1.1` 稳定的非公开版本
  - `v1beta` 非稳定版本，必须是`v1`的超集（包含）
  - `v1alpha` 非稳定版本，必须是`v1beta`的超集（包含）

## Links

- [Google API 设计指南](https://cloud.google.com/apis/design)
