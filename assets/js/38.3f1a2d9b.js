(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{398:function(e,t,v){"use strict";v.r(t);var a=v(26),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"移动端常用私有属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移动端常用私有属性"}},[e._v("#")]),e._v(" 移动端常用私有属性")]),e._v(" "),v("p",[e._v("目前两大主流移动平台为 "),v("code",[e._v("iOS")]),e._v(" 和 "),v("code",[e._v("Android")]),e._v("，有不少带 "),v("code",[e._v("-webkit-")]),e._v(" 前辍的 CSS 私有属性以及一些 iOS only 属性，当中好些属性在日常需求中经常应用到。")]),e._v(" "),v("p",[v("code",[e._v("WebKit")]),e._v(" CSS 属性中的一部分已经被包含在 CSS 规范草案中，并且可能成为最后的推荐标准，但目前仍然是试验性的属性，还有一些属性是不规范的属性，它们没有出现在跟踪规范中。")]),e._v(" "),v("h2",{attrs:{id:"webkit-scrollbar"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-scrollbar"}},[e._v("#")]),e._v(" -webkit-scrollbar")]),e._v(" "),v("p",[v("code",[e._v("-webkit-scrollbar")]),e._v(" 是-webkit-私有的伪元素，用于对拥有overflow属性的区域 "),v("strong",[e._v("自定义滚动条的样式")]),e._v("。")]),e._v(" "),v("p",[e._v("譬如，为了隐藏滚动条，你可以这么做：")]),e._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".scroll::-webkit-scrollbar")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[e._v("height")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),v("p",[e._v("除了对整个滚动条的控制外，Webkit还提供了控制对滚动条各组成部分的表现渲染的伪元素，甚至具体到滚动条的各种状态行为的伪类。")]),e._v(" "),v("h3",{attrs:{id:"滚动条各块组成表现渲染的伪元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滚动条各块组成表现渲染的伪元素"}},[e._v("#")]),e._v(" 滚动条各块组成表现渲染的伪元素")]),e._v(" "),v("p",[e._v("一般而言，滚动条的主要组成部分包括：")]),e._v(" "),v("ul",[v("li",[e._v("滚动按钮 — 滚动按钮的夹角则被称为滚动角(corner)。")]),e._v(" "),v("li",[e._v("轨道 — 轨道(track)可以进一步分为轨枕(track pieces) 和滑块(thumb)。")])]),e._v(" "),v("p",[e._v("Webkit则根据滚动条各组成部分，提供了不同的伪元素来自定义样式。")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("::-webkit-scrollbar              { /* 1 */ }\n::-webkit-scrollbar-button       { /* 2 */ }\n::-webkit-scrollbar-track        { /* 3 */ }\n::-webkit-scrollbar-track-piece  { /* 4 */ }\n::-webkit-scrollbar-thumb        { /* 5 */ }\n::-webkit-scrollbar-corner       { /* 6 */ }\n::-webkit-resizer                { /* 7 */ }\n")])])]),v("p",[e._v("下图则是各伪元素对应的滚动条各部分：")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-scrollbar")]),e._v("：滚动条整体部分。可设置width、height、background、border等。")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-scrollbar-button")]),e._v("：滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-scrollbar-track")]),e._v("：轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-scrollbar-track-piece")]),e._v("：轨枕，也就是除去滚动滑块的部分。")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-scrollbar-thumb")]),e._v("：滚动滑块，也就是滚动条里面可以拖动的那部分。")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-scrollbar-corner")]),e._v("：滚动按钮的夹角则被称为滚动角。")]),e._v(" "),v("p",[v("code",[e._v("::-webkit-resizer")]),e._v("：用于定义右下角拖动块的样式。")]),e._v(" "),v("p",[v("strong",[e._v("需要注意的是")]),e._v("：若是水平滚动条，则width属性不起作用，height属性用来控制滚动条相应部分竖直方向高度；若是竖直滚动条，则height属性不起作用，width属性用来控制相应部分的宽度。")]),e._v(" "),v("h3",{attrs:{id:"滚动条各块组成的伪元素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滚动条各块组成的伪元素"}},[e._v("#")]),e._v(" 滚动条各块组成的伪元素")]),e._v(" "),v("p",[e._v("下面的伪类可以应用到上面的伪元素中。\n"),v("code",[e._v(":horizontal")]),e._v("：选择水平方向的滚动条。")]),e._v(" "),v("p",[v("code",[e._v(":vertical")]),e._v("：选择垂直方向的滚动条。")]),e._v(" "),v("p",[v("code",[e._v(":decrement")]),e._v("：适用于滚动按钮和轨枕。选择能够使得视窗位置递减状态(例如，垂直滚动条向上滚动，水平滚动条向左滚动。)的滚动按钮或轨枕。")]),e._v(" "),v("p",[v("code",[e._v(":increment")]),e._v("：适用于滚动按钮和轨枕。选择能够使得视窗位置递增状态(例如，垂直滚动条向下滚动，水平滚动条向右滚动。)的滚动按钮或轨枕。")]),e._v(" "),v("p",[v("code",[e._v(":start")]),e._v("：适用于滚动按钮和轨枕。选择位于滚动滑块前边的滚动按钮和轨枕。")]),e._v(" "),v("p",[v("code",[e._v(":end")]),e._v("：适用于滚动按钮和轨枕。选择位于滚动滑块后边的滚动按钮和轨枕。")]),e._v(" "),v("p",[v("code",[e._v(":double-button")]),e._v("：适用于滚动按钮和轨枕。选中紧挨着一对按钮的轨枕以及位于滚动条某一端的一对按钮中的其中一个滚动按钮。")]),e._v(" "),v("p",[v("code",[e._v(":single-button")]),e._v("：适用于滚动按钮和轨枕。选中紧挨着仅一个按钮的轨枕以及位于滚动条某一端的仅它本身一个的滚动按钮。")]),e._v(" "),v("p",[v("code",[e._v(":no-button")]),e._v("：适用于轨枕。选中轨道结束位置没有按钮的轨枕。")]),e._v(" "),v("p",[v("code",[e._v(":corner-present")]),e._v("：适用于选中滚动角不存在的滚动条。")]),e._v(" "),v("p",[v("code",[e._v(":window-inactive")]),e._v("：适用于所有滚动条，选中焦点不在该视窗的滚动区域。")]),e._v(" "),v("p",[v("strong",[e._v("另外，:enabled、:disabled、:hover、和:active等伪类同样在滚动条中适用。")]),e._v("\n为了更好地理解，以下是几个伪元素组合伪类的应用例子：")]),e._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[e._v("::-webkit-scrollbar-track-piece:start")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n /\\*滚动条上半边或左半边\\*/\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token selector"}},[e._v("::-webkit-scrollbar-thumb:window-inactive")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),v("span",{pre:!0,attrs:{class:"token selector"}},[e._v("/\\*当焦点不在当前区域滑块的状态\\*/\n\n::-webkit-scrollbar-button:horizontal:decrement:hover")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n /\\*当鼠标在水平滚动条下面的按钮上的状态\\*/\n")])])]),v("p",[e._v("或者，读者可以去阅读"),v("a",{attrs:{href:"http://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方例子"),v("OutboundLink")],1)]),e._v(" "),v("h4",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料：")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://webkit.org/blog/363/styling-scrollbars/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webkit-Styling Scrollbars"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"http://www.lyblog.net/detail/314.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义浏览器滚动条的样式，打造属于你的滚动条风格"),v("OutboundLink")],1)])]),e._v(" "),v("h2",{attrs:{id:"webkit-touch-callout"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-touch-callout"}},[e._v("#")]),e._v(" -webkit-touch-callout")]),e._v(" "),v("p",[v("code",[e._v("-webkit-touch-callout")]),e._v(" 是一个不规范的属性（"),v("a",{attrs:{href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsupported WebKit property"),v("OutboundLink")],1),e._v("），它没有出现在 CSS 规范草案中。")]),e._v(" "),v("p",[e._v("当你触摸并按住触摸目标时候，禁止或显示系统默认菜单。在iOS上，当你触摸并按住触摸的目标，比如一个链接，Safari浏览器将显示链接有关的系统默认菜单，这个属性可以让你禁用系统默认菜单。")]),e._v(" "),v("h3",{attrs:{id:"属性值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("none")]),e._v("：系统默认菜单被禁用")]),e._v(" "),v("li",[v("code",[e._v("inherit")]),e._v("：系统默认菜单不被禁用")])]),e._v(" "),v("h3",{attrs:{id:"兼容性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 2.0及更高版本的 Safari 浏览器可用")]),e._v(" "),v("li",[e._v("Android 尚不明确")])]),e._v(" "),v("h2",{attrs:{id:"webkit-tap-highlight-color"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-tap-highlight-color"}},[e._v("#")]),e._v(" -webkit-tap-highlight-color")]),e._v(" "),v("p",[v("code",[e._v("-webkit-tap-highlight-color")]),e._v(" 是一个不规范的属性（"),v("a",{attrs:{href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsupported WebKit property"),v("OutboundLink")],1),e._v("），它没有出现在 CSS 规范草案中。")]),e._v(" "),v("p",[e._v("在 iOS Safari 上，当用户点击链接或具有 JavaScript 可点击脚本的元素，系统会为这些被点击元素加上一个默认的透明色值，该属性可以覆盖该透明值。")]),e._v(" "),v("h3",{attrs:{id:"属性值-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-2"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("p",[e._v("<color>：颜色值")]),e._v(" "),v("h3",{attrs:{id:"兼容性-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-2"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 1.1.1及更高版本的Safari浏览器可用")]),e._v(" "),v("li",[e._v("大部分安卓手机")])]),e._v(" "),v("h2",{attrs:{id:"webkit-overflow-scrolling"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-overflow-scrolling"}},[e._v("#")]),e._v(" -webkit-overflow-scrolling")]),e._v(" "),v("p",[e._v("定义在具 "),v("code",[e._v("overflow:scroll")]),e._v(" 属性的元素内是否采用原生样式滚动行为")]),e._v(" "),v("h3",{attrs:{id:"属性值-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-3"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("auto")]),e._v("：默认值，单手滚动，滚动没有惯性效果")]),e._v(" "),v("li",[v("code",[e._v("touch")]),e._v("：原生样式滚动，应用此属性值会产生"),v("strong",[e._v("层叠上下文")]),e._v("（会影响定位参照物的属性，类似 "),v("code",[e._v("opacity")]),e._v("、"),v("code",[e._v("masks")]),e._v("、"),v("code",[e._v("transforms")]),e._v("属性，影响到 "),v("code",[e._v("position")]),e._v(" 的效果，甚至影响到 "),v("code",[e._v("position:fixed")]),e._v(" 的定位参照物，）")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-3"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 5.0 及更高版本")]),e._v(" "),v("li",[e._v("大部分安卓机")])]),e._v(" "),v("h2",{attrs:{id:"webkit-line-clamp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-line-clamp"}},[e._v("#")]),e._v(" -webkit-line-clamp")]),e._v(" "),v("p",[v("code",[e._v("-webkit-line-clamp")]),e._v(" 是一个不规范的属性（"),v("a",{attrs:{href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsupported WebKit property"),v("OutboundLink")],1),e._v("），它没有出现在 CSS 规范草案中。")]),e._v(" "),v("p",[e._v("限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他外来的WebKit属性。")]),e._v(" "),v("p",[e._v("常见结合属性：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("display: -webkit-box")]),e._v("："),v("strong",[e._v("必须结合的属性")]),e._v("，将对象作为弹性伸缩盒子模型显示。")]),e._v(" "),v("li",[v("code",[e._v("-webkit-box-orient")]),e._v("："),v("strong",[e._v("必须结合的属性")]),e._v("，设置或检索伸缩盒对象的子元素的排列方式。")]),e._v(" "),v("li",[v("code",[e._v("text-overflow")]),e._v("：可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本。")])]),e._v(" "),v("h3",{attrs:{id:"属性值-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-4"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("p",[e._v("<number>：块元素显示的文本的行数")]),e._v(" "),v("h3",{attrs:{id:"兼容性-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-4"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS")]),e._v(" "),v("li",[e._v("Andriod")])]),e._v(" "),v("h2",{attrs:{id:"webkit-appearance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-appearance"}},[e._v("#")]),e._v(" -webkit-appearance")]),e._v(" "),v("p",[v("code",[e._v("-webkit-appearance")]),e._v(" 是一个不规范的属性（"),v("a",{attrs:{href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("unsupported WebKit property"),v("OutboundLink")],1),e._v("），它没有出现在 CSS 规范草案中。")]),e._v(" "),v("p",[e._v("改变按钮和其他控件的外观，使其类似于原生控件。")]),e._v(" "),v("h3",{attrs:{id:"属性值-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-5"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("none")]),e._v("：去除系统默认 appearance 的样式，常用于 iOS 下移除原生样式")]),e._v(" "),v("li",[v("code",[e._v("button")]),e._v("：渲染成 button 的风格")]),e._v(" "),v("li",[v("code",[e._v("checkbox")]),e._v("：渲染成 input checkbox 样式的复选框按钮")]),e._v(" "),v("li",[v("code",[e._v("radio")]),e._v("：渲染成 radio 的风格")]),e._v(" "),v("li",[e._v("...")])]),e._v(" "),v("p",[e._v("更多属性值参考 "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance",target:"_blank",rel:"noopener noreferrer"}},[e._v("mozilla：-webkit-appearance 属性"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"兼容性-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-5"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 2.0及更高版本的Safari浏览器可用")]),e._v(" "),v("li",[e._v("Android 尚不明确")])]),e._v(" "),v("h2",{attrs:{id:"webkit-font-smoothing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-font-smoothing"}},[e._v("#")]),e._v(" -webkit-font-smoothing")]),e._v(" "),v("p",[e._v("字体平滑，该属性定义文本的平滑属性，但要"),v("strong",[e._v("注意以下说明：")])]),e._v(" "),v("blockquote",[v("p",[e._v("非标准属性，"),v("strong",[e._v("不建议用于网页上")]),e._v("，这个属性不能保证所有用户都能看到相同效果，这会使网站的字体渲染造成不一致，而此属性的渲染行为日后也有可能会改变")])]),e._v(" "),v("h3",{attrs:{id:"属性值-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-6"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("none")]),e._v("：去掉字体平滑效果，使字体带锯齿")]),e._v(" "),v("li",[v("code",[e._v("antialiased")]),e._v("：使字体在像素级别更平滑更轻细")]),e._v(" "),v("li",[v("code",[e._v("subpixel-antialiased")]),e._v("：在多数非 Retina 显示设备中字体将会更锐利。")])]),e._v(" "),v("p",[v("strong",[e._v("注意：以上属性在 Retina 设备上会有明显的效果，在非 Retina 设备上看不出差异")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-6"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-6"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("部分高清设备，如 Retina Mac")])]),e._v(" "),v("h2",{attrs:{id:"webkit-backface-visibility"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-backface-visibility"}},[e._v("#")]),e._v(" -webkit-backface-visibility")]),e._v(" "),v("p",[v("code",[e._v("backface-visibility")]),e._v(" 在 "),v("a",{attrs:{href:"http://www.w3.org/TR/css3-transforms/#backface-visibility-property",target:"_blank",rel:"noopener noreferrer"}},[e._v("W3文档"),v("OutboundLink")],1),e._v(" 有定义描述")]),e._v(" "),v("p",[e._v("定义转换元素的背面是否显示")]),e._v(" "),v("h3",{attrs:{id:"属性值-7"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-7"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("visible")]),e._v("：显示（默认值）")]),e._v(" "),v("li",[v("code",[e._v("hidden")]),e._v("：隐藏")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-7"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-7"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 2.0 及更高版本的 Safari 浏览器可用")]),e._v(" "),v("li",[e._v("大部分 Android")])]),e._v(" "),v("h2",{attrs:{id:"webkit-mask"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-mask"}},[e._v("#")]),e._v(" -webkit-mask")]),e._v(" "),v("p",[e._v("定义多样的蒙板效果属性（缩写属性，类似 "),v("code",[e._v("margin")]),e._v("）")]),e._v(" "),v("h3",{attrs:{id:"使用语法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用语法"}},[e._v("#")]),e._v(" 使用语法")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("<mask-image> [<mask-repeat> || <mask-attachment> || <mask-position> || <mask-origin> || <mask-clip> || <mask-composite>]*\nwhere \n<mask-position> = [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top  | center | bottom ]?\n")])])]),v("p",[e._v("默认值：")]),e._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token property"}},[e._v("-webkit-mask")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" none repeat scroll 0% 0% padding border add"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),v("h3",{attrs:{id:"属性值-8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-8"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("<mask-image>：为元素设置蒙板图片，蒙板图片会根据图片的透明区域对元素可视部分进行裁剪")]),e._v(" "),v("ul",[v("li",[e._v("<uri>：图片链接作为蒙板图片")]),e._v(" "),v("li",[e._v("<gradient>：渐变函数 "),v("code",[e._v("-webkit-gradient")]),e._v(" 作为蒙板图片")]),e._v(" "),v("li",[v("code",[e._v("none")]),e._v("：去掉蒙板图片")])])]),e._v(" "),v("li",[v("p",[e._v("<mask-repeat>：定义蒙板图片是否平铺或平铺的方式")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("repeat")]),e._v("：默认值，水平和垂直方向平铺")]),e._v(" "),v("li",[v("code",[e._v("repeat-x")]),e._v("：水平方向平铺")]),e._v(" "),v("li",[v("code",[e._v("repeat-y")]),e._v("：垂直方向平铺")]),e._v(" "),v("li",[v("code",[e._v("no-repeat")]),e._v("：不平铺")])])]),e._v(" "),v("li",[v("p",[e._v("<mask-attachment>：如果 "),v("code",[e._v("-webkit-mask-image")]),e._v(" 属性有设置，"),v("code",[e._v("attachment")]),e._v(" 决定该图片是否相对视窗固定或随着其容器滚动")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("scroll")]),e._v("：默认值，随容器滚动")]),e._v(" "),v("li",[v("code",[e._v("fixed")]),e._v("：相地视窗固定")])])]),e._v(" "),v("li",[v("p",[e._v("<mask-position>：定义蒙板图片的初始位置，书写格式类似 "),v("code",[e._v("background-position")]),e._v("----"),v("code",[e._v("<mask-position>[， <mask-position>]*")])]),e._v(" "),v("ul",[v("li",[e._v("<percentage>")]),e._v(" "),v("li",[e._v("<length>")]),e._v(" "),v("li",[v("code",[e._v("left")])]),e._v(" "),v("li",[v("code",[e._v("right")])]),e._v(" "),v("li",[v("code",[e._v("center")])])])]),e._v(" "),v("li",[v("p",[e._v("<mask-origin>：定义蒙板图片定位相对起点，与 "),v("code",[e._v("webkit-mask-position")]),e._v(" 属性相关。当 "),v("code",[e._v("-webkit-mask-attachment:fixed")]),e._v(" 的时候，该属性不生效。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("padding")]),e._v("：默认值，蒙板定位相对边距")]),e._v(" "),v("li",[v("code",[e._v("border")]),e._v("：蒙板定位相对边框")]),e._v(" "),v("li",[v("code",[e._v("content")]),e._v("：蒙板定位相对元素盒子内容")])])]),e._v(" "),v("li",[v("p",[e._v("<mask-clip>：如果 "),v("code",[e._v("-webkit-mask-image")]),e._v(" 属性有设置，"),v("code",[e._v("-webkit-mask-clip")]),e._v(" 将定义蒙板图片的裁剪区域")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("border")]),e._v("：默认值，蒙板图片延伸到容器的边框")]),e._v(" "),v("li",[v("code",[e._v("padding")]),e._v("：蒙板图片延伸到容器的边距")]),e._v(" "),v("li",[v("code",[e._v("content")]),e._v("：蒙板图片裁剪到元素盒子内容范围")]),e._v(" "),v("li",[v("code",[e._v("text")]),e._v("：蒙板图片裁剪到元素文本范围")])])]),e._v(" "),v("li",[v("p",[e._v("<mask-composite>：定义蒙板图片重合的裁剪显示方式")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("add")]),e._v("：默认值，图片重合不裁剪")]),e._v(" "),v("li",[v("code",[e._v("subtract")]),e._v("：去掉层级低的图形以及图片重合部分图形，只留层级高非重合部分图形")]),e._v(" "),v("li",[v("code",[e._v("intersect")]),e._v("：只留重合部分图形")]),e._v(" "),v("li",[v("code",[e._v("exclude")]),e._v("：只去掉重合部分图形")])])])]),e._v(" "),v("p",[e._v("有关属性更详细描述请参考：")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://www.w3.org/TR/css-masking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("w3 - css-masking"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - -webkit-mask"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"http://ued.ctrip.com/webkitcss/",target:"_blank",rel:"noopener noreferrer"}},[e._v("携程 UED - -webkit-mask"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"兼容性-8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-8"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("Safari 4.0 及更高版本")]),e._v(" "),v("li",[e._v("iOS 4.0 及更高版本")]),e._v(" "),v("li",[e._v("Android 2.1 及更高版本")])]),e._v(" "),v("h2",{attrs:{id:"webkit-user-select"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-user-select"}},[e._v("#")]),e._v(" -webkit-user-select")]),e._v(" "),v("p",[e._v("定义用户是否能选中元素内容")]),e._v(" "),v("h3",{attrs:{id:"属性值-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-9"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("auto")]),e._v("：可选中元素内容")]),e._v(" "),v("li",[v("code",[e._v("none")]),e._v("：不能选中任何内容")]),e._v(" "),v("li",[v("code",[e._v("text")]),e._v("：可选中元素内的文本")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-9"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-9"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 3.0 及更高版本的 Safari")]),e._v(" "),v("li",[e._v("大部分安卓手机")])]),e._v(" "),v("h2",{attrs:{id:"webkit-user-modify"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-user-modify"}},[e._v("#")]),e._v(" -webkit-user-modify")]),e._v(" "),v("p",[e._v("定义用户是否可编辑元素内容")]),e._v(" "),v("h3",{attrs:{id:"属性值-10"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-10"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("read-only")]),e._v("：只读")]),e._v(" "),v("li",[v("code",[e._v("read-write")]),e._v("：可读可写，粘贴内容会保留富文本格式（ Android 机不保留富文本格式 ）")]),e._v(" "),v("li",[v("code",[e._v("read-write-plaintext-only")]),e._v("：可读可写，粘贴内容所有富文本格式都会丢失")])]),e._v(" "),v("p",[v("strong",[e._v("注意：使用这个属性的时候，请不要出现 "),v("code",[e._v("-webkit-user-select: none")]),e._v("，文本无法选中的情况下，在 Safari 该属性不生效，不过在 Chrome 依然生效")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-10"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-10"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 5.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 3.0 及更高版本")]),e._v(" "),v("li",[e._v("大部分安卓手机")])]),e._v(" "),v("h2",{attrs:{id:"webkit-text-stroke"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-text-stroke"}},[e._v("#")]),e._v(" -webkit-text-stroke")]),e._v(" "),v("p",[e._v("定义文本描边，可以设计描边的宽和颜色，一般与文本填充属性 "),v("code",[e._v("-webkit-text-fill-color")]),e._v(" 共用。")]),e._v(" "),v("h3",{attrs:{id:"属性值-11"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-11"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[e._v("<length>：长度单位")]),e._v(" "),v("li",[e._v("<color>：颜色值")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-11"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-11"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 2.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 3.0 及更高版本")]),e._v(" "),v("li",[e._v("安卓尚不明确")])]),e._v(" "),v("h2",{attrs:{id:"webkit-text-fill-color"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-text-fill-color"}},[e._v("#")]),e._v(" -webkit-text-fill-color")]),e._v(" "),v("p",[e._v("定义文本填充，一般与文本描边属性 "),v("code",[e._v("-webkit-text-stroke")]),e._v(" 共用。")]),e._v(" "),v("h3",{attrs:{id:"属性值-12"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-12"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[e._v("<color>：颜色值")]),e._v(" "),v("li",[v("code",[e._v("currentcolor")]),e._v("：元素 "),v("code",[e._v("color")]),e._v(" 属性值")]),e._v(" "),v("li",[v("code",[e._v("-webkit-activelink")]),e._v("：链接被点击时系统的默认颜色")])]),e._v(" "),v("p",[e._v("更多属性值参考："),v("a",{attrs:{href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safari CSS Reference -webkit-text-fill-color"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"兼容性-12"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-12"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 2.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 3.0 及更高版本")]),e._v(" "),v("li",[e._v("安卓尚不明确")])]),e._v(" "),v("h2",{attrs:{id:"webkit-text-size-adjust"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-text-size-adjust"}},[e._v("#")]),e._v(" -webkit-text-size-adjust")]),e._v(" "),v("p",[e._v("定义 iOS Safari 网页文本大小调整属性")]),e._v(" "),v("h3",{attrs:{id:"属性值-13"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-13"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[e._v("<percentage>：百分比值，字体显示调整值")]),e._v(" "),v("li",[v("code",[e._v("auto")]),e._v("：字体自动调整")]),e._v(" "),v("li",[v("code",[e._v("none")]),e._v("：字体不能自动调整")])]),e._v(" "),v("h3",{attrs:{id:"兼容性-13"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-13"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 1.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari on iOS only")]),e._v(" "),v("li",[e._v("安卓尚不明确")])]),e._v(" "),v("h2",{attrs:{id:"webkit-marquee"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-marquee"}},[e._v("#")]),e._v(" -webkit-marquee")]),e._v(" "),v("p",[e._v("定义滚动文本内容属性（缩写属性，类似"),v("code",[e._v("margin")]),e._v("）。")]),e._v(" "),v("h3",{attrs:{id:"使用语法-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用语法-2"}},[e._v("#")]),e._v(" 使用语法")]),e._v(" "),v("p",[v("code",[e._v("-webkit-marquee: direction increment repetition style speed")])]),e._v(" "),v("h3",{attrs:{id:"属性值-14"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-14"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[e._v("<direction>：滚动方向\n"),v("ul",[v("li",[v("code",[e._v("ahead")]),e._v("：从下到上滚动")]),e._v(" "),v("li",[v("code",[e._v("auto")]),e._v("：默认滚动方向")]),e._v(" "),v("li",[v("code",[e._v("backwards")]),e._v("：从右到左滚动")]),e._v(" "),v("li",[v("code",[e._v("down")]),e._v("：从上到下滚动")]),e._v(" "),v("li",[v("code",[e._v("forwards")]),e._v("：从左到右滚动")]),e._v(" "),v("li",[v("code",[e._v("left")]),e._v("：从右到左滚动")]),e._v(" "),v("li",[v("code",[e._v("reverse")]),e._v("：从上到下滚动")]),e._v(" "),v("li",[v("code",[e._v("right")]),e._v("：从左到右滚动")]),e._v(" "),v("li",[v("code",[e._v("up")]),e._v("：从下到上滚动")])])]),e._v(" "),v("li",[e._v("<increment>：每次移动的距离\n"),v("ul",[v("li",[e._v("[<percentage> | <length>]")]),e._v(" "),v("li",[v("code",[e._v("large")]),e._v("：距离常量")]),e._v(" "),v("li",[v("code",[e._v("medium")]),e._v("：距离常量")]),e._v(" "),v("li",[v("code",[e._v("small")]),e._v("：距离常量")])])]),e._v(" "),v("li",[e._v("<repetition>：文字滚动的重复次数\n"),v("ul",[v("li",[e._v("非负整数")]),e._v(" "),v("li",[v("code",[e._v("infinite")]),e._v("：无限次")])])]),e._v(" "),v("li",[e._v("<style>：文字滚动的方式\n"),v("ul",[v("li",[v("code",[e._v("alternate")]),e._v("：重复滚动")]),e._v(" "),v("li",[v("code",[e._v("none")]),e._v("：停止滚动")]),e._v(" "),v("li",[v("code",[e._v("scroll")]),e._v("：在定义方向上滚动")]),e._v(" "),v("li",[v("code",[e._v("slide")]),e._v("：定义方向上滚动，内容显示完毕或者内容滚动到滚动区域另一端边框时候都会停止下来")])])]),e._v(" "),v("li",[e._v("<speed>：滚动或滑动的速度\n"),v("ul",[v("li",[e._v("非负整数（毫秒单位）或带时间单位的非负整数")]),e._v(" "),v("li",[v("code",[e._v("fast")])]),e._v(" "),v("li",[v("code",[e._v("normal")])]),e._v(" "),v("li",[v("code",[e._v("slow")])])])])]),e._v(" "),v("h3",{attrs:{id:"兼容性-14"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-14"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 1.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 3.0 及更高版本")]),e._v(" "),v("li",[e._v("大部分安卓手机")])]),e._v(" "),v("h2",{attrs:{id:"webkit-filter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-filter"}},[e._v("#")]),e._v(" -webkit-filter")]),e._v(" "),v("p",[e._v("滤镜属性可以让元素本身内容（文本、背景等）及其子元素加上滤镜效果")]),e._v(" "),v("h3",{attrs:{id:"属性值-15"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-15"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("blur(<length>)")]),e._v("：模糊，原始效果值为 "),v("code",[e._v("0px")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("brightness([ <number> | <percentage> ])")]),e._v("：亮度，原始效果值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("contrast([ <number> | <percentage> ])")]),e._v("：对比度，原始效果值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("drop-shadow( <length>{2，4} <color>?)")]),e._v("：投影，原始效果值为所有长度值为 "),v("code",[e._v("0")]),e._v("，长度值至少2个，最多4个，")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("grayscale([ <number> | <percentage> ] )")]),e._v("：灰度，原始效果值为 "),v("code",[e._v("0")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("hue-rotate( <angle>)")]),e._v("：相位，原始效果值为 "),v("code",[e._v("0deg")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("invert( [ <number> | <percentage> ])")]),e._v("：反相，原始效果值为 "),v("code",[e._v("0")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("opacity([ <number> | <percentage> ] )")]),e._v("：透明度，原始效果值为 "),v("code",[e._v("1")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("saturate([ <number> | <percentage> ])")]),e._v("：饱和度，原始效果值为 "),v("code",[e._v("1")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("sepia([ <number> | <percentage> ])")]),e._v("：乌贼墨，原始效果值为 "),v("code",[e._v("0")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])])]),e._v(" "),v("p",[e._v("关于  "),v("code",[e._v("-webkit-filter")]),e._v(" 与 "),v("code",[e._v("-webkit-backdrop-filter")]),e._v(" 的属性对比可以参考：")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://aotu.io/notes/2015/12/23/new-safari-9/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's New in Safari 9.0 - backdrop-filter "),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"兼容性-15"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-15"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 8.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 8.0 及更高版本")]),e._v(" "),v("li",[e._v("Android 4.4 及更高版本")])]),e._v(" "),v("h2",{attrs:{id:"webkit-backdrop-filter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit-backdrop-filter"}},[e._v("#")]),e._v(" -webkit-backdrop-filter")]),e._v(" "),v("p",[e._v("背景滤镜属性可以让元素的背景或元素层级以下的元素加上滤镜效果")]),e._v(" "),v("h3",{attrs:{id:"属性值-16"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性值-16"}},[e._v("#")]),e._v(" 属性值")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("blur(<length>)")]),e._v("：模糊，原始效果值为 "),v("code",[e._v("0px")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("brightness([ <number> | <percentage> ])")]),e._v("：亮度，原始效果值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("contrast([ <number> | <percentage> ])")]),e._v("：对比度，原始效果值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("drop-shadow( <length>{2，3} <color>?)")]),e._v("：投影，原始效果值为所有长度值为 "),v("code",[e._v("0")]),e._v("，长度值至少2个，最多3个，"),v("strong",[e._v("注意：不支持投影扩展值和混合投影")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("grayscale([ <number> | <percentage> ] )")]),e._v("：灰度，原始效果值为 "),v("code",[e._v("0")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("hue-rotate( <angle>)")]),e._v("：相位，原始效果值为 "),v("code",[e._v("0deg")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("invert( [ <number> | <percentage> ])")]),e._v("：反相，原始效果值为 "),v("code",[e._v("0")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("opacity([ <number> | <percentage> ] )")]),e._v("：透明度，原始效果值为 "),v("code",[e._v("1")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("saturate([ <number> | <percentage> ])")]),e._v("：饱和度，原始效果值为 "),v("code",[e._v("1")]),e._v("，不接受负值")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("sepia([ <number> | <percentage> ])")]),e._v("：乌贼墨，原始效果值为 "),v("code",[e._v("0")]),e._v("，最大值为 "),v("code",[e._v("1")]),e._v(" 或 "),v("code",[e._v("100%")]),e._v("，不接受负值")])])]),e._v(" "),v("p",[e._v("关于 "),v("code",[e._v("-webkit-filter")]),e._v(" 与 "),v("code",[e._v("-webkit-backdrop-filter")]),e._v(" 的属性对比可以参考：")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://aotu.io/notes/2015/12/23/new-safari-9/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's New in Safari 9.0"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"兼容性-16"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-16"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 9.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 9.0 及更高版本")]),e._v(" "),v("li",[e._v("安卓尚未明确")])]),e._v(" "),v("h2",{attrs:{id:"position-webkit-sticky"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#position-webkit-sticky"}},[e._v("#")]),e._v(" position:-webkit-sticky")]),e._v(" "),v("p",[e._v("可以使得元素在页面没有滚动的情况下表现得像relative，在滚动条滚到该元素区域的时候根据top值的设置使元素固定离顶部的距离，表现像 "),v("code",[e._v("position:fixed")]),e._v("，也就是常见的吸顶需求效果。")]),e._v(" "),v("h3",{attrs:{id:"特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("依赖父级元素滚动区域")])]),e._v(" "),v("li",[v("p",[e._v("定位参考物始终是 viewport，"),v("code",[e._v("transform")]),e._v(" 等可以改变 "),v("code",[e._v("position:fixed")]),e._v(" 定位参考物的属性也没办法改变 "),v("code",[e._v("position:-webkit-sticky")]),e._v(" 的定位参考物")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("position:-webkit-sticky")]),e._v(" 属性的元素固定区域只依赖其父元素的可滚动高度，如果其父元素高度小于元素本身的高度，fixed效果失效。")])])]),e._v(" "),v("h3",{attrs:{id:"兼容性-17"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-17"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 6.1 及更高版本")]),e._v(" "),v("li",[e._v("iOS only")])]),e._v(" "),v("h2",{attrs:{id:"apple-system"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#apple-system"}},[e._v("#")]),e._v(" -apple-system")]),e._v(" "),v("p",[e._v("苹果操作系统会从两种不同外观和大小的字体进行自动转换去调节系统新字体 “San Francisco”，可以通过 CSS 规则")]),e._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token property"}},[e._v("font-family")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" -apple-system "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sans-serif"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),v("p",[e._v("让系统智能选择适配操作系统的字体，添加 "),v("code",[e._v("-apple-system")]),e._v(" 可以使字体变得更圆润锐利。")]),e._v(" "),v("p",[e._v("关于 "),v("code",[e._v("-apple-system")]),e._v(" 更详细的介绍可以参考：")]),e._v(" "),v("p",[v("a",{attrs:{href:"http://aotu.io/notes/2015/12/23/new-safari-9/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's New in Safari 9.0"),v("OutboundLink")],1)]),e._v(" "),v("h3",{attrs:{id:"兼容性-18"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兼容性-18"}},[e._v("#")]),e._v(" 兼容性")]),e._v(" "),v("ul",[v("li",[e._v("iOS 9.0 及更高版本")]),e._v(" "),v("li",[e._v("Safari 9.0 及更高版本")]),e._v(" "),v("li",[e._v("iOS / OS X only")])]),e._v(" "),v("h2",{attrs:{id:"更多-webkit-css-属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更多-webkit-css-属性"}},[e._v("#")]),e._v(" 更多 WebKit CSS 属性")]),e._v(" "),v("p",[e._v("更多 "),v("code",[e._v("-webkit-")]),e._v(" CSS 属性介绍请参考：")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Webkit_Extensions",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN文档 - Webkit Extensions "),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"http://ued.ctrip.com/webkitcss/",target:"_blank",rel:"noopener noreferrer"}},[e._v("携程 UED - webkitcss"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);