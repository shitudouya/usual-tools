# usual-tools  v1.5.0

Some common tools for javascript to improve your development efficiency

Browser support: Major Browsers and IE>=9

## Installation

npm

```
npm install usual-tools --save
```

yarn

```
yarn add  usual-tools
```

use cdn

```html
<script src="https://cdn.jsdelivr.net/npm/usual-tools@1.5.0/index.js"></script>
```

## Usage


**ES6 module:**

```javascript
import usualTools from 'usual-tools'
usualTools.type('1') //string

//or

import {type} from 'usual-tools'
type([]) //array
```

**CommonJS:**：

```javascript
const {deepClone} = require('usual-tools')
let obj = { name: "xtd", age: 23 };
let newObj = deepClone(obj);
console.log(newObj);
```

**Use in Browser:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/usual-tools@1.5.0/index.js"></script>
  <script>
   console.log(usualTools.type([]))
  </script>
</body>
</html>
```

## API

> isPlainObject(obj)  

判断是否为纯粹的对象，如{}为true，[]为false，参数obj为传入的对象，返回值为true或false

```javascript
console.log(isPlainObject({})) //true
console.log(isPlainObject([])) //false
console.log(isPlainObject(new Date)) //false
console.log(isPlainObject(new RegExp)) //false
```

> isEmpty(target)

判断传入的目标值是否为空，target为传入的目标值，返回值为true或fasle

```java
console.log(isEmpty({})) //true
console.log(isEmpty([])) //true
console.log(isEmpty(null)) //true
console.log(isEmpty(undefined)) //true
console.log(isEmpty('xtd')) //false
console.log(isEmpty([''])) //false
```

> type(target)

检测传入目标值的类型，target为传入的目标值，返回值为检测的类型

```javascript
console.log(type({})) //object
console.log(type([])) //array
console.log(type(null)) //null
console.log(type(undefined)) //undefined
console.log(type('xtd')) //string
console.log(type(1)) //number
```

> once(fn)

只执行一次函数，只有第一次的函数生效，如果该函数执行第二次将会返回第一次的结果。传入的fn为执行的函数

```javascript
var sum = function (a,b) {
  return a+b;
}
var result = once(sum);
console.log(result(1,2)) //3
console.log(result(2,3)) //3
```

> eq(a,b)

判断传入的俩个值是否相等，包括[]和[],{}和{}，a,b为比较的俩个值，返回的结果为true或false

```javascript
console.log(eq(+1,1)) //true
console.log(eq(+0,-0)) //false
console.log(eq(1,1)) //true
console.log(eq([],[])) //true
console.log(eq({},{}))  //true 
console.log(eq([1,2],[1,2])) //true
```

> debounce(fn,wait)

函数防抖。fn为传入的函数，wait为等待的时间

```javascript
function load() {
    console.log(1);
}
window.addEventListener("scroll", debounce(load, 100));
```

> randomNumber(min,max)

随机生成min到max之间的整数

```javascript
console.log(randomNumber(10,50))
```

> throttle(fn,delay)

函数节流。fn为传入的函数，delay为延迟的时间

```javascript
function load() {
    console.log(1);
}
window.addEventListener("scroll", throttle(load, 100));
```

> shuffle(arr)

洗牌算法（乱序算法），arr为传入的数组，返回值为乱序后的结果

```javascript
console.log(shuffle([1,5,6,2,7,9,5,3,7,98,35,32])) // [5, 9, 5, 1, 98, 7, 3, 7, 32, 2, 6, 35]
```

> countDown(time)

倒计时的实现。time为指定需要计算的时间 例如2020/2/7 12:00:00，返回值为object对象

```javascript
console.log(countDown('2020/9/1 00:00:00')) //{days: 99, hours: 2, minutes: 12, seconds: 41}
```

> trimAll(str)

去除字符串所有的空格，str为传入的字符串，返回去除后的结果

```javascript
console.log(trimAll(' w sxt d')) //wsxtd
```

> deepClone(obj)

对象的深克隆。obj为传入的对象。

```javascript
let obj = { name: "xtd", age: 23 };
let newObj = deepClone(obj);
console.log(newObj);
```

> getUrlQueryObj(url)

获取url中的query参数，url为传入的url，返回值为处理后的对象

```javascript
console.log(getUrlQueryObj('http://tudoublog.com/api/students?name=xtd&age=23&gender=男')) //{name: "xtd", age: "23", gender: "男"}
```
> eqNaN(source,target)

判断俩个NaN是否相等，source和target为传入的两个值，返回值为true或false

```javascript
console.log(eqNaN(NaN,NaN)) //true
```

> uuid()

生成UUID（唯一标识符），不保证不会出现相同字段，经过反复测试，重复的概率低于0.001%

```javascript
console.log(uuid()) //19dade4f-e54f-40f2-97ad-e7326308f725
```

> toArray(arr)

将类数组对象转换为真正的数组，arr为传入的类数组对象，返回值为数组

```javascript

var arrayLike = {0:'hhh',1:'xxx',length:2}
 console.log(usualTools.toArray(arrayLike)) //['hhh','xxx']
```

> repeat(target,n)

返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。target为传入的字符串，n为重复的次数

```javascript
console.log(usualTools.repeat("ab",2)) //"abab"
```

