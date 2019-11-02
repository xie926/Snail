## 组件通信
1. 父组件向子组件传值
  + 子组件接收形式
    ```js
    // 可接收函数
    // 当父组件传递test为:test时a,b无效 而为v-bind:test时a，b有效
    props:['msg','msg2','appfn','a','b','count']
    props:{
      msg:{
        type:String
      },
      appfn:{
        type:Function
      },
      count:{
        type:Number
      }
    }
    ```
  + 子组件不能修改接收的值问题
    - 子组件用其他变量代替接收到的参数 created时期赋值
    - 交由父组件修改 $emit发散器
    - 父组件直接将操作函数传给子组件