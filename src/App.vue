<template>
  <div id="app">
    <ul class="layui-nav layui-bg-green">
      <li><router-link to=""><img id="logo"  src="./assets/logo.png" alt=""></router-link></li>
      <li class="layui-nav-item">
        <a href="">控制台<span class="layui-badge">9</span></a>
      </li>
      <li class="layui-nav-item">
        <a href="">个人中心<span class="layui-badge-dot"></span></a>
      </li>
      <li class="layui-nav-item">
        <a href=""><img src="//t.cn/RCzsdCq" class="layui-nav-img">我</a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">修改信息</a></dd>
          <dd><a href="javascript:;">安全管理</a></dd>
          <dd><a href="javascript:;">退了</a></dd>
        </dl>
      </li>
    </ul>
    <div class="loginBg">
      <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  text-align: right;
}
#logo{
  float: left; 
  width:40px;
  height:40px
}
.loginBg{
  position: absolute;
    width: 100%;
    top: 40px;
    left: 0;
    bottom: 0;
    background-color:rgb(241, 234, 234)
}
</style>
