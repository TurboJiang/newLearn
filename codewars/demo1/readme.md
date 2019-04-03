[twitter]()
要求：写一个函数，参数为一句话，英文的lemon tree，将
- 如果字符超过140字，返回false
- 若为空字符，则返回false
- 以#开始
- 每个单词首字母大写

<!-- 字符串变数组 -->
'hello world miss'.split(' ')
(3) ["hello", "world", "miss"]0: "hello"1: "world"2: "miss"length: 3__proto__: Array(0)
<!-- 遍历 -->
'hello world miss'.split(' ').map(word=>word)
(3) ["hello", "world", "miss"]0: "hello"1: "world"2: "miss"length: 3__proto__: Array(0)
<!-- 首字母大写 -->
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase())
(3) ["H", "W", "M"]
<!-- 大写后加上剩余部分 -->
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1))
(3) ["Hello", "World", "Miss"]
<!-- 数组转字符串 -->
'hello world miss'.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
"Hello World Miss"
