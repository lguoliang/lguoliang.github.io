/**
 * JS模块的侧边栏
 */
module.exports = [{
  title: 'ECMAScript 新特性',
  children: [
    ['', 'javaScript vs ECMAScript'],
    ['ES新特性/01-块级作用域', '块级作用域'],
    '块级作用域、模板字符串',
    '对象与数组的解构、运算符',
    '函数进阶（箭头函数、默认参数）',
    '对象和数组的扩展用法',
    ['/guide/', 'Proxy、Reflect、Map、Set、Symbol'],
    ['/guide/', 'for...of、迭代器模式、生成器函数'],
    ['/guide/', 'ES Modules 模块系统'],
    ['/guide/', 'ES2016 - ES2020（ES7 - ES11）特性一览'],
    ['/guide/', '新特性编译工具（Babel）的使用'],
    ['/guide/', '新特性的 Polyfill：CoreJS 标准库'],
    'ES6+'
  ]
},
{
  title: 'JavaScript 异步编程',
  children: [
    ['/guide/', 'JavaScript 的单线程设计'],
    ['/guide/', '同步模式和异步模式的调用差异'],
    ['/guide/', '回调函数的执行原理'],
    ['/guide/', 'Promise 异步方案的使用进阶与剖析'],
    ['/guide/', '处理异步任务的任务队列和事件循环'],
    ['/guide/', 'JavaScript 内部的宏任务与微任务'],
    ['/guide/', 'ES 6 Generator 迭代器的异步应用'],
    ['/guide/', '使用 Async / Await 语法糖编写扁平的异步代码']
  ]
},
{
  title: 'TypeScript',
  children: [
    ['/guide/', '编程语言的几种不同类型系统'],
    ['/guide/', 'JavaScript 自有类型系统的问题'],
    ['/guide/', 'Flow 静态类型检查方案'],
    ['/guide/', 'Flow 工具的配置及相关插件的使用'],
    ['/guide/', 'TypeScript 基本语法'],
    ['/guide/', 'TypeScript 高级特性（泛型、接口）'],
    ['/guide/', 'TypeScript 内置对象标准库'],
    ['/guide/', 'TypeScript 的类型声明']
  ]
},
{
  title: '函数式编程范式',
  children: [
    ['/guide/', '函数式编程的本质以及应用场景'],
    ['/guide/', '如何以函数式编程风格创建应用程序'],
    ['/guide/', '用简单的代码构建复杂的应用程序'],
    ['/guide/', '纯函数的定义以及为什么使用纯函数'],
    ['/guide/', '为什么消除和控制副作用如此重要'],
    ['/guide/', '柯里化、compose、高阶函数的优点'],
    ['/guide/', '不可变的数据结构'],
    ['/guide/', '常见库（Lodash、Ramda.js）']
  ]
},
{
  title: 'JavaScript 性能优化',
  children: [
    ['/guide/', 'JavaScript 中的垃圾收集'],
    ['/guide/', 'JavaScript 内存管理'],
    ['/guide/', 'V8 垃圾回收机制分类'],
    ['/guide/', '引用计数、标记清除、标记整理和增量标记'],
    ['/guide/', 'Performance 工具的使用及注意事项'],
    ['/guide/', '20 个代码层面的优化细节']
  ]
},
{
  title: 'JavaScript',
  children: [
    'JavaScript内置对象',
    'Object'
  ]
}]