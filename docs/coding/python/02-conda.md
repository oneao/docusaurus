## 1️⃣ 下载地址
- **Anaconda (完整版)**: https://www.anaconda.com/download/success?reg=skipped  
- **Miniconda (轻量版)**: 官方安装包小，按需安装包。

---

## 2️⃣ 安装步骤
1. 下载对应系统安装包（Windows / Mac / Linux）。
2. 运行安装程序：
   - 建议添加到环境变量 PATH
   - 注册 `conda` 命令
3. 安装完成后，打开终端 / Anaconda Prompt。

---

## 3️⃣ 常用 Conda 命令

### 查看 Conda 版本

conda --version


### 更新 Conda

conda update conda


### 创建新环境
创建 Python 3.11 的环境 myenv

conda create -n myenv python=3.11

激活环境

conda activate myenv

退出环境

conda deactivate


### 删除环境

conda remove -n myenv --all


### 列出环境

conda env list


### 安装包
安装 numpy

conda install numpy

安装指定版本

conda install numpy=1.25


### 升级包

conda update numpy


### 删除包

conda remove numpy


### 导出 / 导入环境
导出环境到 YAML 文件

conda env export > environment.yml

从 YAML 文件创建环境

conda env create -f environment.yml


---

## 4️⃣ 常用技巧
- **优先使用 conda 安装包**，pip 仅在 conda 找不到时使用。
- **切换镜像源（国内加速）**

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

conda config --set show_channel_urls yes


- **查看已安装包**

conda list