# JavaScript内置对象

JavaScript 中对象通常包括两种类型：内置对象和浏览器对象，此外用户还可以自定义对象。在 ECMAScript 中，更精确的定义应该分为：本地对象、内置对象和宿主对象。

## 什么是对象？

在 JavaScript 中，对象是数据（变量），拥有属性和方法；可以说，是包含相关属性和方法的集合体。

js中万物皆对象: 字符串，数组，数值，函数......

## 对象包含两个要素：

1. 用来描述对象特性的一组数据，也就是若干变量，通常称为属性。
2. 用来操作对象特性的若干动作，也就是若干函数，通常称为方法。

每个对象带有对象的属性和方法（例如：图像都有长和宽属性；日期给我们方法供我们得到年、月、份等时间）

访问方式如下:

    对象名.属性名称
    对象名.方法名称

## JavaScript常见内置对象：

对象名称 | 对象说明
--- | ---
String | 字符串对象，用于处理字符串
Number | 数值对象，原始数值的包装对象，可以自动在原始数值和对象之间进行转换 
Array | 用于定义数组对象
Boolean | 布尔对象，用于将非布尔型的值转换为布尔值（True 或 False）
Date | 用于定义日期对象
Math | 数学对象，用于数学计算
Function | 用于表示开发者定义的任何参数
RegExp | 用于完成有关正则表达式的操作和功能
Arguments | 函数参数集合
Error对象 | 错误对象。用于错误处理。它还派生出以下几个处理错误的子类：<br>EvalError: 处理发生在eval()中的错误<br>SyntaxError: 处理语法错误<br>RangeError: 处理数值超出范围的错误<br>ReferenceError: 处理引用的错误<br>TypeError: 处理不是预期变量类型的错误<br>URIError: 处理发生在encodeURI()或decodeURI()中的错误
Object对象 |
Global对象 |

## Object对象的属性和方法

JavaScript的所有内置对象都是继承Object对象的，继承了所有的属性和方法，主要属性和方法, 如下：

属性和方法 | 说明
--- | ---
prototype属性 | 对该对象的原型的引用。原型是一个对象， 其他对象可以通过它实现属性的继承
constructor()方法 | 构造函数。构造函数是类的一个特殊函数。当创建类的对象实例时系统会自动调用构造函数，通过构造函数对类进行初始化操作
hasOwnProperty(proName)方法 | 检查对象是否有局部定义的、具有特定名字的属性
PropertyIsEnumerable(proName)方法 | 返回Boolean值，指出所指定的属性（proName）是否为一个对象的一部分以及该属性是否可列举的。如果proName存在于object中并且可以使用for...in循环穷举出，那边则返回True, 否则返回False
isPrototypeOf(object)方法 | 检查对象是否是指定对象的原型
toLocaleString()方法 | 返回对象地方化的字符串表示
toString()方法 | 返回对象的字符串表示
valueOf()方法 | 返回对象的原始值

## 其他对象的属性和方法

其他继承Object对象的基本属性和方法，如下：

### Arguments对象:

Arguments | 一个函数的参数和其他属性
--- | ---
arguments[] | 函数参数的数组
Arguments.callee | 当前正在运行的函数
Arguments.length | 传递给函数的参数的个数

### Error对象：

Error | 普通异常
--- | ---
Error.message | 可以读取的错误消息
Error.name | 错误的类型
Error.toString() | 把Error对象转换成字符串
EvalError | 在不正确使用eval()时抛出
SyntaxError | 抛出该错误用来通知语法错误
RangeError | 在数字超出合法范围时抛出
ReferenceError | 在读取不存在的变量时抛出
TypeError | 当一个值的类型错误时，抛出该异常
URIError | 由URL的编码和解码方法抛出

### Boolean对象：

Boolean | 对布尔值的支持
--- | ---
Boolean.toString() | 将布尔值的转换成字符串
Boolean.valueOf() | Boolean对象的布尔值

### String对象：

String | 对字符串的支持
--- | ---
String.charAt() | 返回字符串中的第n个字符
String.charCodeAt() | 返回字符串中的第n个字符的代码
String.concat() | 连接字符串
String.formCharCode() | 从字符编码创建一个字符串
String.indexOf() | 检索字符串
String.lastIndexOf() | 从后向前检素一个字符串
String.length | 字符串的长度
String.localeCompare() | 用本地特定的顺序来比较两个字符串
String.match() | 找到一个或多个正则表达式的匹配
String.replace() | 替换一个与正则表达式匹配的子串
String.search() | 检索与正则表达式相匹配的子串
String.slice() | 抽取一个子串
String.split() | 将字符串分割成字符串数组
String.substr() | 抽取一个子串
String.substring() | 返回字符串的一个子串
String.toLocaleLowerCase() | 把字符串转换小写
String.toLocaleUpperCase() | 将字符串转换成大写String
String.toLowerCase() | 将字符串转换成小写
String.toString() | 返回字符串
String.toUpperCase() | 将字符串转换成大写
String.valueOf() | 返回字符串

### Math对象：

Math | 算数函数和常量
--- | ---
Math.abs() | 计算绝对值
Math.ceil() | 对一个数上舍入
Math.floor() | 对一个数下舍入
Math.round() | 舍入到最接近的整数
Math.max() | 返回最大的参数
Math.min() | 返回最小的参数
Math.random() | 返回一个伪随机数
Math.E | 算术常量e

### RegExp对象：

