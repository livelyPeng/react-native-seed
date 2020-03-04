# react-native-seed

> author: pl

> 一个react-native项目种子

# react-native-seed项目结构主要说src
src {
   apiUrl: 请路径存放
   assets: 项目资产存在（图片等）
   components: 公用组件存放
   module: 模块位置  {
       // 下面这是新建模块文件夹必备的几个东西，如果没有请自己建立（需要什么建立什么）
       某某模块文件夹: {
          privateComponents: 当前模块的私有组件
          routers： 当前模块的路由表
          stores: 当前模块的状态存储
          viewPage: 当前模块的页面
          index.js: 导出当前模块
       }
   }
   routers: 整个项目的路由汇集地方
   stores: 整个项目的状态存储汇集地方
   styleSheet: 整个项目的公用样式表集中地方
   utils: 整个项目的工具文件夹
}
