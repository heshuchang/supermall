<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace
                       to="/home"
                       icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/classify"
                       icon="apps-o">
        列表
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/cart"
                       icon="cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/my"
                       icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import Normalize from 'normalize.css'

Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'app',
  data() {
    return {
      active: 0
    }
  },
  components: {
    Normalize
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
