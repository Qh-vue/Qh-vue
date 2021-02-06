<template>
<div class="Loginbox">
  <form class="layui-form Loginform" action="">
    <h2 class="Logintitle">新用户注册</h2>
    <div class="layui-form-item">用户名</div>
    <div class="layui-form-item">
      <input type="text" name="name" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
    </div>
    <div class="layui-form-item">密码</div>
    <div class="layui-form-item">
      <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
    </div>
    <div class="layui-form-item">确认密码</div>
    <div class="layui-form-item">
      <input type="password" name="repassword" required lay-verify="required" placeholder="请再次输入密码" autocomplete="off" class="layui-input">
    </div>
    <div class="layui-form-item">手机号</div>
    <div class="layui-form-item">
      <input type="text" name="phone" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
    </div>
    <div class="layui-form-item">验证码</div>
    <div class="layui-form-item">
        <div class="layui-input-inline">
            <input type="text" name="verificationCode" required  lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
        </div>
        <div class=" layui-word-aux">
            <button class="layui-btn layui-bg-gray" lay-submit lay-filter="formDemo">获取短信验证码</button>
        </div>
    </div>
    <div class="layui-form-item loginbutton">
      <button class="layui-btn" lay-submit lay-filter="formDemo">注册</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Login',
}
</script>
<style  scoped>
.Loginbox{
 width: 600px;
 background-color: white;
  margin: 20px auto;
  padding:10px 30px;
  box-shadow: -5px 5px 5px #bebdbd;
  border-radius:10px;
}
.Loginform{
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Logintitle{
  text-align: center;
}
.loginbutton{
  text-align: center;
}
</style>