RegExp | 用于模式匹配的正则表达式
--- | ---
RegExp.exec() | 通用的匹配模式
RegExp.global | 正则表达式是否全局匹配
RegExp.ignoreCase | 正则表达式是否区分大小写
RegExp.lastIndex | 下次匹配的起始位置
RegExp.source | 正则表达式的文本
RegExp.test() | 检测一个字符串是否匹配某个模式
RegExp.toString | 把正则表达式转换成字符串

### Array对象：

Array | 对数组的内部支持
--- | ---
Array.concat() | 连接数组
Array.join | 将数组元素连接起来以构建一个字符串
Array.length | 数组的大小
Array.pop() | 删除并返回数组的最后一个元素
Array.push() | 给数组添加元素
Array.reverse() | 颠倒数组中元素的顺序
Array.shift() | 将元素移出数组
Array.slice() | 返回数组的一部分
Array.sort() | 对数组元素进行排序
Array.splice() | 插入、删除或替换数组的元素
Array.toLocaleString() | 把数组转换成局部字符串
Array.toString() | 将数组转换成一个字符串
Array.unshift() | 在数组头部插入一个元素

### Number对象：

Number | 对数字的支持
--- | ---
Number.MAX_VALUE | 最大数值
Number.MIN_VALUE | 最小数值
Number.NaN | 特殊的非数字值
Number.NEGATIVE_INFINITY | 负无穷大
Number.POSITIVE_INFINITY | 正无穷大
Number.toExponential() | 用指数计数法格式化数字
Number.toFixed() | 采用定点计数法格式化数字
Number.toLocaleString() | 把数字转换成本地格式的字符串
Number.toPrecision() | 格式化数字的有效位
Number.toString() | 将一个数字转换成字符串
Number.valueOf() | 返回原始数值

### Function对象：

Function | Javascript的函数
--- | ---
Function.apply | 将函数作为一个对象的方法调用
Function.arguments[] | 传递给函数的参数
Function.call() | 将函数作为对象的方法调用
Function.caller | 调用当前函数的函数
Function.length | 已声明的参数的个数
Function.prototype | 对象类的原型
Function.toString() | 把函数转换成字符串

### Date对象：

Date | 操作日期和时间的对象
--- | ---
Date.getDate() | 返回一个月中的某一天
Date.getDay() | 返回一周中的某一天
Date.getFullyear() | 返回Date对象的年份字段
Date.getHours() | 返回Date对象的小时字段
Date.getMilliseconds() | 返回Date对象的毫秒字段
Date.getMinutes() | 返回Date对象的分钟字段
Date.getMonth() | 返回Date对象的月份字段
Date.getSeconds() | 返回Date对象的秒字段
Date.getTime() | 返回Date对象的毫秒表示
Date.getTimezoneOffset() | 判断与GMT的时间差
Date.getUTCDate() | 返回该天是一个月的哪一天(世界时)
Date.getUTCDay() | 返回该天是星期几(世界时)
Date.getUTCFullyear() | 返回年份(世界时)
Date.getUTCHours() | 返回Date对象的小时字段(世界时)
Date.getUTCMilliseconds() | 返回Date对象的毫秒字段(世界时)
Date.getUTCMinutes() | 返回Date对象的分钟字段(世界时)
Date.getUTCMonth() | 返回Date对象的月份(世界时)
Date.getUTCSeconds() | 返回Date对象的秒字段(世界时)
Date.getYear() | 返回Date对象的年份字段(世界时)
Date.parse() | 解析日期/时间字符串
Date.setDate() | 设置一个月的某一天
Date.setFullYear() | 设置年份,也可以设置月份和天
Date.setHours() | 设置Date对象的小时字段、分钟字段、秒字段和毫秒字段
Date.setMilliseconds() | 设置Date对象的毫秒字段
Date.setMinutes() | 设置Date对象的分钟字段和秒字段
Date.setMonth() | 设置Date对象的月份字段和天字段
Date.setSeconds() | 设置Date对象的秒字段和查秒字段
Date.setTime() | 以毫秒设置Date对象
Date.setUTCDate() | 设置一个月中的某一天(世界时)
Date.setUTCFullyear() | 设置年份、月份和天(世界时)
Date.setUTCHours() | 设置Date对象的小时字段、分钟字段、秒字段和毫秒字段(世界时)
Date.setUTCMilliseconds() | 设置Date对象的秒字段(世界时)
Date.setUTCMinutes() | 设置Date对象的分钟字段和秒字段(世界时)
Date.setUTCMonth() | 设置Date对象的月份字段和天数字段(世界时)
Date.setUTCSeconds() | 设置Date对象的秒字段和毫秒字段(世界时)
Date.setYear() | 设置Date对象的年份字段
Date.toDateString() | 返回Date对象日期部分作为字符串
Date.toGMTString() | 将Date转换为世界时字符串
Date.toLocaleDateString() | 返回Date对象的日期部分作为本地已格式化的字符串
Date.toLocaleString() | 将Date转换为本地已格式化的字符串
Date.toLocaleTimeString() | 返回Date对象的时间部分作为本地已格式化的字符串
Date.toString() | 将Date转换为字符串
Date.toTimeString() | 返回Date对象日期部分作为字符串
Date.toUTCString() | 将Date转换为字符串(世界时)
Date.UTC() | 将Date规苑转换成毫秒数
Date.valueOf() | 将Date转换成秒表示

[JavaScript内置对象](https://blog.csdn.net/qq_37284798/article/details/85805595)