<template>
  <div id="topBar">
    <van-nav-bar title="购物节"
                 style="background:pink"
                 :fixed=true />
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  name: 'topBar'
}
</script>
<style>
</style>
