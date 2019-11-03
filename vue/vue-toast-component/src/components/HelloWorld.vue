<template>
  <div>
    <!-- v-show v-bind v-if 都叫做指令 -->
    <button @click="handleToast">购买</button>
    <!-- <toast msg="测试弹窗1"
    :visiable="visiable"/> -->
  </div>
</template>

<script>
// 类似于alert
// import Toast from './Toast/index'[常规方式]
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  components: {
    // Toast,
  },
  methods: {
    handleToast() {
      // this.visiable = true;
      // setTimeout(() => {
      //   this.visiable = false;
      // }, 3000)
      showMessage('没到开售时间');
    }
  },
  data () {
    return {
      visiable: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
