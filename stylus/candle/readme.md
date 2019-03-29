## stylus
- for循环
body
    for num in 1 2 3
        foo num 
    for num in 1..200——>..表示一个区间

box(x,y,margin=false) stylus中的混合mixin，无return
                    将css放入到函数中用于返回，调用

random(min,max)         函数，有return
  return floor(math(0, 'random')*(max - min + 1) + min)

1. mixin与函数的区别

 mixin是一段样式的封装，可以在引用的地方复用，在stylus中混合用的最多
 函数有返回值 random(min,max)

 2. stylus有内置的函数库
    floor()、math(0,'random')、unit(*,'px')单位

3.200个元素 stylus的for循环 
    for num in 1..200
    .g-ball:nth-child({num}) 选择每一个元素 {}——>将内容进行编译
         $width=random(0,50)
        width unit($width,'px')

4. filter:contrast(20)颜色融合
    mix-blend-mode:screen

 if条件语句
        box(x,y,margin=false)
        padding y x
        if margin
            margin y x
        
    body
        box(5px,10px,true)


 radial-gradient 环形渐变 由内向外
 transform translate(-50%,-50%) 居中

   background-color #FFFF77
    border-bottom-color transparent
    底部边框颜色设为透明，则颜色由盒子来决定

 mix-blend-mode:screen颜色融合
 transform:translate(-50%,0) scaleX(.45) 往左移 沿X轴缩小

 for num in 1..200
 .g-ball:nth-child(num) 选择每一个元素