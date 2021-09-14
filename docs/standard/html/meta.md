# meta相关

## 概要

meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

## 常用

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0,
maximum-scale=1.0, user-scalable=no">
```
* width -- viewport的宽度
* height -- viewport的高度
* initial-scale -- 初始的缩放比例
* minimum-scale -- 允许用户缩放到的最小比例
* maximum-scale -- 允许用户缩放到的最大比例
* user-scalable -- 是否允许用户缩放

## 网页相关

* **申明编码**

```html
<meta charset="utf-8">
```

* **优先使用 IE 最新版本和 Chrome**

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

* **浏览器内核控制** ，国内的浏览器很多都是双内核的（webkit和Trident），webkit内核（极速模式），IE内核（兼容模式）

```html
<!-- 默认用极速核(Chrome)： -->
<meta name="renderer" content="webkit">
<!-- 默认用ie兼容内核（IE6/7）： -->
<meta name="renderer" content="ie-comp">
<!-- 默认用ie标准内核（IE9/IE10/IE11/取决于用户的IE）： -->
<meta name="renderer" content="ie-stand">
```

* **禁止浏览器从本地计算机的缓存中访问页面内容**，这样设定，访问者将无法脱机浏览。

```html
<meta http-equiv="Pragma" content="no-cache">
```

* **转码申明**，用百度打开网页可能会对其进行转码（比如贴广告），避免转码可添加如下meta。

```html
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

## SEO优化相关

[参考文档](https://docs.microsoft.com/zh-cn/previous-versions/visualstudio/design-tools/expression-studio-4/ff724016(v=expression.40)?redirectedfrom=MSDN)

* **页面关键词**，每个网页应具有描述该网页内容的一组唯一的关键字，另不应超过 874 个字符。

```html
<meta name="keywords" content="your keywords" />
```

* **页面描述**，每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。

```html
<meta name="keywords" content="your description" />
```

* **搜索引擎索引方式**，obotterms是一组使用逗号(,)分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。确保正确使用nofollow和noindex属性值。

```html
<!--
  all：文件将被检索，且页面上的链接可以被查询；
  none：文件将不被检索，且页面上的链接不可以被查询；
  index：文件将被检索；
  follow：页面上的链接可以被查询；
  noindex：文件将不被检索；
  nofollow：页面上的链接不可以被查询。
-->
<meta name="robots" content="index,follow" />
```

* **页面重定向和刷新**，content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。

```html
<meta http-equiv="refresh" content="0;url=" />
```

* **其他**

```html
<meta name="author" content="author name" /> <!-- 定义网页作者 -->
<meta name="google" content="index,follow" />
<meta name="googlebot" content="index,follow" />
<meta name="verify" content="index,follow" />
```

## 移动设备相关

* **viewport**

```html
<!--这是常用的移动meta设置-->
<meta name="viewport" content="width=device-width,initial-scale=1.0,
minimun-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
```

* **WebApp全屏模式**，伪装app，离线应用。

设置 WebApp 是否进入全屏模式，该设置需要添加到主屏幕才生效

```html
<!-- 启用 WebApp 全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
```
> content设置 yes 进入全屏模式
> 
> 默认会启动 Safari 应用，使用 Safari 应用浏览
> 
> 通过检测 window.navigator.standalone 的 Boolean 值可以判断 web 应用是否处于全屏模式


* **主题颜色**

```html
<meta name="theme-color" content="#11a8cd">
```

* **隐藏状态栏/设置状态栏颜色**，只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```
> 此 meta 设置只在全屏模式生效
> 
> 默认值是 default
> 
> content="black"，状态栏背景黑色，网页内容在状态栏下面
> 
> content="black-translucent"，状态栏半透明，背景黑色，网页内容占满全屏

* **添加到主屏后的标题**

```html
<meta name="apple-mobile-web-app-title" content="标题">
```

* **忽略数字自动识别为电话号码** 

```html
<meta content="telephone=no" name="format-detection" />
```

* **忽略识别邮箱** 

```html
<meta content="email=no" name="format-detection" />
```

* **添加智能 App 广告条 Smart App Banner** ，告诉浏览器这个网站对应的app，并在页面上显示下载banner。[参考链接](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html)

```html
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
```

* **其他** [参考链接](http://fex.baidu.com/blog/2014/10/html-head-tags/?qq-pf-to=pcqq.c2c)

```html
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
```