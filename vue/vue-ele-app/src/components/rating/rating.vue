<template>
  <div class="app">
    <div class="header">
      <div class="left">
        <div class="left-score">{{data.score}}</div>
        <div class="left-content">综合评分</div>
        <div class="left-zhoubian">高于周边商家{{data.rankRate}}</div>
      </div>
      <div class="right">
        <div class="right-attitide">
          <div class="right-attitide-text">服务态度</div>
          <div class="right-attitide-xing">
            <img src="./off.png" alt="">
            <img src="./off.png" alt="">
            <img src="./off.png" alt="">
            <img src="./off.png" alt="">
            <img src="./off.png" alt="">
          </div>
          <div class="right-attitide-num">{{data.serviceScore}}</div>
        </div>
        <div class="right-rating">
          <div class="right-rating-text">商品评分</div>
          <div class="right-rating-xing">
            <img src="./off.png" alt="" id="img1">
            <img src="./off.png" alt="" id="img2">
            <img src="./off.png" alt="" id="img3">
            <img src="./off.png" alt="" id="img4">
            <img src="./off.png" alt="" id="img5">
          </div>
          <div class="right-rating-num">{{data.foodScore}}</div>
        </div>
        <div class="right-time">
          <span>送达时间   {{data.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data: {}
    }
  },
  methods: {
    isOn() {
      let num = this.data.serviceScore
      let img = document.getElementsByTagName('.right-rating-xing img')
      console.log(img)
      if(num = 5) {
        
      }
    }
  },
  created() {
    this.$http.get('http://localhost:8080/static/seller.json')
    .then(res => {
      this.data = res.data.data
      console.log(this.data)
      this.isOn()
    })
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    height 116.8px
    display flex
    padding 10px
    .left
      display inline-block
      height 100%
      text-align center
      border-right 1px solid rgba(7,17,27,.1)
      overflow hidden
      padding 6px 15px
      .left-score
        color #f90
        font-size 24px
      .left-content
        padding 2px
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: #07111b;
      .left-zhoubian
        line-height: 10px;
        font-size: 10px;
        color: #93999f;
    .split
      width: 100%;
      height: 16px;
      border-top: 1px solid rgba(7,17,27,.1);
      border-bottom: 1px solid rgba(7,17,27,.1);
      background: #f3f5f7;
    .right
      padding-left: 6px
      padding 8px 15px
      .right-attitide-text,.right-rating-text
        display: inline-block;
        line-height: 18px;
        vertical-align: top;
        font-size: 12px;
        color: #07111b
      .right-attitide-xing,.right-rating-xing
        display: inline-block;
        margin: 0 12px;
        vertical-align: top
      .right-attitide-num,.right-rating-num
        display: inline-block;
        line-height: 18px;
        vertical-align: top;
        font-size: 12px;
        color: #f90;
      .right-time
        line-height: 18px;
        font-size: 12px;
        color: #07111b;
      .right-attitide-xing,.right-rating-xing
        img 
          display inline-block
          width 20px
          padding 1px
          
      

</style>