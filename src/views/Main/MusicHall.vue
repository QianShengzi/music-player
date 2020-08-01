<template>
  <div>
    <router-view></router-view>
    <div class="music-hall" v-show="_showHall">
      <!-- 搜索框 -->
      <van-search
        error
        show-action
        @cancel="cancel"
        shape="round"
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        @search="searchSongs"
        @input="saveSearchValue"
      />
      <!-- 搜索歌曲列表 -->
      <div class="songs search" v-show="_searchSongs.length!=0">
        <!-- 显示每一首歌 -->
        <div class="single" v-for="(songs,index) in _searchSongs" :key="index">
          <div class="vocal clearfix" @click="playSongForSearch(songs,index)">
            <!-- 封面 -->
            <div class="images fl">
              <img class="auto-img" v-lazy="songs.picurl" alt />
            </div>
            <!-- 信息 -->
            <div class="vocal-content fl">
              <div class="song-name">
                <van-notice-bar color="#333" background="none" :text="songs.name" />
              </div>
              <div class="artistname">
                <van-notice-bar color="#333" background="none" :text="songs.artistsname" />
              </div>
            </div>
            <!-- 评论查看 -->
            <span class="collected" @click.stop="comment(songs.songId,index)">
              <svg
                t="1595561725206"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3285"
                width="22"
                height="22"
              >
                <path
                  d="M291.636 385.404c-30.49 0-55.207 25.633-55.207 57.266 0 31.637 24.717 57.272 55.207 57.272 30.486 0 55.203-25.635 55.203-57.272C346.839 411.038 322.122 385.404 291.636 385.404L291.636 385.404z"
                  p-id="3286"
                />
                <path
                  d="M512.461 385.404c-30.49 0-55.208 25.633-55.208 57.266 0 31.637 24.722 57.272 55.208 57.272 30.486 0 55.204-25.635 55.204-57.272C567.665 411.038 542.947 385.404 512.461 385.404L512.461 385.404z"
                  p-id="3287"
                />
                <path
                  d="M733.287 385.404c-30.492 0-55.208 25.633-55.208 57.266 0 31.637 24.716 57.272 55.208 57.272 30.486 0 55.202-25.635 55.202-57.272C788.489 411.038 763.773 385.404 733.287 385.404L733.287 385.404z"
                  p-id="3288"
                />
                <path
                  d="M843.697 99.077 181.221 99.077c-60.972 0-110.41 51.287-110.41 114.539l0 429.487c0 63.256 50.543 121.56 112.92 121.56l168.257 0c29.33 31.245 150.716 156.912 150.716 156.912 5.389 5.606 14.124 5.606 19.514 0 0 0 88.87-100.764 146.775-156.912l172.193 0c62.376 0 112.92-58.308 112.92-121.56L954.106 213.615C954.107 150.363 904.673 99.077 843.697 99.077zM899.451 643.298c0 31.669-26.565 64.899-57.799 64.899L672.075 708.197c-20.543 0-39.009 21.123-39.009 21.123L514 852.815 394.955 729.32c0 0-22.676-21.123-42.112-21.123L183.267 708.197c-31.235 0-57.794-33.23-57.794-64.899L125.473 213.205c0-31.677 24.751-57.353 55.28-57.353l663.411 0c30.53 0 55.287 25.676 55.287 57.353L899.451 643.298z"
                  p-id="3289"
                />
                <path d="M898.905 643.103" p-id="3290" />
              </svg>
            </span>
          </div>
        </div>
        <!-- 分页器 -->
        <!--  page-count	总页数	number | string	根据页数计算
            total-items	总记录数	number | string	0
            items-per-page	每页记录数	number | string	10
        show-page-size	显示的页码个数  number | string-->
        <div class="page">
          <van-pagination
            @change="changePage"
            v-model="searchCurrentPage"
            :total-items="_searchTotalItems"
            :items-per-page="perPage"
            show-page-size="3"
          />
        </div>
      </div>
      <!-- 榜单列表 -->
      <van-tabs
        v-show="_searchSongs.length==0"
        class="list-item"
        v-model="listActive"
        title-active-color="#f54c49"
        title-inactive-color="#333"
        @change="changeTabs"
      >
        <van-tab v-for="(item,index) in mylist" :key="index" :title="item.title">
          <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
            <!-- 各榜单歌曲列表 -->
            <div class="songs">
              <!-- 显示每一首歌 -->
              <div
                class="single"
                v-show="index<=currentPage*perPage-1&&index>(currentPage-1)*perPage-1"
                v-for="(songs,index) in item.datas"
                :key="index"
              >
                <div class="vocal clearfix" @click="playSong(songs,index)">
                  <!-- 封面 -->
                  <div class="images fl">
                    <img class="auto-img" v-lazy="songs.picurl" alt />
                  </div>
                  <!-- 信息 -->
                  <div class="vocal-content fl">
                    <div class="song-name">
                      <van-notice-bar color="#333" background="none" :text="songs.name" />
                    </div>
                    <div class="artistname">
                      <van-notice-bar color="#333" background="none" :text="songs.artistsname" />
                    </div>
                  </div>
                  <!-- 评论查看 -->
                  <span class="collected" @click.stop="comment(item.datas[index].songId,index)">
                    <svg
                      t="1595561725206"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3285"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M291.636 385.404c-30.49 0-55.207 25.633-55.207 57.266 0 31.637 24.717 57.272 55.207 57.272 30.486 0 55.203-25.635 55.203-57.272C346.839 411.038 322.122 385.404 291.636 385.404L291.636 385.404z"
                        p-id="3286"
                      />
                      <path
                        d="M512.461 385.404c-30.49 0-55.208 25.633-55.208 57.266 0 31.637 24.722 57.272 55.208 57.272 30.486 0 55.204-25.635 55.204-57.272C567.665 411.038 542.947 385.404 512.461 385.404L512.461 385.404z"
                        p-id="3287"
                      />
                      <path
                        d="M733.287 385.404c-30.492 0-55.208 25.633-55.208 57.266 0 31.637 24.716 57.272 55.208 57.272 30.486 0 55.202-25.635 55.202-57.272C788.489 411.038 763.773 385.404 733.287 385.404L733.287 385.404z"
                        p-id="3288"
                      />
                      <path
                        d="M843.697 99.077 181.221 99.077c-60.972 0-110.41 51.287-110.41 114.539l0 429.487c0 63.256 50.543 121.56 112.92 121.56l168.257 0c29.33 31.245 150.716 156.912 150.716 156.912 5.389 5.606 14.124 5.606 19.514 0 0 0 88.87-100.764 146.775-156.912l172.193 0c62.376 0 112.92-58.308 112.92-121.56L954.106 213.615C954.107 150.363 904.673 99.077 843.697 99.077zM899.451 643.298c0 31.669-26.565 64.899-57.799 64.899L672.075 708.197c-20.543 0-39.009 21.123-39.009 21.123L514 852.815 394.955 729.32c0 0-22.676-21.123-42.112-21.123L183.267 708.197c-31.235 0-57.794-33.23-57.794-64.899L125.473 213.205c0-31.677 24.751-57.353 55.28-57.353l663.411 0c30.53 0 55.287 25.676 55.287 57.353L899.451 643.298z"
                        p-id="3289"
                      />
                      <path d="M898.905 643.103" p-id="3290" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <!-- 分页器 -->
            <!--  page-count	总页数	number | string	根据页数计算
            total-items	总记录数	number | string	0
            items-per-page	每页记录数	number | string	10
            show-page-size	显示的页码个数  number | string-->
            <div class="page">
              <van-pagination
                @change="changePage"
                v-model="currentPage"
                :total-items="totalItems"
                :items-per-page="perPage"
                show-page-size="3"
              />
            </div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import "../../assets/css/MusicHall.less";
import MusicHall from "../../assets/js/MusicHall";
export default MusicHall;
</script>

<style lang="less" scoped>
</style>