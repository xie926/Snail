<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search @query="onQueryChange" ref="searchBox"></v-search> <!-- ref重要 -->
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query"> <!-- vuex中取出的query -->
      <!-- 热门搜索 -->
      <v-scroll>
        <div class="item">10</div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
  data () {
    return {
      query: ''
    }
  },
  components: {
    'v-search': searchBox,
    'v-scroll': scroll
  },
  methods: {
    onQueryChange () {
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  height 80px
</style>