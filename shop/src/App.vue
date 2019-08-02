<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer-bar">
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
    </ul>
  </div>
</template>

<style lang="scss">
  .footer-bar{
    display:flex;
    background: #eee;
    text-align: center;
    height: 1rem;
    position:fixed;
    bottom: 0px;
    width: 100%;
    line-height: 1rem;
    &-item{
      flex-grow:1;
    }
  }
</style>
