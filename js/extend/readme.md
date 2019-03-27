第一者:Person   Person 由 prototype 属性来解决它自身构造之外的原型上的属性或方法
第二者:Person.prototype 原型对象会有它的构造函数 Person.prototype.constructor属性
第三者:实例对象 

实例 与Person 有什么关系？Person.prototype有关系？

构造函数.prototype——>构造函数的原型
构造函数的原型.constructor——>构造函数
构造函数生成的实例.__proto__——>构造函数的原型

js实例与类其实不是java等语言的血缘关系

- lhr实例是怎么来的呢？
    new Person()出来的
    1. Person 函数运行 new的方式 this=>new Object();
    2. lhr 如何拿到Person.prototype原型对象上定义的方法？
           任何实例对象都有一个 __proto__ 属性
    3. 方法有prototype属性，值为对象 开支
    4. 任何对象都有 __proto__ 属性指向他的原型对象
    5. 原型对象上有constructor属性指向他的构造函数


    原型链


    父类的实例对象指向子类的原型对象