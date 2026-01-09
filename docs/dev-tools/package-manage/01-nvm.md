[nvm](https://nvm.uihtm.com/) 全英文也叫node.js version management，是一个nodejs的版本管理工具。nvm和n都是node.js版本管理工具，为了解决node.js各种版本存在不兼容现象可以通过它可以安装和切换不同版本的node.js。

前往 https://nvm.uihtm.com/doc/download-nvm.html 进行下载安装。

## Windows 安装

**配置路径**

```txt title="nvm/settings.txt"
root: D:\devtool\nvm
path: D:\devtool\nodejs
```

**配置镜像源**

```txt title="nvm/settings.txt"
node_mirror: http://npmmirror.com/mirrors/node/
npm_mirror: http://registry.npmmirror.com/mirrors/npm/
```

打开 cmd 输入 `nvm` 检查是否安装成功

## Linux 安装
执行命令安装
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

修改环境变量

``` bash
sudo vim  ~/.bashrc
```

新增以下内容

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
export NVM_IOJS_ORG_MIRROR=https://registry.npmmirror.com/mirrors/npm/
```

刷新使环境变量生效

```bash
source ~/.bashrc
```

## 常用命令

- `nvm ls-remote`：显示远程全部版本
- `nvm ls-remote --lts`：显示远程稳定版本
- `nvm list available`：查看所有可用的 Node.js 版本
- `nvm install <version>`：安装指定版本的 Node.js，例如：`nvm install 8.12.0`
- `nvm uninstall <version>`：卸载指定版本的 Node.js，适用于卸载失败时的恢复
- `nvm use <version>`：切换到指定的 Node.js 版本，例如 `nvm use 18.16.0`
- `nvm list`：查看已安装的 Node.js 版本
- `nvm off`：禁用 Node.js 版本管理（不卸载任何东西）
- `nvm on`：启用 Node.js 版本管理
- `nvm ls`：显示所有已安装的 Node.js 版本
- `nvm list available`：显示可以安装的所有 Node.js 版本
- `nvm v`：显示当前安装的 nvm 版本
- `nvm install stable`：安装最新的稳定版 Node.js

