# JavaScript vs ECMAScript

[JavaScript](https://baike.baidu.com/item/javascript)

[ECMAScript](https://baike.baidu.com/item/ECMAScript)

## 诞生

JavaScript的诞生伴随着互联网的发展，回顾它的历史，要从浏览器的历史开始说起。

**1990年底，万维网（World Wide Web）** 诞生，从此可以在互联网上浏览网页文件。最早的网页只能在操作系统的终端里访问，也就是说只能使用命令行操作网页，网页都是在字符窗口中显示，非常不方便。

**1992年底，Mosaic** 诞生，这是人类历史上第一个浏览器，从此网页可以在图形界面的窗口浏览。

**1994年10月，Mosaic通讯公司（Mosaic Communications）** 成立，不久后改名为**Netscape**。这家公司的方向，就是在**Mosaic**的基础上，开发面向普通用户的新一代浏览器**Netscape Navigator。**

**1994年12月**，Navigator 1.0发布，市场份额超过90%。

**Netscape**很快发现，**Navigator**浏览器需要一种可以嵌入网页的脚本语言，用来控制浏览器行为。当时，网速又慢又贵，让服务器处理用户忘记填写“用户名”这种功能无形中是一种浪费，最好能在用户发出数据之前，就能告诉用户“请填写用户名”。这就需要在网页中嵌入小程序，让浏览器能检测用户的行为。

所以，对于这种嵌入的小程序语言的诉求是：**功能不需要太强，语法较为简单，容易学习和部署。** 那一年，正逢Java语言问世，市场推广非常成功。Netsscape决定与Sun公司合作，浏览器支持嵌入Java小程序（Java applet）。但是网页小程序不需要Java这么“重”的语法，所以最后并未使用Java。

**1995年5月**，Brendan Eich只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源。

* 基本语法：借鉴C语言和Java语言
* 数据结构：借鉴Java语言，包括原始值和对象两大类
* 函数的使用：借鉴Scheme语言和Awk语言，将函数作为一等公民，并引入闭包
* 原形继承模型：借鉴Self语言（Smalltalk的一种变种）
* 正则表达式：借鉴Perl语言
* 字符串和数组：借鉴Python语言

为了保持简单，这种语言缺失了一些关键功能，比如快作用域、模块、子类型等，但依然可以通过现有的功能模拟这些功能。这种先天不足直接导致了JavaScript一个显著特点：对于其他语言，遵循语言的范式并学习功能即可，而对于JavaScript，你尝尝需要学习各种解决问题的范式。而且由于来源多样，从一开始就注定了，JavaScript的编程风格是多范式混合的。

JavaScript最初叫做**Mocha**，**1995年9月**改成**LiveScript**。**12月**，Netscape和Sun达成协议，JavaScript最终定名。这样一来，可以借助Java的成功造势。

**1995年12月4日**，Netscape和sun公司联合发布了JavaScript，并对外宣传JavaScript是Java的补充，属于轻量级Java，专门用来操作网页。

**1996年3月**，Navigator 2.0 浏览器正式内置了JavaScript脚本语言。

## JavaScript与ECMAScript的关系

**1996年8月，微软**模仿JavaScript开发了一种相近的语言，取名为JScript，首先内置于IE3.0。

**1996年11月**，Netscape决定将JavaScript提交给国际标准化组织**ECMA（European Computer Manufacturers Association）**，希望JavaScript能构成为国际标准，以此抵抗微软。

**1997年7月**，ECMA组织发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并取名为**ECMAScript**。**ECMAScript和JavaScript的关系是，前者是后者的标准，后者是前者的一种实现。**

**ECMAScript只用来标准化JavaScript语言的基本语法结构，与部署环境相关的标准则由其他标准规定**，比如DOM标准由W3C（World Wide Web Consortium）组织制定。

ECMA-262标准后来也被ISO（International Organization for Standardization）批准，标准号为ISO-16262.

## JavaScript的版本

**1997年7月**，ECMAScript 1.0发布。

**1998年6月**，ECMAScript 2.0版发布。

**1999年12月**，ECMAScript 3.0版发布，成为 JavaScript 的通行标准，得到了广泛支持。

**2007年10月**，ECMAScript 4.0版草案发布，对3.0版大幅升级，以Yahoo、Microsoft、Google为首的大公司反对JavaScript的大幅升级，主张小幅改动；以JavaScript创造者Brendan Eich为首的Mozilla则坚持当前草案。

**2008年7月**，由于分歧过大，ECMA决定废除4.0版，将其中功能改善的一小部分，发布为ECMAScript 3.1版，将其他激进的设想放入以后的版本。不久后，ECMAScript 3.1就改名为**ECMAScript 5**.

**2009年12月**，ECMAScript 5.0版正式发布。一些较为可行的设想定位为JavaScript.next继续开发，后来演变成ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。

**2011年6月**，ECMAScript 5.1版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）

**2012年底**，所有主要浏览器都支持 ECMAScript 5.1版的全部功能。

**2013年3月**，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。

**2013年12月**，ECMAScript 6 草案发布。然后是12个月的讨论期，听取各方反馈。

**2015年6月**，ECMAScript 6 正式发布，并且更名为“ECMAScript 2015”。这是因为 TC39 委员会计划，以后每年发布一个 ECMAScript 的版本，下一个版本在2016年发布，称为“ECMAScript 2016”，2017年发布“ECMAScript 2017”，以此类推。