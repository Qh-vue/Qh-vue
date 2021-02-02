<template>
  <div class="layui-bg-gray" style="padding: 20px 0">
    <div class="login" >
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
          </div>
        </div>
        
        <div class="layui-form-item">
          <label class="layui-form-label">复选框</label>
          <div class="layui-input-block">
            <input type="checkbox" name="" title="记住用户名" lay-skin="primary" checked>
          </div>
        </div>
        <div class="layui-form-item" style="text-align: center;">
          <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  
}
</script>
<style  scoped>
.login{
  background-color:white;
  width: 60%;
  margin: 0px auto;
  padding:10px 20px;
  box-shadow: -5px 5px 5px #bebdbd;
  border-radius:10px;
}
</style>

