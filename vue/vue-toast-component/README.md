# vue-toast-component

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 弹出类 组件
1. html 结构
   和页面主体内容  同级，不应该嵌套在页面里面

## 面向对象
编程范式
解决一类问题

定义一个vue组件 <template> <script> <style>
实际上是一个构造函数
## 1
import Toast from '';
<Toast />

## 2 
手动拿到 Toast 构造函数
vue.extend()
生成了一个 Toast 的实例