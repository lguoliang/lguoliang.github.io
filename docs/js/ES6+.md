# ES6+常用

## let 变量声明

1. 变量不能重复声明
2. 块级作用域 （只在代码块里有效）
3. 不存在变量提升 （在声明之前不能使用变量）
4. 不影响作用域链 （在作用域内部）

## const 常量声明

1. 一定要赋初始值
2. 一般常量使用大写（潜规则）
3. 常量的值不能修改
4. 块级作用域
5. 对于数组和对象的元素修改，不算做对常量的修改，不会报错

## 数组和对象都可进行解构赋值

```js
//数组的解构
const F2 = ['f1','f2'];
let [a,b] = F2;
//a:f1,b:f2

//对象的解构
const zhao = {
    name: 'zhaosi',
    age: 18,
    play: function(){
        console.log('功能');
    }
};
let {play} = zhao;
play();//打印-->功能，节省了zhao.play();
```

## ES6 字符串声明 ``

1. let str = 字符串；
2. 内容中可以直接出现换行符
3. 变量拼接

let lovest = ‘123’;
let str = **${lovest}456789**

## 对象的简化写法

```js
let name = '123';
let change = function(){
    
}

const school = {
  name,
  change,
  improve(){
      
  }
}
```

## 箭头函数以及声明

```js
//声明一个函数 a,b形参
let fn = (a,b) => {
    return a + b;
}
//调用
let result = fn(1,2);
```

1. this是静态的。this始终指向函数声明时所在作用域下的this的值。
2. 不能作为构造实例化对象。
3. 不能使用arguments变量。
4. 箭头函数的简写
   1. 省略小括号，当形参有且只有一个的时候
    ```js
    let add = n =>{
      return n + n;
    }
    ```
   2. 省略花括号，当代码体只有一条语句的时候,此时return必须省略
而且语句的执行结果就是函数的返回值
   ```js
   let pow = n => n * n;
   ```
5. 箭头函数适合与this无关的回调，定时器，数组的方法回调
不适合与this有关的回调，事件回调，对象的方法

## 函数参数的默认值

ES6允许函数参数赋值初始值

1. 形参初始值，具有默认的参数，一般位置要靠后（潜规则）
2. 与解构赋值结合

```js
function connect({host=‘127.0.0.1’,username,password,port}){
  console.log(host);
  console.log(username);
  console.log(password);
  console.log(port);
}
connect({
  host:‘localhost’,
  username:‘root’,
  password:‘root’
  port:3306
})
```

## ES6 rest参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```js
function date(...args){
    console.log(args);
}
date('1','2','3');
```
rest参数必须放到参数最后

## 扩展运算符的介绍

… 扩展运算符能将 数组 转换为逗号分隔的 参数序列

```js
const args = ['1','2','3'];
change function(){
    console.log(arguments)
}
change(...args);//change('1','2','3');
change(args);//change(['1','2','3'])

```

应用：
1. 数组的合并
  ```js
  const str = […str1,…str2];
  ```

2. 数组的克隆
  ```js
  const str = [‘1’,‘2’,‘3’];
  const str1 = […str]; //[‘1’,‘2’,‘3’]
  ```

3. 将伪数组转为真正的数组

## Symbol的介绍与创建

1. 创建Symbol
  ```js
  let s = Symbol(‘标志/注释’);
  let s1 = Symbol();
  //s 与 s1 不相等
  let s2 = Symbol.for(‘123’);
  let s3 = Symbol.for(‘123’);
  //s2 与 s3相等
  ```

2. 不能与其他数据进行运算

使用：向对象中添加属性或方法

```js
 //第一种
let person = {};
let methods = {
    up:Symbol(),
    down:Symbol()
}
person[methods.up] = function(){
    console.log('1');
}
person[methods.down] = function(){
    console.log('2');
}
//第二种
let mysymbol2 = Symbol('age');
let people = {
  name: '张三',
  [Symbol.for('name')]: function(){
    console.log('我叫张三');
  },
  [mysymbol2]: function(){
    console.log('18');
  }
}
console.log(people);
console.log(people[Symbol.for('name')]);
console.log(people[mysymbol2]);
```

Symbol内置值

Symbol的属性用来做对象的属性（有很多属性）

1. Symbol.hasInstancce。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。

## 迭代器

迭代器（iterator）是一种接口，为各种不同的数据结构提供容易的访问机制。

（iterator就是对象的一种属性，叫做Symbol.iterator)

```js
const xiyou = ['1','2','3','4'];

for(let v of xiyou){
    console.log(v);
}
```

应用：自定义遍历数据（能够遍历对象）

## 生成器

生成器其实就是一个特殊的函数

异步编程 纯回调函数

```js
function * gen(){
    console.log(111);
    yield '函数代码的分隔符1';
     console.log(222);
    yield '函数代码的分隔符2';
    console.log(333);
    yield '函数代码的分隔符3';
    console.log(444);
}

let iterator = gen()
console.log(iterator.next());//-->111 + {done:flase,value:函数代码的分隔符1}
console.log(iterator.next());//-->222 + {done:flase,value:函数代码的分隔符2}
console.log(iterator.next());//-->333 + {done:flase,value:函数代码的分隔符3}
console.log(iterator.next());//-->444 + {done:true,value:undefined}
```

参数传递

```js
function * gen(arg){
    console.log(arg);
    let one = yield '111';
     console.log(one);
    let two = yield '222';
    console.log(two);
    let three = yield '333';
    console.log(three);
}

