<template>
  <div class="main">
    <!-- nav -->
    <van-nav-bar :border="false" left-text="×" />
    <!-- logo -->
    <div class="my-logo">
      <img class="my-img" src="../assets/images/logo.jpg" alt />
    </div>
    <!-- 注册表单 -->
    <van-form :show-error="false">
      <van-field
        v-model="username"
        @input="inputUserChange"
        placeholder="手机号/邮箱"
        :rules="isUserEmpty?[]:[myUserRules]"
      >
        <template v-slot:left-icon>
          <i class="fa fa-phone fa-lg"></i>
        </template>
      </van-field>
      <van-field
        v-model="pwd"
        type="password"
        placeholder="密码"
        :right-icon="pwdEye"
        @input="inputPwdChange"
        @click-right-icon="eyes"
        :rules="isPwdEmpty?[]:[myPwdRules]"
      >
        <template v-slot:left-icon>
          <i class="fa fa-unlock-alt fa-lg"></i>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <div class="form-b clearfix">
        <span class="left">注册账户</span>
        <span class="right">忘记密码</span>
      </div>
    </van-form>
    <!-- 微信登陆方式 -->
    <div class="wx">
      <i class="fa fa-weixin" aria-hidden="true"></i>
      <span>微信</span>
    </div>
  </div>
</template>

<script>
import "../assets/css/Login.less";
import Login from "../assets/js/Login.js";
export default Login;
</script>
