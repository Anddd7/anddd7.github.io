# “在我的电脑上明明可以的” — 图解 DevContainer 构建干净的开发环境

![](https://pic1.zhimg.com/v2-09afb8c8e561f75d874bde41efa327c0_r.jpg)

## 背景

作为一个全栈（干）工程师，可能需要工作在不同的语言和框架上。尽管我使用了一定的目录结构、各种包管理器、版本管理器，本地（MacOS）的开发环境还是日渐凌乱。

比如，一些工具是用 curl 安装的、自带 upgrade 命令，一些又是 brew。特别是切换版本时，可能这个项目需要 Terraform 1.3.5，另一个项目又需要 Terraform 1.2.0。加之 Java 使用的 asdf-vm、Go 使用的 gvm、Node 使用的 nvm，不同的工具也带来了不小的心智负担。

在鼓捣家中的 Windows（WSL）时使用的是 VSCode + WSL 插件，当时就关注到了 DevContainers。随着最近的深入体验，果断弃用 Intellij / Goland（最近 Java 写的太少了）。并且根据常用项目构建了 5 个开发容器，需要哪个开哪个，干净又卫生~

Refer to: [Developing inside a Container using Visual Studio Code Remote Development](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/docs/devcontainers/containers)

## 定义 Define

![](https://pic1.zhimg.com/80/v2-0b47d65b53aa9c6db6fef23f2c031afc_1440w.webp)

DevContainer 使用 json 来定义开发容器的行为，最重要的部分就是

- Image：容器的基础镜像 [containers.dev: Templates](https://link.zhihu.com/?target=https%3A//containers.dev/templates)

- 官方提供了很多主流语言、工具的基础镜像
- 也可以自己构建（需要安装 vs\_server 用于通信）

- Feature：需要在镜像中执行的脚本、安装的工具 [containers.dev: Features](https://link.zhihu.com/?target=https%3A//containers.dev/features)

- 官方 Spec 定义了一个 Feature 需要的参数接口，可以很容易的扩展自己的安装脚本
- 可作为 OCI 产物一起存到镜像仓库里

## 构建 & 启动 Build & Start

![](https://pic4.zhimg.com/80/v2-5664ed72bbb8f58fcd1cc0fa78d5b747_1440w.webp)

你可以使用 VSCode 的 Command: Create Dev Container 来配置并创建一个开发容器。或者你提前写好了配置文件并放到了对应的路径（.devcontainer/devcontainer.json），打开项目时 VSCode 会自动获取配置信息并提示你是否要 Reopen in Dev Container。

确定之后，DevContainer（的 CLI）工具会构建一个新的镜像并启动对应的容器。你可以按你的使用习惯，按语言、前后端、项目来划分和构建不同的镜像和容器，容器间互不影响。即使创建之后发现容器中缺少某些工具，你仍可以通过修改配置文件然后 reload，或者是直接在容器中安装。

如果开发时需要一些数据库、中间件，你可以使用 docker-compose 来运行一整套环境。  
\> [Create a development container using Visual Studio Code Remote Development](https://link.zhihu.com/?target=https%3A//code.visualstudio.com/docs/devcontainers/create-dev-container%23_use-docker-compose)

## 连接 Connect

![](https://pic2.zhimg.com/80/v2-fe602d2918e1baec9423793ff9c23f75_1440w.webp)

随后，VSCode 会通过 DevContainer 插件和安装在容器中的 server 进行连接，这时你就可以编辑容器中的文件了。你既可以将本机的代码通过 volume mount 到容器中，也可以直接在容器中 git clone。

（MacOS 和 Windows 上的 Docker 运行时是运行在虚拟机中的，所以 mount 会产生性能问题，建议直接在容器中 clone  
（但缺点就是宿主机上的其他程序就没法编辑这些文件了

**_"Enjoy your Dev Environments"_**

## Tips

- 可以通过 devcontainers.json 甚至 docker export 将开发环境分发给其他人，快速实现团队统一
- Github Codespaces 可以直接使用 devcontainers.json 配置，有条件的可以直接上云了
- 在开发容器中安装的插件只会关联到这个容器，可以避免大量插件出现的冲突

- 叠加 Profile 使用，还可以分离快捷键和 VSCode 配置 （当然必要性不是很高）

- 可以同时启动多个开发容器

![](https://pic2.zhimg.com/80/v2-8f372319fa1a9464e462ddd6534a7f99_1440w.webp)

- 一个开发容器中也可以创建多个项目

- 通过 Command Palette 创建一个开发容器 **或者** 创建一个 starter 项目，配置好 json 文件后 Reopen in Container

![](https://pic3.zhimg.com/80/v2-1959b48b01e08f0eb60d68a2259c27b2_1440w.webp)

- 进入容器后，通过 mkdir 或 git clone 创建新的项目目录
- 使用 Open Folder 打开新的项目目录
- 之后就可以通过 Open Recent 直接进入容器中的项目

![](https://pic2.zhimg.com/v2-2868526299016bfd589152ce101c29d1_b.png)

![](https://pic2.zhimg.com/80/v2-2868526299016bfd589152ce101c29d1_1440w.webp)

## 结尾

从想象力和技术力上来看，VSCode 确实比 Jetbrains 强太多了，或者是 Microsoft/Github 太强了。加上 Copilot / ChatGPT（不久的将来）加持，VSCode 成为宇宙第一 IDE 已经是板上钉钉的事情了。大厂也可以基于这样的技术实现 Remote Coding，在提升开发体验的同时保障数据资产，并且成本可能还更低一些。