let iterator = gen(AAA)
console.log(iterator.next());//AAA
console.log(iterator.next('BBB'));//one-->BBB
console.log(iterator.next());
console.log(iterator.next());
```

生成器函数实例

1. 可以决定函数执行顺序和时间，需求：1s输出111，之后2s输出222，之后3s输出333.总用时6s

2. 解决回调地狱问题
   ```js
   function method1(){
    setTimeout(() => {
    let data = ‘数据1’;
    iterator.next(data);
    },1000)
    }
    function method2(){
    setTimeout(() => {
    let data = ‘数据2’;
    iterator.next(data);
    },1000)
    }
    function method3(){
    setTimeout(() => {
    let data = ‘数据3’;
    iterator.next(data);
    },1000)
    }

    function * gen(){
    let data1 = yield method1();//data1=数据1
    let data2 = yield method2();
    let data3 = yield method3();
    }
    //调用生成器函数
    let iterator = gen();
    iterator.next();
   ```

## Promise介绍与基本使用

异步编程新解决方案-地狱回调的问题

```js
//实例化对象
const p = new Promise(function(reslove,reject){
    setTimeout(function(){
        resolve('成功');
       // reject('失败');
    },1000)
});

//调用promise对象的then方法
//链式调用，也可在then方法里调用promise
p.then(function(value){
    //方法成功：
    console.log(value);
},function(reason){
    //失败
     console.error(reason);
})
```

promise多个异步串联起来

```js
const fs = require('fs');
    const p = new Promise((resolve,reject) => {
    fs.readFile("文件地址1",(err,data) =>{
        resolve(data);
    });
});

p.then(value => {
  return new Promise((resolve,reject) => {
    fs.readFile('文件地址2',(err,data) => {
      resolve([value,data]);
    });
  });
}).then(value => {
  return new Promise((resolve,reject) => {
    fs.readFile('文件地址3',(err,data) => {
      //将data压入value
      value.push(data);
      //请求成功返回value
      resolve(value);
    });
  });
}).then(value => {
  console.log(value.join('/r/n')); 
});
```

catch用法：处理失败结果

all用法：并行执行多个异步操作，并且在一个回调中处理所有的返回数据

```js
Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});
```

rece的用法:谁先执行的快，以谁为基准执行then

```js
Promise
.race([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});
//runAsync1(),results， runAsync2(), runAsync3()
```

例子：

```js
Promise
.race([requestImg(), timeout()])
.then(function(results){
    console.log(results);
})
.catch(function(reason){
    console.log(reason);
});
//requestImg()执行成功的话就会执行results，否则执行reason
```

## 集合实践

1. 数组去重
  ```js
  let arr = [1,2,3,1,4,1,5,2,6];
  let result = […new Set(arr)];
  ```

2. 交集
  ```js
  let arr2 = [3,4,5,4,5];
  //先去重
  let result = […new Set(arr)].filter(item => new Set(arr2).has(item));
  ```

3. 并集
  ```js
  let union = […new Set([…arr,…arr2])];
  ```

4. 差集
  ```js
  let diff = […new Set(arr)].filter(item => !(new Set(arr2).has(item));
  ```

## 对象扩展

1. Object.is 判断两个值是否相等。与===差不多，除了NaN与NaN
2. Object.assign(obj1,obj2) 对象的合并，相同的属性Obj2会覆盖Obj1，适用于配置合并。
3. Object.setPrototypeOf （obj1，obj2）设置原型对象.给obg1的原型对象设置成obj2.不推荐这样做。

## 模块化介绍、优势以及产品

import与export

暴露方式

1. 
    ```js
    export let name = '123';

    export function work(){
        console.log('工作');
    }
    ```
    
2. 
    ```js
    let name = '123';

    function work(){
        console.log('工作');
    }

    export {name,work}
    ```

3. 
    ```js
    //默认暴露
    export default {
        name: '123';
        work: function(){
            console.log('工作');
        }
    }
    ```

引入模块

1. 
    ```js
    //通用方式
    import * as 别名 from "./xxx/js";
    ```  

2. 
    ```js
    //解构赋值形式
    import {name,work} from "./xxx/js";
    import {name as 别名,work} from "./xxx/js";
    import {default as 别名} from "./xxx/js";
    ```

3. 
    ```js
    //简便形式 只针对默认暴露
    import 别名 from "./xxx/js";
    ```

浏览器使用模块化方式

```js
//在app.js中
import * as m1 from "./xxx.js";
import * as m2 from "./xxx.js";

<script src="./src/js/app.js" type="module"></script>
```

模块化引入NPM包

```js
//首先就是安装包，然后引入
import $ from 'jquery';//const $ = require("jquery");
```

## ES8-await表达式

```js
//创建promise对象
const p = new Promise((resolve,reject) => {
    resolve('成功');
    //reject('失败');
})
//await 要放在 async 函数中
async function main(){
    try{
        let result = await p;
        console.log(result);//成功
    }catch(e){
        console.log(e);//失败
    }
}
//调用函数
main();
```

## ES11特性

可选链操作符

避免层层对象判断

动态加载-懒加载

按需加载-import。使用import函数，返回结果是promise对象

```js
btn.onclick = function(){
    import('./xx.js').then(module => {
        module.方法或属性();
    })
}
```