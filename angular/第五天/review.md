## ng-model 实现双向数据绑定 让数据绑定在试图上，并且试图变化会影响模型改变
## {{}} 将模型数据取出挂在在试图上
## ng-bind 绑定数据和{{}}一样 防止闪烁  不支持嵌套 不支持绑定多个元素 ng-bind='name'
## ng-bind-template 可以绑定多个数据 不支持嵌套 ng-bind-template='{{name}} {{age}}'
## ng-cloak 先隐藏
## 控制器特点
- 在控制器中不要操作dom 在指令link函数中操作dom
- 控制器不可以复用 也不能控制多视图
- 控制器可以将所在的dom元素进行嵌套 控制器和dom是平行的
## run方法
- run方法 会在ng-app启动后执行 一帮用来初始化数据
- app.controller('ctrl',function ($scope，$rootscope) {}); 因为每个控制器都注入$rootscope的话 太麻烦 所以用run方法进行初始化
## $sce识别html
- 使用ng-bind-html和$sce服务结合 让html标签正常渲染
## angular事件
- 在angular中所有事件都在原生事件前加ng指令
- ng-click ng-mouseover ng-change ng-submit...
## ng-disabled
- 是按钮不能使用
## ng-options
- select便签刷新数据
- 程序员可见 as 用户可见 for 单个数据 in 所有数据
## 创建指令
- app.directive
- 组件式(模板/模版url)和装饰性指令
- 不依赖控制器  例如ng-model没有控制器也可以使用
- html里面用-  指令里面驼峰写法
- 不产生独立作用域

## scope:{  完全和外界断绝关系 相当于跟作用域
## name:'@name'， 字符串 单项绑定 名字一样可以省略name
## age:'=a'  不能省略 引用变量 双向绑定
## say:'&say'}

## 指令间交互
- 父级需要添加controller 字迹需要require ^ 当前没有去上面找，
## config函数
- 在run方法前执行
