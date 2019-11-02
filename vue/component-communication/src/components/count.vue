<template>
   <div class="count">
     <h2>{{msg}}</h2>
     <hr>
     <!-- <h3>{{$store.state.count}}</h3> -->
     <h3>{{count}}</h3>
     <button @click="add(10)">+</button>
     <!-- <button @click="$store.commit('reduce')">-</button> -->
     <button @click="reduce">-</button>
     <br>
     <p>{{date}}</p>
     <br>
     <p>money:{{money}}</p>
     <button @click="makeMoneyAction">挣钱</button>
   </div>
</template>

<script>
import store from '@/store/index.js';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  data(){
    return {
      msg:'hh'
    }
  },
  // computed:mapState(['date'])
  computed:{
    ...mapState(['date']),
    // count(){
    //   return this.$store.getters.count;
    // }
    ...mapGetters(['count'])
  }
  // computed:mapState({
  //   date:state=>state.date
  // })
  ,
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['makeMoneyAction'])
  },
  store
}
</script>

<style scoped>


</style>
