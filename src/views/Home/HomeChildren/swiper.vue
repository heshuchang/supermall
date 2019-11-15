<template>
  <div id="swiper">
    <van-swipe :autoplay="3000"
               indicator-color="white">
      <van-swipe-item><img src="../../../assets/img/image1.jpg"
             alt=""></van-swipe-item>
      <van-swipe-item><img src="../../../assets/img/image2.jpg"
             alt=""></van-swipe-item>
      <van-swipe-item><img src="../../../assets/img/image3.jpg"
             alt=""></van-swipe-item>
      <van-swipe-item><img src="../../../assets/img/image4.jpg"
             alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe).use(SwipeItem)
export default {
  name: 'swiper'
}
</script>
<style>
img {
  width: 100%;
  height: 150px;
}
</style>
