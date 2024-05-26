# 容器江湖的刀光剑影 - 图解 K8S 与 Docker 的缘起缘落

![](https://pic2.zhimg.com/v2-8eab1606a489aa28545ed7f984f80b01.jpg)

### 背景

今年在系统学习 Kubernetes 的时候，发现 k8s 为了进一步模块化、兼容化各种云平台和容器运行时，有非常多个接口规范和标准。同时正式的将 Docker 移除，将 containerd 作为默认的容器运行时。因此，为了搞清楚容器变迁中的前因后果，画了一张全景图来分析和归纳各个技术之间的关系和变迁。

_（大部分信息都在图中，因此文字仅作为导读）  
（图文带有主观认知，难免会有错误和误解，仅作学习参考）_

### 天空一声巨响，Docker 闪亮登场

![](https://pic3.zhimg.com/v2-2e5bff692825013e0537ec33fc1bde8e_b.jpg)

Docker 的核心能力 namespace、cgroup 其实早在 08 年前就已经被广泛的运用在 linux 系统上。而当时，提供 “代码和依赖一致” 的能力，也并非是容器首创的。而 Docker 能够打败 Cloud Foundry，靠的其实是 AUFS —— 通过分层文件打造镜像，保证了系统环境的统一。即 代码（应用程序）+ 依赖（后端服务）+ 系统（操作系统） 三位一体，保证了运行的一致性。

![](https://pic2.zhimg.com/v2-23eda6e9882ef84ac4f92543079b3f39_b.jpg)

加之，Docker 还通过 Cli + Docker Hub 的模式，便捷且友好的交互模式降低了容器的准入门槛，赢得了开发者就赢得了未来。（同 Github）

### Kubernetes vs Docker Swarm

![](https://pic4.zhimg.com/v2-ec7c2c677631f7fcb616166676501d43_b.jpg)

当 Docker 完成了单机运行环境的大一统后，就开始计划抢夺各大云厂商的饭碗 —— PaaS 和容器编排。不过，各大云厂（AWS、Azure、GCP、VMWare）背后站的可都是 IT 行业的话事人，不会这么轻易的让出这块蛋糕。因此，2014 年左右，发生了 2 件事改变了 Docker 的命运。

Kubernetes 横空出世，带着 Google 的光环一出场就吸引了全场目光，随后一路走高直接干趴了 DockerSwarm。  
OCI 组织成立（Google Redhat 发起），开始定义各种容器标准，随后 Docker 开始拆分自身组件、实现各式标准和对接各种平台。runc, containerd 在受到社区追捧被更多工具使用时，Docker 这个软件却被慢慢遗忘了，最后只剩下 “docker” 这样一个容器的代称了。

_（如果 Docker 不加入 OCI、不实现标准、不捐赠 runc，现在会是怎么样呢  
（最近 Istio 终于也加入 CNCF 了 ..._

### OCI 开放容器接口

![](https://pic4.zhimg.com/v2-505c8cfaeac6e5042330af60890c9813_b.jpg)

Linux 基金会下的 OCI 定义了 Runtime（运行时） + Image（镜像）标准，以便根据用户的使用情况选择不同的容器运行时，如 能基于 hypervisor 提供强隔离性的 KataContainer，基于系统调用拦截的 gVistor 等。

“OCI 容器” 通常是指的容器运行时，即如何创建容器、管理镜像的底层功能。

### Kubernetes 占领高地

![](https://pic2.zhimg.com/v2-98750bc5070732faf351a1e71fd8d7a9_b.jpg)

Kubernetes 通过开源运作不断吸引开发者，开发者影响技术决策，从而逐渐占据企业市场，最终赢得了容器编排大战的胜利，当前 k8s 以成为容器编排的事实标准，AWS、Cloud Foundry 这些在容器之前就已经有 PaaS 平台能力的云厂，份额也在不断的被 k8s 蚕食。

k8s 本质是一个 PaaS 平台，为了对接不同的实现，比如 容器运行时、网络传输、云服务组件，也抽象出了很多接口，即 CRI、CNI、CSI、CCM 等。

为什么剔除 Docker（dockerd） 也是因为对于 k8s 来说，并不需要 Docker 的上层功能，仅需要能够操纵容器的运行时组件即可。而这部分能力恰好就是在 Docker 演进过程中，被拆分出来的 containerd。因此 containerd 被纳入到 CRI 标准中，随后被捐赠给 CNCF，作为 k8s 默认的容器运行时实现。

### “容器运行时”

我们在翻阅文档时，通常会看到两种容器运行时：

- CRI 是为支持 k8s 工作而定义的，主要目的是调用底层运行时来构建 pod = 多容器、共享网络和存储
- OCI 则相对更底层一点，主要目的是调用内核功能来构建容器

有一种说法是 containerd 等用于支持 k8s 等 PaaS 平台功能的运行时，被称为 High-Level 运行时，除了容器、镜像外，还拥有管理网络、存储等能力。而 runc 这种直接对接操作系统内核，只关注于容器本身的即为 Low-Level 运行时。

### Shim

Shim 也是一个常出现但让人误解的词，在翻阅了一些资料后，我发现 “Shim - 垫片” 就是一个技术词汇，出现在各处的定义不同。

![](https://pic2.zhimg.com/v2-c48f1605cadaf38cb90e1222da20aa51_b.jpg)

在 docker 的语境下，shim 指的是 mangager(containerd) -> container(runc) 这一层

![](https://pic3.zhimg.com/v2-556e53e5bd8477861db967326775af6e_b.jpg)

在 k8s 的语境下，shim 指的是 CRI client(kubelet) -> runtime(docker/containerd) 这一层

_因为一开始 k8s 只支持 docker，所以使用 dockershim 做了一层桥接；而后使用 CRI-containerd 操作时，其实就不存在 shim 这一层了_

![](https://pic1.zhimg.com/v2-6a94ea5611ac846c8064fc1b2998da30_b.jpg)

在 containerd 的语境下，shim 指的是 OCI client(containerd) -> runtime(runc) 这一层

### 参考资料

- [9000字长文复盘Docker兴衰，从容器大战史推演基础软件投资](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzkzMTM1MDEyOA%3D%3D%26mid%3D2247483673%26idx%3D1%26sn%3D405f481ab19f928bb85add017201fb1c%26chksm%3Dc26d1206f51a9b107de1d80d91e29c4e7c6c6edaa6e6809b0040ee3aa08c1524563b8cd43ac8%26mpshare%3D1%26scene%3D1%26srcid%3D05304k7ldEAcPcXbuNW6G4Lu%26sharer_sharetime%3D1653886191829%26sharer_shareid%3Dd1c27a97d2ae54cfe57aae2b6d670930%23rd)
- [Dockershim：历史背景](https://link.zhihu.com/?target=https%3A//kubernetes.io/zh-cn/blog/2022/05/03/dockershim-historical-context/)
- 容器江湖的爱恨情仇 - Thoughtworks中国的文章 - 知乎 [https://zhuanlan.zhihu.com/p/523574407](https://zhuanlan.zhihu.com/p/523574407)
- [Kubernetes容器平台，从繁荣走向碎片化](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzI5ODQ2MzI3NQ%3D%3D%26mid%3D2247507046%26idx%3D1%26sn%3D1c8f205730fb3b7b9519725b7d7730d0%26chksm%3Deca7e522dbd06c34be089b740b710238168da8009b111a44deadc89f08ea98b31a466d9dd95e%26mpshare%3D1%26scene%3D1%26srcid%3D0405CZnlY42ne6yorySr9VG5%26sharer_sharetime%3D1649166099552%26sharer_shareid%3Dd1c27a97d2ae54cfe57aae2b6d670930%23rd)
- [Kubernetes: The Documentary \[PART 1\]](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3DBE77h7dmoQU)
- [Kubernetes: The Documentary \[PART 2\]](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3D318elIq37PE)
- [K8s宣布弃用Docker，千万别慌！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/GHjvvTJ8ZerIyCqXB1BSUQ)
