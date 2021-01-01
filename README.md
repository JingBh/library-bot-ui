# library-bot-ui

[图书馆室内引导机器人](https://github.com/larryyan/IndoorRobot) 项目的**非官方** UI 实现

![Electron version](https://img.shields.io/github/package-json/dependency-version/JingBh/library-bot-ui/dev/electron?logo=electron&logoColor=lightblue)
[![License](https://img.shields.io/github/license/JingBh/library-bot-ui)](https://choosealicense.com/licenses/gpl-3.0/)
![Version](https://img.shields.io/github/package-json/v/JingBh/library-bot-ui)
[![Releases](https://img.shields.io/github/v/release/JingBh/library-bot-ui)](https://github.com/JingBh/library-bot-ui/releases)

## 如何运行

### 下载发布版

在每个版本完成开发并发布后，你可以在 [Releases 页面](https://github.com/JingBh/library-bot-ui/releases) 找到我编译好的安装包，直接下载即可。

### 自行编译

如果发布版不能满足你的需求（想要使用最新 commit 或没有你使用的平台等等），你可以自行编译

#### 需求

 - Node.js
 - Yarn

#### 步骤

首先 clone 代码并安装依赖：

```shell
git clone https://github.com/JingBh/library-bot-ui.git
cd library-bot-ui

yarn
```

然后运行 `yarn electron:build` 命令，具体参数请参考 [Electron Builder CLI](https://www.electron.build/cli) 的文档。

---

<img alt="清华附中高研实验室 Logo" src="public/images/lab_logo.svg" width="18" height="18" /> 一个清华附中高研实验室项目
