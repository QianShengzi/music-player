<template>
  <div>
    <!-- nav -->
    <van-nav-bar left-text="注册小米账号" :border="false" left-arrow />
    <!-- 注册表单 -->
    <van-form>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="pwd"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__text {
  font-size: 20px;
  color: #111;
}
/deep/ .van-icon {
  color: #999;
}
</style>