# Gitbook

## gitbook使用

```bash
// 全局安装(需要先安装node.js)
$ npm install -g gitbook-cli
```


```bash
// 进入目录下
$ gitbook init 
```


```bash
// 运行服务
$ gitbook serve --port 
```


其他命令
```bash
$ gitbook build [书籍路径] [输出路径]

　　serve 命令也可以指定端口：

$ gitbook serve --port 2333

　　你还可以生成 PDF 格式的电子书：

$ gitbook pdf ./ ./mybook.pdf

　　生成 epub 格式的电子书：

$ gitbook epub ./ ./mybook.epub

　　生成 mobi 格式的电子书：

$ gitbook mobi ./ ./mybook.mobi

```

## gitbook插件

### gitbook常用的插件

Gitbook默认自带有5个插件：

    highlight： 代码高亮
    search： 导航栏查询功能（不支持中文）
    sharing：右上角分享功能
    font-settings：字体设置（最上方的"A"符号）
    livereload：为GitBook实时重新加载

插件安装、使用方法：

    1、在book.json的plugins参数中添加插件名。
    2、终端使用gitbook install来安装插件，或使用NPM命令来单独安装：npm install gitbook-plugin-插件名。
    3、重启服务或者重新打包就能看见效果。
    4、如果使用gitbook install安装的很慢，建议使用npm init初始化一个package.json文件，然后每个包通过npm命令安装，以后就可以通过npm install一键快速安装依赖包了。

### search-pro 高级搜索（支持中文）

search-pro支持中文搜索，在使用此插件之前，需要将默认的search和lunr 插件去掉。

```json
{
  "plugins": [
    "-lunr", "-search", "search-pro"
  ]
}
```

其中"-search"中的-符号代表去除默认自带的插件。

### chapter-fold && expandable-chapters 左侧目录可折叠（单用一个有bug）

```json
{
  "plugins": [
    "expandable-chapters",
    "chapter-fold",
  ]
}
```

### splitter 侧边栏宽度可调节

```json
{
  "plugins": ["splitter"]
}
```

### page-treeview 在页面顶部显示目录

不需要插入标签，能支持到6级目录，在页面顶部显示。

```json
{
  "plugins": ["page-treeview"],
  "pluginsConfig": {
    "page-treeview": {
      "copyright": "Copyright &#169; aleen42",
      "minHeaderCount": "2",
      "minHeaderDeep": "2"
    }
  }
}
```
插件的配置项可以不填。

目录下面一行是插件版权的信息，如果想要删除，需要在插件目录中打开：/node_modules/gitbook-plugin-page-treeview/lib/index.js。

大约43行，在generateContent方法定义中，该方法的返回值

```js
return renderContent ? `<div class="treeview__container">${copyRight + renderContent}</div>` : '';
// 改成：
return renderContent;
```

### anchor-navigation-ex 悬浮按钮目录

```json
{
  "plugins" : [ 
    "anchor-navigation-ex"
  ],
  "pluginsConfig": {
    "anchor-navigation-ex": {
      "showLevel": false, //标题是否显示层级序号.页面标题和导航中的标题都会加上层级显示。
      "showGoTop": false // 是否显示返回顶部按钮
    }
  }
}
```

更多配置介绍 [gitbook-plugin-anchor-navigation-ex](https://github.com/zq99299/gitbook-plugin-anchor-navigation-ex/blob/master/doc/config.md)

### back-to-top-button 回到顶部按钮

```json
{
  "plugins": [
    "back-to-top-button"
  ],
}
```

### hide-element 隐藏“ Published with Gitbook”

```json
{
  "plugins": [
    "hide-element"
  ],
  
  "pluginsConfig":{
    "hide-element": {
      "elements": [".gitbook-link"]	// 需要隐藏的元素，可以通过浏览网页找到该class
    }
  }
}
```

### code 复制代码

```json
{
  "plugins" : ["code"]
}
```

# 参考资料

[https://www.cnblogs.com/mingyue5826/p/10307051.html](https://www.cnblogs.com/mingyue5826/p/10307051.html)

[http://gitbook.zhangjikai.com/plugins.html](http://gitbook.zhangjikai.com/plugins.html)

[https://segmentfault.com/a/1190000019806829](https://segmentfault.com/a/1190000019806829)

[推荐12个实用的gitbook插件](https://segmentfault.com/a/1190000019473512?utm_source=tag-newest)

[link](https://blog.csdn.net/weixin_38171180/article/details/89059127)


## gitbook报错

### gitbook出现TypeError: cb.apply is not a function解决办法

```js
[root@pes nodejs]# gitbook -V
CLI version: 2.3.2
Installing GitBook 3.2.3
/data/soft/nodejs/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287
      if (cb) cb.apply(this, arguments)
                 ^

TypeError: cb.apply is not a function
    at /data/soft/nodejs/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287:18
    at FSReqCallback.oncomplete (fs.js:169:5)
```

打开polyfills.js文件，找到这个函数

```js
function statFix (orig) {
  if (!orig) return orig
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target, cb) {
    return orig.call(fs, target, function (er, stats) {
      if (!stats) return cb.apply(this, arguments)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      if (cb) cb.apply(this, arguments)
    })
  }
}
```

在polyfills.js文件找到下面的调用，把这三行代码注释掉就解决报错了

```js
fs.stat = statFix(fs.stat)
fs.fstat = statFix(fs.fstat)
fs.lstat = statFix(fs.lstat)
```