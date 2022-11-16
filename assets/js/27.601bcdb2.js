(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{387:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook"}},[t._v("#")]),t._v(" Gitbook")]),t._v(" "),a("h2",{attrs:{id:"gitbook使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook使用"}},[t._v("#")]),t._v(" gitbook使用")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 全局安装"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("需要先安装node.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g gitbook-cli\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 进入目录下\n$ gitbook init \n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 运行服务\n$ gitbook serve --port \n")])])]),a("p",[t._v("其他命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ gitbook build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("书籍路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("输出路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n　　serve 命令也可以指定端口：\n\n$ gitbook serve --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2333")]),t._v("\n\n　　你还可以生成 PDF 格式的电子书：\n\n$ gitbook pdf ./ ./mybook.pdf\n\n　　生成 epub 格式的电子书：\n\n$ gitbook epub ./ ./mybook.epub\n\n　　生成 mobi 格式的电子书：\n\n$ gitbook mobi ./ ./mybook.mobi\n\n")])])]),a("h2",{attrs:{id:"gitbook插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook插件"}},[t._v("#")]),t._v(" gitbook插件")]),t._v(" "),a("h3",{attrs:{id:"gitbook常用的插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook常用的插件"}},[t._v("#")]),t._v(" gitbook常用的插件")]),t._v(" "),a("p",[t._v("Gitbook默认自带有5个插件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('highlight： 代码高亮\nsearch： 导航栏查询功能（不支持中文）\nsharing：右上角分享功能\nfont-settings：字体设置（最上方的"A"符号）\nlivereload：为GitBook实时重新加载\n')])])]),a("p",[t._v("插件安装、使用方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1、在book.json的plugins参数中添加插件名。\n2、终端使用gitbook install来安装插件，或使用NPM命令来单独安装：npm install gitbook-plugin-插件名。\n3、重启服务或者重新打包就能看见效果。\n4、如果使用gitbook install安装的很慢，建议使用npm init初始化一个package.json文件，然后每个包通过npm命令安装，以后就可以通过npm install一键快速安装依赖包了。\n")])])]),a("h3",{attrs:{id:"search-pro-高级搜索-支持中文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-pro-高级搜索-支持中文"}},[t._v("#")]),t._v(" search-pro 高级搜索（支持中文）")]),t._v(" "),a("p",[t._v("search-pro支持中文搜索，在使用此插件之前，需要将默认的search和lunr 插件去掉。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-lunr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-search"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"search-pro"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v('其中"-search"中的-符号代表去除默认自带的插件。')]),t._v(" "),a("h3",{attrs:{id:"chapter-fold-expandable-chapters-左侧目录可折叠-单用一个有bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-fold-expandable-chapters-左侧目录可折叠-单用一个有bug"}},[t._v("#")]),t._v(" chapter-fold && expandable-chapters 左侧目录可折叠（单用一个有bug）")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expandable-chapters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chapter-fold"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"splitter-侧边栏宽度可调节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#splitter-侧边栏宽度可调节"}},[t._v("#")]),t._v(" splitter 侧边栏宽度可调节")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"splitter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"page-treeview-在页面顶部显示目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-treeview-在页面顶部显示目录"}},[t._v("#")]),t._v(" page-treeview 在页面顶部显示目录")]),t._v(" "),a("p",[t._v("不需要插入标签，能支持到6级目录，在页面顶部显示。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"page-treeview"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginsConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"page-treeview"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"copyright"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Copyright &#169; aleen42"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minHeaderCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minHeaderDeep"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("插件的配置项可以不填。")]),t._v(" "),a("p",[t._v("目录下面一行是插件版权的信息，如果想要删除，需要在插件目录中打开：/node_modules/gitbook-plugin-page-treeview/lib/index.js。")]),t._v(" "),a("p",[t._v("大约43行，在generateContent方法定义中，该方法的返回值")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" renderContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div class="treeview__container">')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("copyRight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" renderContent"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改成：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" renderContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"anchor-navigation-ex-悬浮按钮目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anchor-navigation-ex-悬浮按钮目录"}},[t._v("#")]),t._v(" anchor-navigation-ex 悬浮按钮目录")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anchor-navigation-ex"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginsConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"anchor-navigation-ex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"showLevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标题是否显示层级序号.页面标题和导航中的标题都会加上层级显示。")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"showGoTop"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示返回顶部按钮")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("更多配置介绍 "),a("a",{attrs:{href:"https://github.com/zq99299/gitbook-plugin-anchor-navigation-ex/blob/master/doc/config.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitbook-plugin-anchor-navigation-ex"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"back-to-top-button-回到顶部按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-top-button-回到顶部按钮"}},[t._v("#")]),t._v(" back-to-top-button 回到顶部按钮")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"back-to-top-button"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"hide-element-隐藏-published-with-gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hide-element-隐藏-published-with-gitbook"}},[t._v("#")]),t._v(" hide-element 隐藏“ Published with Gitbook”")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hide-element"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginsConfig"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hide-element"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"elements"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".gitbook-link"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要隐藏的元素，可以通过浏览网页找到该class")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"code-复制代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-复制代码"}},[t._v("#")]),t._v(" code 复制代码")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h1",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/mingyue5826/p/10307051.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/mingyue5826/p/10307051.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://gitbook.zhangjikai.com/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gitbook.zhangjikai.com/plugins.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000019806829",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000019806829"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000019473512?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐12个实用的gitbook插件"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_38171180/article/details/89059127",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"gitbook报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook报错"}},[t._v("#")]),t._v(" gitbook报错")]),t._v(" "),a("h3",{attrs:{id:"gitbook出现typeerror-cb-apply-is-not-a-function解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook出现typeerror-cb-apply-is-not-a-function解决办法"}},[t._v("#")]),t._v(" gitbook出现TypeError: cb.apply is not a function解决办法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pes nodejs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# gitbook "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLI")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".2")]),t._v("\nInstalling GitBook "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("soft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nodejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitbook"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("graceful"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("polyfills"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("287")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("\n\nTypeError"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apply is not a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\n    at "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("soft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nodejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gitbook"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("graceful"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("polyfills"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("287")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n    at FSReqCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("oncomplete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("打开polyfills.js文件，找到这个函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statFix")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("orig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" orig\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Older versions of Node erroneously returned signed integers for")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// uid + gid.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("er"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x100000000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x100000000")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在polyfills.js文件找到下面的调用，把这三行代码注释掉就解决报错了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statFix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fstat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statFix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fstat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lstat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("statFix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lstat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);