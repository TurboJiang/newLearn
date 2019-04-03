##stylus

1. @import文件引入，一个文件做一件事，有利于代码的维护及管理 多人协作
    /base/reset基础的reset任务 base为核心(core) widget前端的插件
    @import 让我们可以做文件的分离和管理，多人协作，目录让我们看到了思想及野心
    variable变量，当是一个大项目时，有大量的变量要维护，就形成了variable目录


weui.styl是一个入口文件 @import 串起来负责各个部分 base/ widget 
- reset.styl
- variable
    - global.styl
    - weui-button.styl
- weui-button
