# 路由 vs 代理 vs 网关

在阅读[《为什么需要可编程代理》](https://mp.weixin.qq.com/s/B0LVmFvI7kFtjFEM0FG_zw)的时候，发现在云原生网关的变迁史中，频繁的出现了“路由、代理、网关”。而我们日常所用的技术中心，也有不少的软硬件设备和这三个概念有关系，如路由器、代理服务器、API 网关等。让我产生了好奇，这三个概念有具体的联系吗？

在翻阅了部分资料后，大致做了一些总结。

## 路由 —— “move packets between networks”

- 路由器
  - 硬件路由
    - 路由器工作在网络的 3 层；
    - 对其通信两端来说都是透明的，内外网的主机不会查觉中间有路由器参与了操作；
    - 路由器可以工作在低层，通过直接转化网络地址来转发数据包，它比代理服务器的速度要快；
  - 软（件）路由
    - 结合软件的功能，通过拦截数据包来修改和转发到目标地址
    - (软路由更接近于代理服务器)

## 代理 —— 「代为处理」

- 代理服务器
  - 代理工作在 3 层以上，通常是 4 层和 7 层；
  - 局域网中只有代理服务器能上网，只能依托代理服务器进行数据请求和接收，然后再转发；
    - perform some useful service such as caching HTTP content, applying application-level filtering and authorization functions and so on
  - 不同的代理服务器提供不同的服务，通常提供WWW、FTP等常见服务；
  - 代理通常连接的是两个或多个使用相同协议栈的端点(转发为主)；
  
- 代理方式
  - 正向代理 代理外部地址 翻墙
    - NAT 通过解包，替换目标地址/端口
  - 反向代理 为内部多个机器提供统一的对外地址
    - 负载均衡 对一组相同功能的机器进行的反向代理
      - (负载均衡是目的，反向代理是实现方式)

## 网关 —— 「网络关口」

- 网关
  - 网关是一个概念，不具体特指一类产品，只要连接两个不同的网络的设备都可以叫网关；
  - 网关通常连接的是两个或多个使用不同协议的端点(协议转换)；
  - 广义的网关：有进有出即为网关
  - 狭义的网关
    - IP路由过程中的网关：子网的关口，所有对子网的访问需要先向网关(默认网关)寻址
      - [网关和路由器的区别是什么？](https://www.zhihu.com/question/21787311)
    - API网关：对HTTP API进行拦截、监控、修改、转发

## 总结

<p align="center">
  <img src="/assets/luyou-vs-daili-vs-wangguan/2022-05-25-10-21-15.png" alt="Route vs Proxy vs Gateway" />
</p>

> ps: 还顺便研究了一下 excalidraw 添加中文字体:
>
> - Issue：<https://github.com/excalidraw/excalidraw/issues/5245>
> - Spike：<https://github.com/Anddd7/excalidraw/commit/97eca3fd347c9d3f3875996e7c49585307264e4e>
> - Demo：<https://excalidraw-anddd7.vercel.app/>
