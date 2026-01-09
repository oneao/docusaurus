## 安装

### windows

https://nginx.org/en/download.html
直接下载解压即可

### linux

1. 下载（可根据Windows的下载地址查看所需要的版本）
   ```bash
   wget https://nginx.org/download/nginx-1.28.1.tar.gz
   ```
2. 解压
   ```bash
   sudo tar -zxvf nginx-1.28.1.tar.gz -C /usr/local
   ```
3. 进入解压目录下
   ```bash
   cd /usr/local/nginx-1.28.1
   ```
4. 编译

   ```bash
   sudo ./configure --with-http_ssl_module

   sudo make
   sudo make install
   ```

   > --with-http_ssl_module：开启https
   > --prefix=/usr/local/nginx：指定安装文件夹

   > 报错 ./configure: error: the HTTP rewrite module requires the PCRE library. Nginx 编译时需要 PCRE 库，这是 Nginx 的 HTTP 重写模块（http_rewrite_module）所依赖的库。解决方法：
   >
   >```bash
   >sudo apt install libpcre3 libpcre3-dev
   >```

   > 报错 ./configure: error: SSL modules require the OpenSSL library.
   >```bash
   >sudo apt install libssl-dev
   >```

5. 编译成功后查看nginx的安装位置
   ```bash
   whereis nginx
   ```
6. 进入 `sbin` 目录运行 `nginx`

常用命令

```
./nginx                       //启动
./nginx -s stop               //停止
./nginx -s quit               //安全退出
./nginx -s reload             //重载配置文件（修改了配置文件需要执行此命令 比较常用）
ps aux|grep nginx             //查看ngnix进程
```

## 配置 https

参考配置

```
#user  nobody;
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    // ...
      server {
        listen       443 ssl;
        server_name  xxx.xx;

        ssl_certificate      /usr/local/nginx/https/xxx.xx_bundle.crt;
        ssl_certificate_key  /usr/local/nginx/https/xxx.xx.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   html;
            index  index.html index.htm;
        }
    }
}
```
