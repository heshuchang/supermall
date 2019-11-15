<template>
  <div id="naver">
    <ul class="naver-ul">
      <li class="naver-item">
        <img src="../../../assets/img/image1.jpg"
             alt="">
        <p>十点抢卷</p>
      </li>
      <li class="naver-item">
        <div class="img">
          <img src="../../../assets/img/image2.jpg"
               alt="">
        </div>
        <p>十点抢卷</p>
      </li>
      <li class="naver-item">
        <img src="../../../assets/img/image3.jpg"
             alt="">
        <p>十点抢卷</p>
      </li>
      <li class="naver-item">
        <img src="../../../assets/img/image4.jpg"
             alt="">
        <p>十点抢卷</p>
      </li>
    </ul>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'naver',
  data() {
    return {
      list: []
    }
  },
  components: {
    axios
  },
  created() {
    axios.get('http://jx.xuzhixiang.top/ap/api/productlist.php').then(res => {
      console.log(res.data.data)
      this.list = res.data.data
    })
  }
}
</script>
<style>
#naver {
  border-bottom: 15px solid #cecece;
  padding-bottom: 40px;
}
.naver-ul {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.naver-item {
  height: 100px;
  padding-top: 10px;
  text-align: center;
}
.naver-item img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid red;
  margin-bottom: 10px;
}
.naver-item p {
  font-size: 14px;
  color: #cecece;
}
</style>
