<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul> -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
    }
  }
}
</script>


<style lang="scss">
  // 导航栏样式
  // .footer-bar{
  //   display:flex;
  //   background: #eee;
  //   text-align: center;
  //   height: 1rem;
  //   position:fixed;
  //   bottom: 0px;
  //   width: 100%;
  //   line-height: 1rem;
  //   &-item{
  //     flex-grow:1;
  //   }
  // }
</style>
