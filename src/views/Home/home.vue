<template>
  <div id="home">
    <!-- 顶部 -->
    <header>
      <top-bar />
    </header>
    <!-- 中间 -->
    <section>
      <swiper></swiper>
      <naver />
      <popu-larity />
      <aside>
        <tab></tab>
      </aside>
    </section>

  </div>
</template>
<script>
import TopBar from './HomeChildren/TopBar'
import Naver from './HomeChildren/Naver'
import PopuLarity from './HomeChildren/Popularity'
import Swiper from './HomeChildren/swiper'
import Tab from './HomeChildren/Tab'

export default {
  name: 'home',
  components: {
    TopBar,
    Naver,
    PopuLarity,
    Swiper,
    Tab
  }
}
</script>
<style>
section {
  height: 100%;
}
</style>
