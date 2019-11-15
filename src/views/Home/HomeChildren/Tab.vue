<template>
  <div id="tab">
    <van-tabs v-model="activeName">
      <van-tab title="流行"
               name="a">
        <ul v-for="item in list"
            :key="item.id">
          <li>{{item.pid}}</li>
        </ul>
      </van-tab>
      <van-tab title="新款"
               name="b">
        <ul v-for="item in list"
            :key="item.id">
          <li>
            <div>
              <p>{{item.pid}}</p>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="精选"
               name="c">
        <ul v-for="item in list"
            :key="item.id">
          <li>
            <div>
              <p>{{item.pid}}</p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import axios from 'axios'

Vue.use(Tab).use(Tabs)

export default {
  name: 'tab',
  data() {
    return {
      activeName: 'a',
      list: []
    }
  },
  created() {
    axios.get('http://jx.xuzhixiang.top/ap/api/productlist.php').then(res => {
      console.log(res.data.data)
      this.list = res.data.data
    })
  }
}
</script>
