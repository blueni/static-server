# node静态文件服务

静态文件服务器是仅提供静态文件访问的服务器，客户端访问的路径在服务器上有对应静态文件时，就会
将该文件发送到客户端。本教程将指导您使用`node`一步步搭建一个简单的静态文件服务器。

## 教程说明

使用`git tag`命令，得到如下信息：  
```
0-create-server
1-path-demo
2-read-file-demo
3-return-file
4-parse-url
5-extends-response
6-set-response
```
使用`git checkout 0-create-server`命令，切换到标签`0-create-server`学习第一节的内容，完全
掌握后再调用命令`git checkout 1-path-demo`,以此类推，直到完全领会本教程。

## 谨记

本教程只是指导您完成一个简单的静态文件服务，诸多功能尚未完善，切不可直接用在生产环境。
