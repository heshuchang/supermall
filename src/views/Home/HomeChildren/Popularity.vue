<template>
  <div id="popularity">
    <div>
      <h4>本周流行</h4>
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
  </div>
</template>
<script>
export default {
  name: 'popularity'
}
</script>
<style>
#popularity {
  margin-bottom: 25px;
}
h4 {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-weight: normal;
}
.naver-ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 2px;
}
.naver-item {
  height: 100px;
  padding-top: 10px;
  text-align: center;
}
.naver-item img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid red;
  margin-bottom: 10px;
}
.naver-item p {
  font-size: 14px;
  color: #cecece;
}
</style>
