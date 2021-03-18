# npm包管理

# package

## 删除发布的包

```bash
npm unpublish <package-name> 
```

如果权限不够的话加上 --force

```bash
npm unpublish <package-name> --force
```

## 查看当前npm用户

```bash
npm whoami
```

## npm登录

```bash
npm login
```

## npm初始化

```bash
npm init
```

```bash
package name      (包名字)
version           (包版本)
description       (包描述)
entry point       (包里面主文件也就是入口地址)
test command      (包的测试命令是什么，可以先不指定)
git repository    (git地址，这样就可以从npm官网直接点到git上，可以先不指定)
keywords          (关键字，别人搜东西时怎么搜到比较方便)
author            (作者)
license: (ISC)    (包遵循什么样的开源协议)
```

## 发布包(模块)

```bash
npm publish
```