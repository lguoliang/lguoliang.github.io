# 对象与数组的解构、rest 操作符

## 数组的解构

```js
let [a,b,c]=[1,2,3];
a // 1
b // 2
c // 3

let [q, w, ...e]=['a'];
q // a
w // undefined
e // []

let x = 1,
y = 2;
[x, y] = [y, x]
x // 2
y // 1
```

## 对象的解构

```js
let { a, b, c }={a:'aaa', b:'bbb'};
a // 'aaa'
b // 'bbb'
c // undefined

let { length } = [1,2];
length // 2
```

非同名局部变量赋值

```js
let {foo:bar}={foo:'aaa'}
bar // 'aaa'
```

嵌套对象解构

```js
let {a:[b,{c}]}={a:['hellow', {c:'world'}]};
a // 'hellow'
b // 'world'
```

## rest 操作符

<!-- ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments -->
如想把解构完的数组 剩余的元素在返回一个数组用 rest操作符   格式：...变量名

```js
let [x, ...y]=[1,2,3];
x // 1
y // [2, 3]
```

rest操作符 也可以当做函数的参数 用来接收不固定的参数 输出为数组，Rest参数必须是最后一个参数

```js
function fn(x, ...args){
  console.log(x)
  console.log(args)
}
fn('1','2','3');
// 1
// ["2", "3"]
```
