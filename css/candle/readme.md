## stylus
- for循环
body
    for num in 1 2 3
        foo num 
    for num in 1..200——>..表示一个区间

box(x,y,margin=false) stylus中的混合mixing
                    将css放入到函数中用于返回，调用

- if条件语句
        box(x,y,margin=false)
        padding y x
        if margin
            margin y x
        
    body
        box(5px,10px,true)


- radial-gradient 环形渐变 由内向外
- transform translate(-50%,-50%) 居中

-   background-color #FFFF77
    border-bottom-color transparent
    底部边框颜色设为透明，则颜色由盒子来决定

- mix-blend-mode:screen
- transform:translate(-50%,0) scaleX(.45) 往左移 沿X轴缩小

- for num in 1..200
 .g-ball:nth-child(num) 选择每一个元素