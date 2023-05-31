# 云原生工程化指南

## 前言

- 目标
  - 云原生架构的 runbook
  - 扩展 平台工程 PoV 的内容，对能力和阶段予以详述
  - 可根据当前组织的情况和阶段自行选择对应的能力进行发展
- 受众
  - Cloud Architect：关注组织和架构的演进
  - Cloud Developer：关注能力的掌握
  - Cloud Ops：关注能力的掌握、流程和协作

> 实施云原生不是上了云、采购了一套工具链就行，还需要有工程化的能力，包括工具、活动、组织、人员、流程等。  

计算机科学与技术 vs 软件工程 <https://www.zhihu.com/question/24292554>

- 云原生科学和方法论
- 云原生理论
- 12 factors
- DevOps
- 云原生技术和工具链
- cloud model
- ci/cd
- 微服务
- 虚拟化

那么云原生下的工程化能力是什么

## 云原生工程

what 什么是工程化
why 为什么要工程化
how 工程化需要考虑哪些问题

工程化的本质：针对一个具体的业务、产品、组织场景，采用一个或多个技术，基于科学理论实现工程化。

- 降本增效
- 加速创新
- ...

云原生/AI时代，工程化必定导向 = 平台化 自动化 AI 化

### 云原生能力

> 需要思考出一个合理的能力分层，更面向实现、可操作层面的
>
> 云原生模型：API + 微服务 + devops ...
> DI 模型(infra): IaC + ... + ...
> DPS 模型：API + DI + ...

### 云原生组织

devops team topologies

- [The Art of Platform Thinking | Thoughtworks](https://www.thoughtworks.com/insights/blog/art-platform-thinking)

平台工程

- 根据 Atlassian 的说法，“平台团队创建可以由众多流程对齐的 [产品] 团队使用的功能，减少了流程对齐 [产品] 团队的资源和认知负荷…… 平台团队可以创建跨不同用户体验或产品的连贯体验。”
- 根据 Martin Fowler 和 Evan Bottcher 的说法，“数字平台是一个自助式 API、工具、服务、知识和支持基础，按照一个引人注目的内部产品的方式组织。自治交付团队可以利用该平台以更高的速度交付产品功能，并减少协调。”
- [CNCF 平台白皮书发布](https://mp.weixin.qq.com/s/z6i09qkCaoI79gH4O70skA)
- <https://tag-app-delivery.cncf.io/whitepapers/platforms/>

- 重新定义角色和组织
  - role 角色
    - cloudops, devops, sre
  - 组织
    - 产品型
    - 项目型
    - 中台
    - ...
  - 演进方向
    - ...
    -

### 工程 = 组织 x 能力

一个组织有计划、有规模的采用某种能力，以实现组织的某种目标，这就是工程。

- Dev（研发团队）- DevOps（赋能团队） - SRE（平台团队） - Ops（云平台）

演进

- 小团队： | 4. DevOps as an External Service ，将 Ops 托管出去，通过插件化、服务化来运维产品
- 中型团队： | 6. DevOps Advocacy Team 随着组织扩大，Dev 和 Ops 的内容变的更多，DevOps 不再只关注当前产品，会需要考虑运维的特殊需求
- 大型团队： | 7. SRE Team 随着组织进一步扩大，运维的产品越来越多，通过建立 SRE 团队来为组织建立统一的标准和工具链；DevOps 不再需要和 Ops 直接接触，而是使用 SRE 为组织量身打造的产品和“服务”
    collapsed:: true

- SRE = CloudOps，DevOps = 平台工程, Ops = 云平台/基础设施
  - SRE 提供统一的工作流程和工具链
  - Dev 通过使用这些预制工具来实现 DevOps

- ![image.png](../assets/image_1681439777504_0.png){:height 643, :width 542}
  - case 1 ...
    - 处于某个阶段的组织，具有 ... 的特性
    - 我们应采取 ... 等能力，以应对 ... 变化（当前阶段为什么需要这些能力，可以完成什么样的工作）
    - 当组织演进到 case x 时，我们应准备 ... （对演进方向的阐述，加上需要扩展的能力）
  - case 2 ...
    - ...

## 云原生工程实践

### 能力 1

适用角色：xxx
技术栈：xxx

tutorial
explaination
how to
reference

### 能力 2

适用角色：xxx
技术栈：xxx

tutorial
explaination
how to
reference
