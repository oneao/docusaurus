## 介绍
Anaconda 是一个免费、易于安装的包管理器、环境管理器和 Python 发行版，包含 1,500 多个开源包，并提供 免费社区支持。Anaconda 与平台无关，因此无论您在 Windows、macOS 还是 Linux 上都可以使用它。

## 安装
下载地址：https://www.anaconda.com/download/success?reg=skipped

下载 Miniconda 即可

### Windows

下载 exe 文件按照步骤安装即可。

#### 设置环境变量

将 `D:\devtool\anaconda3\condabin` 添加到环境变量中即可



## 常用命令

**创建环境**
```bash
conda create -n myenv python=3.9
```

**激活环境**
```bash
conda activate myenv
```

**退出环境**
```bash
conda deactivate
```

**删除环境**
```bash
conda remove -n myenv --all
```

**查看所有环境**
```bash
conda env list
```