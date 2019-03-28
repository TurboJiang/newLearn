类型检测是js考点

<!-- new Array() [] -->
Object
Array 可遍历的对象 for()
JSON Object对象字面量 可枚举的对象 for(key in)
function()是一等对象 

typeof 不靠谱，对对象定义不全面


Object.prototype.toString.call([])  .call()指定this指针指向的对象

1. Object.prototype.toString()用于弥补typeof定义不全面，返回值为“[object，Object]”字符串(显示当前指针对象的类型)
2. 借给Array用 Object.prototype.toString.call([]);函数上自带call()，动态指定内部this指向


立即执行函数
(function(形参){console.log('....')})(实参)


Object.prototype.toString.call('jiang')==="[object Number]"
false
Object.prototype.toString.call('jiang')==="[object Array]"
false
Object.prototype.toString.call([])==="[object Array]"
true



3. js的面向对象 Type{isString}
4. 立即执行函数+ 嵌套函数定义 形成了闭包
        type就在这些嵌套函数被调用是可以引用到