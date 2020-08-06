<template>
  <div class="main">
    <div class="top" :class="hidden?'top-hidden':''">
      <van-tabs swipeable v-model="active" @change="tabsChange" animated background="#f54c49">
        <van-tab v-for="(item,index) in titles" :title="item.title" :key="index" :name="index"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 列表遮罩 -->
    <div :class="listshow?'list-mask':''" @click="listFoldedFalse"></div>
    <div
      class="mask"
      v-show="showDiamonds"
      :class="hidden?'hidden-music-control':''"
      @click="aplayerClick"
    ></div>
    <!-- 音乐播放控件 -->
    <aplayer
      ref="aplayer"
      class="my-music-control"
      :loop.sync="loop"
      :volume.sync="volume"
      :order.sync="order"
      @timeupdate="updateTime"
      @ended="aplayerEnded"
      @canplay="aplayerCanplay"
      @pause="aplayerPause"
      @playing="aplayerPlaying"
      @error="aplayerError"
      @listShow="aplayerListShow"
      @listHide="aplayerListHide"
      @listAdd="aplayerListAdd"
      @durationchange="getDuration"
      :listMaxHeight="300"
      :listFolded.sync="listFolded"
      :class="hidden?'hidden-music-control':''"
      theme="#f54c49"
      :audio="myList"
    />
  </div>
</template>

<script>
import "../assets/css/Main.less";
import Main from "../assets/js/Main";
export default Main;
</script>

<style lang="less" scoped>
</style>