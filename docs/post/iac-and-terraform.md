# Infrastructure as Code (IaC) 思考和实践

## 不可变基础设施

在讲 IaC 之前，我们先了解一下不可变基础设施：

> **软件应用的复杂性 -> 开发部署的复杂性 -> 基础设施的复杂性**

在以前的软件开发中，为了配置和安装好软件应用的运行环境，通常需要花大量的时间在准备网络、机器、操作系统和数据库上。并且随着软件的更新，运行环境也会跟着调整，如安装补丁、修改 ip、修改端口等。但人工的调整不仅容易出错，而且难以记录修改，这个运行环境（服务器）就像你精心照顾的宠物一样，一旦丢失了就再也找不回来了。

因此，业界提出了 [Pet vs Cattle（宠物 vs 家禽）](https://joachim8675309.medium.com/devops-concepts-pets-vs-cattle-2380b5aab313) 的比喻，并且通过云服务验证了其有效性。

同样的，雪花服务器和凤凰服务器也是描述的类似的情况：每一片雪花都是独一无二的，并且消融后就再也无法再次凝结成相同的雪花。而凤凰服务器则可以通过“变蛋”涅槃重生（凤凰服务器的特点）：

- 稳定的服务器状态和更少的部署失败
- 没有配置漂移或雪花服务器
- 一致的预发布环境和简单的水平扩缩容
- 简单的回滚和恢复处理

而要想解决上述问题（实现不可变基础设施）：

- 自动化管道
- 无状态应用层
- 持久化数据层
- 基础设施即代码 IaC
- DevOps 式协作

而 IaC 不仅是其中重要的一环，利用代码的特点和优势也更容易达成其他几项工程实践。

> IMMUTABLE, BUT CONFIGURABLE / REPRODUCIBLE AND AUTOMATABLE \
> （是）不可变的，但可配置 / （是）可复制的，且可自动化

## 'AS' code, not 'IS' code

![IaC Tools](https://picx.zhimg.com/80/v2-3856f65a763bad268e7d103c7aeb9c65_1440w.png)

IaC 的工具很多，甚至使用 shell、python 调用云服务 sdk、cli 也能完成高效的基础设施编排。但基础设施‘即’代码的重点并不完全是代码化 —— 'AS' not 'IS'。

一方面，使用代码管理基础设施：

- 基于编程/模版语言提升效率
  - 变量、常量、函数，提升编码效率减少重复和输入错误
  - 抽象、封装、复用，辅助基础设施的创建、修改、分发
  - 代码结构即基础设施架构
  - 同样适用 Clean Code 书写出自解释的代码
- 基于代码工具提升效率
  - Git，帮助基础设施实现版本化
  - 测试，尽早检验基础设施的可靠性
  - 流水线，自动化测试、部署、验证、回滚，响应更快

另一方面，IaC 应该致力于‘描述’基础设施：

- 基础设施受硬件架构影响，具有固有的依赖和限制
  - 比如 vm、集群 需要建设在网络之上
  - 比如 db、mq 是区域（region）资源，而 dns 是全球资源
- 虽然代码执行很快，但基础设施的准备并不像云厂说的那样快
  - java、go 应用的启动是秒级的
  - 而基础设施的“部署”时间则在几分钟到几小时不等
  - 比如 阿里云 rds 需要接近 10 分钟才能完全可以
- 如果遇到有状态服务，重建的难度远大于数据库迁移

下面我举 2 个编程理论用于 IaC 领域的例子 ...

### 简单原则 in IaC

![简单设计](https://insights.thoughtworks.cn/wp-content/uploads/2023/02/code-simple-design-five-principles-1.png)
[代码的简单设计五原则 - Thoughtworks洞见](https://insights.thoughtworks.cn/code-simple-design-five-principles/)

IaC 的设计实现过程中同样可以采用简单设计的理论：

- 通过测试，必然是首要满足的条件
- 揭示意图
  - 采用声明式编程，用代码描述基础设施的种类、型号以及资源的依赖关系
    - (参考下文 Terraform Tips)
  - "Do one thing and do it well" - UNIX 设计哲学
    - make, man, tree
    - kubectl run, apply, delete
- 消除重复
  - 使用 module、模版、脚本 来抽象可复用的资源或命令
    - (参考下文 Terraform Tips)
- 最小元素 ...

### 分层架构 in IaC

![基础设施的分层架构示例](https://s2.loli.net/2023/02/19/3nGJem5aP1z4lyu.png)

对基础设施进行分层和代码分层（mvc 模式）类似，目的是分离关注点：

- 权责方
  - 有哪些组织？有哪些部门？有哪些角色？
  - 他们的权利和义务是什么？
  - 如何协作？
- 修改频率
  - 哪些资源是一开始就需要准备和设计的？
  - 哪些资源是新项目启动需要的？
  - 哪些是不能修改的？哪些是定期修改的？哪些是随时可能修改的？
- 资源类型
  - IaaS/PaaS/SaaS
  - 计算、存储、网络，集群、中间件、工具链

如上图，是以 “基于多云环境构建 k8s 集群运行多种服务” 为题的分层架构：

- Layer0、Layer1 致力于不同的云环境上抽象出相同的支撑平台，对上暴露封装好的接口
- Layer2 构建企业内部的中间件/服务“市场”，提供多种组件按需使用
- Application 按需“采买”，直到某项服务被应用团队采用了，就会通过自动化脚本进行部署

![平台工程下的 DevOps 工作流](https://s2.loli.net/2023/02/19/2zS3gfmhaQWbdvK.png)

![GitOps with CMDB](https://s2.loli.net/2023/02/19/g7hkrQPfWaKHlAN.png)

## Terraform Tips

基于上述理论，我们以 terraform 为例（部署一个包含前后端的服务）来介绍一些 tips：

### 简单应用：无所谓分层，直接放到一个地方方便执行

```sh
  simple
  └── main.tf
```

### 简单应用 - 分类：随着资源变多，可以按资源类型/应用类型来

```sh
  simple-by-resource/
  ├── database.tf
  ├── oss.tf
  ├── vm.tf
  └── vpc.tf
```

```sh
  simple-by-application/
  ├── backend-app.tf
  └── frontend-app.tf
```

### 简单应用 - 组件化：当某些资源复杂度高、需要单独维护、需要复用时，通过 module 进行管理

```sh
  simple-with-modules/
  ├── applications
  │   ├── backend-app
  │   │   └── main.tf
  │   └── frontend-app
  │       └── main.tf
  └── modules
      ├── database
      │   └── main.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── vpc.tf
```

### 复杂应用 - 子组件：通过 folder 结构来标识复杂组件的关系和版本

```sh
  complex-sub-modules/
  ├── applications
  │   ├── backend-app
  │   │   └── main.tf
  │   └── frontend-app
  │       └── main.tf
  └── modules
      ├── database
      │   ├── main.tf
      │   └── v1
      │       ├── main.tf
      │       └── security-policy.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── networking
              └── main.tf
```

```terraform
  # complex-sub-modules/applications/banckend-app/main.tf
  module "server" {
    source = "../../modules/vm"

    cpu    = 2
    memory = 4096
    vpc_id = module.vpc.id
  }

  module "vpc" {
    source = "../../modules/vm/networking"

    type = "private"
    cdir = "172.0.0.1/16"
  }

  module "db" {
    source = "../../modules/database"

    # upgrade to v1
    # source = "../../modules/database/v1"

    # or publish module to registry
    # source = "private-regirstry@modules/database/v1"
  }
```

### 复杂应用 - 环境：将环境相关的变量抽象出去形成 variables，基于环境做区分

```sh
  complex-env-apps/
  ├── applications
  │   ├── backend-app
  │   │   ├── env
  │   │   │   ├── dev.tfvars
  │   │   │   ├── prod.tfvars
  │   │   │   ├── qa.tfvars
  │   │   │   └── stg.tfvars
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   └── frontend-app
  │       ├── env
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── main.tf
  │       └── variables.tf
  └── modules
      ├── database
      │   └── main.tf
      ├── oss
      │   └── main.tf
      └── vm
          ├── main.tf
          └── vpc.tf
```

```sh
  # 独立管理环境参数，把 applications 也当成一种 module
  complex-outside-env-apps/
    ├── applications
    │   ├── backend-app
    │   │   ├── main.tf
    │   │   └── variables.tf
    │   └── frontend-app
    │       ├── main.tf
    │       └── variables.tf
    ├── env
    │   ├── common.yaml
    │   ├── dev.tfvars
    │   ├── prod.tfvars
    │   ├── qa.tfvars
    │   └── stg.tfvars
    └── modules
        ├── database
        │   └── main.tf
        ├── oss
        │   └── main.tf
        └── vm
            ├── main.tf
            └── vpc.tf
```

```sh
  # 更复杂的全球部署的系统，在环境之上再加一层地域做区分
  complex-region-env-apps/
  ├── applications
  │   ├── backend-app
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   └── frontend-app
  │       ├── main.tf
  │       └── variables.tf
  ├── modules
  │   ├── database
  │   │   └── main.tf
  │   ├── oss
  │   │   └── main.tf
  │   └── vm
  │       ├── main.tf
  │       └── vpc.tf
  └── vars
      ├── cn-chengdu
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── cn-shanghai
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── common.yaml
      ├── eu-west4
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      └── sg
          ├── dev.tfvars
          ├── prod.tfvars
          ├── qa.tfvars
          └── stg.tfvars
```

### 进阶应用 - 共享状态：如果多个应用间要共享状态，比如前端需要拿到后端服务器的端口号

```terraform
  # 使用 remote state，跨 state 直接查询
  data "terraform_remote_state" "backend_state" {
    backend = "oss"

    config = {
      bucket = "tf_tutorial_remote_state_bucket"
      key    = "dev/applications/backend-app/terraform.tfstate"
      region = "cn-shanghai"
    }
  }

  locals {
    backend_port = data.terraform_remote_state.backend_state.outputs.port
  }
```

```sh
  # 合并应用，将所有基础设施合并成一棵树，从根节点进行管理
  advance-compose-state/
  ├── applications
  │   ├── backend-app
  │   │   ├── main.tf
  │   │   └── variables.tf
  │   ├── composed
  │   │   └── main.tf
  │   └── frontend-app
  │       ├── main.tf
  │       └── variables.tf
  ├── modules
  │   ├── database
  │   │   └── main.tf
  │   ├── oss
  │   │   └── main.tf
  │   └── vm
  │       ├── main.tf
  │       └── vpc.tf
  └── vars
      ├── cn-chengdu
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── cn-shanghai
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      ├── common.yaml
      ├── eu-west4
      │   ├── dev.tfvars
      │   ├── prod.tfvars
      │   ├── qa.tfvars
      │   └── stg.tfvars
      └── sg
          ├── dev.tfvars
          ├── prod.tfvars
          ├── qa.tfvars
          └── stg.tfvars
```

使用 Terragrunt 进行多应用管理（相当于一个代码生成器，帮你执行 remote state 的查询逻辑）

![Terragrunt](https://s2.loli.net/2023/02/19/LQeRJhclxbOYVSg.png)

### 进阶应用 - 分层架构和平台化

```sh
  advance-platform/
  ├── layer0
  │   ├── alicloud
  │   │   ├── nonprod
  │   │   │   └── main.tf
  │   │   └── prod
  │   │       └── main.tf
  │   └── aws
  │       ├── nonprod
  │       │   └── main.tf
  │       └── prod
  │           └── main.tf
  ├── layer1
  │   ├── modules
  │   │   ├── compute
  │   │   │   └── main.tf
  │   │   ├── network
  │   │   │   └── main.tf
  │   │   └── storage
  │   │       └── main.tf
  │   ├── platform
  │   │   └── main.tf
  │   └── vars
  │       ├── cn-chengdu
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── cn-shanghai
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       ├── common.yaml
  │       ├── eu-west4
  │       │   ├── dev.tfvars
  │       │   ├── prod.tfvars
  │       │   ├── qa.tfvars
  │       │   └── stg.tfvars
  │       └── sg
  │           ├── dev.tfvars
  │           ├── prod.tfvars
  │           ├── qa.tfvars
  │           └── stg.tfvars
  └── layer2
      ├── applications
      │   ├── backend-app
      │   │   ├── main.tf
      │   │   └── variables.tf
      │   └── frontend-app
      │       ├── main.tf
      │       └── variables.tf
      ├── modules
      │   ├── database
      │   │   └── main.tf
      │   ├── oss
      │   │   └── main.tf
      │   └── vm
      │       ├── main.tf
      │       └── vpc.tf
      └── vars
          ├── cn-chengdu
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          ├── cn-shanghai
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          ├── common.yaml
          ├── eu-west4
          │   ├── dev.tfvars
          │   ├── prod.tfvars
          │   ├── qa.tfvars
          │   └── stg.tfvars
          └── sg
              ├── dev.tfvars
              ├── prod.tfvars
              ├── qa.tfvars
              └── stg.tfvars
```
