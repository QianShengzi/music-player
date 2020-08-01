<template>
  <div class="comment">
    <van-icon name="cross" class="icon" size="18px" @click="close" />
    <div class="hot-comment">热评</div>
    <van-empty description="该歌曲没有评论内容" v-show="_hotComments.length==0" />
    <div class="content" v-for="(item,index) in _hotComments" :key="index">
      <!-- 评论 -->
      <div>
        <div class="head clearfix">
          <div class="fl pic">
            <!-- 头像 -->
            <img class="auto-img" v-lazy="item.user.avatarUrl" />
          </div>
          <div class="fl username">{{item.user.nickname}}</div>
          <div class="fl time">{{item.time|myDate('yyyy-MM-dd hh:mm:ss')}}</div>
        </div>
        <div class="text">{{item.content}}</div>
      </div>
      <!-- 回复 -->
      <div class="beReplied" v-for="(item,index) in item.beReplied" :key="index">
        <div class="head clearfix">
          <div class="fl pic">
            <img class="auto-img" :src="item.user.avatarUrl" />
          </div>
          <div class="fl username">{{item.user.nickname}}</div>
        </div>
        <div class="text">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/comment.less";
import Comment from "../../assets/js/Comment";
export default Comment;
</script>

<style lang="less" scoped>
</style>