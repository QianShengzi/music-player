<template>
  <div class="discover">
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <ul v-if="!isShow">
        <li class="item" v-for="item in mv" :key="item.id" @click="enterPage(item)">
          <div class="img">
            <img class="auto-img" v-lazy="item.cover" alt />
            <div class="online">播放量: {{item.playCount}}万</div>
          </div>
          <div class="content">
            <div class="label">
              <span class="mv">MV</span>
              <span class="mvname">{{item.name}}</span>
            </div>
            <div class="artistname-box">
              歌手 :
              <span class="artistname" v-for="art in item.artists" :key="art.id">{{art.name}}</span>
            </div>
          </div>
          <!-- 遮罩 -->
          <div class="video-mask">
            <svg
              t="1596252245789"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2355"
              width="81"
              height="81"
            >
              <path
                d="M849.5 962l-675 0c-66.284 0-112.5-46.216-112.5-112.5l0-675c0-66.284 46.216-112.5 112.5-112.5l675 0c66.284 0 112.5 46.216 112.5 112.5l0 675c0 66.284-46.216 112.5-112.5 112.5zM99.5 212l0 75 150 0-72.858-182.135c-46.619 13.532-77.142 53.522-77.142 107.135zM249.5 99.5l75.001 187.5 112.481 0-74.982-187.5-112.5 0zM436.982 99.5l75.018 187.5 112.5 0-75-187.5-112.519 0zM624.5 99.5l75 187.5 112.5 0-75-187.5-112.5 0zM924.5 212c0-66.284-46.216-112.5-112.5-112.5l75.001 187.5 37.499 0 0-75zM924.5 324.5l-824.999 0 0 487.5c0 66.284 46.216 112.5 112.5 112.5l600 0c66.284 0 112.5-46.216 112.5-112.5l0-487.5zM362 437l337.5 187.5-337.5 187.5 0-374.999z"
                p-id="2356"
                fill="#fff"
              />
            </svg>
          </div>
        </li>
      </ul>
    </van-pull-refresh>
    <div class="goback" v-show="isShow" @click="goback">
      <span class="icon">
        <van-icon size="20" color="#fff" name="arrow-left" />
      </span>
    </div>
    <div v-if="isShow" id="showMvPlayer">
      <div class="player-box">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isLoading: true,
      mv: [
        {
          lastRank: 1,
          artistId: 12151013,
          cover:
            "http://p1.music.126.net/nMQEF6xSFZHGmTjOyQb8pg==/109951165142570207.jpg",
          duration: 0,
          playCount: 1373949,
          score: 630891,
          subed: false,
          artists: [
            {
              name: "朱一龙",
              id: 12151013,
            },
          ],
          name: "往下跳",
          artistName: "朱一龙",
          id: 10948087,
          mark: 0,
        },
        {
          lastRank: 2,
          artistId: 12151013,
          cover:
            "http://p1.music.126.net/C8U0mq74vs0iAaPScArEbQ==/109951165139743756.jpg",
          duration: 0,
          playCount: 782289,
          score: 397544,
          subed: false,
          artists: [
            {
              name: "朱一龙",
              id: 12151013,
            },
            {
              name: "陈明昊",
              id: 13581321,
            },
            {
              name: "黄俊捷",
              id: 35985084,
            },
          ],
          name: "铁三角",
          artistName: "朱一龙",
          id: 10947452,
          mark: 0,
        },
        {
          lastRank: 3,
          artistId: 13923085,
          cover:
            "http://p1.music.126.net/5Dh95ELfET_hDQPfnFhcpw==/109951165156067542.jpg",
          duration: 0,
          playCount: 1017956,
          score: 153664,
          subed: false,
          artists: [
            {
              name: "伍嘉成",
              id: 13923085,
            },
          ],
          name: "无名岛",
          artistName: "伍嘉成",
          id: 10947907,
          mark: 0,
        },
        {
          lastRank: 4,
          artistId: 768306,
          cover:
            "http://p1.music.126.net/YL-on_XX4NB6NHU1Lk8xNg==/109951165148894680.jpg",
          duration: 0,
          playCount: 283291,
          score: 99994,
          subed: false,
          artists: [
            {
              name: "网易云音乐",
              id: 768306,
            },
          ],
          name: "网易云音乐K歌App音街品牌片《迷途未返》放肆开唱",
          artistName: "网易云音乐",
          id: 10947734,
          mark: 0,
        },
        {
          lastRank: 5,
          artistId: 4292,
          cover:
            "http://p1.music.126.net/eeoQ4JbA9uJm-EPMQgAEuA==/109951165076288036.jpg",
          duration: 0,
          playCount: 2109667,
          score: 84881,
          subed: false,
          artists: [
            {
              name: "李荣浩",
              id: 4292,
            },
          ],
          name: "在一起嘛好不好",
          artistName: "李荣浩",
          id: 10942830,
          mark: 0,
        },
        {
          lastRank: 6,
          artistId: 35005076,
          cover:
            "http://p1.music.126.net/AMqTrE5ejAtLsCW-7_VucQ==/109951164948480572.jpg",
          duration: 0,
          playCount: 2239332,
          score: 79401,
          subed: false,
          artists: [
            {
              name: "成都集团",
              id: 35005076,
            },
            {
              name: "马思唯",
              id: 1132392,
            },
            {
              name: "KnowKnow",
              id: 27868624,
            },
            {
              name: "Melo",
              id: 29304235,
            },
            {
              name: "PSY.P",
              id: 29303235,
            },
            {
              name: "Ty.",
              id: 1086078,
            },
            {
              name: "李尔新",
              id: 12039173,
            },
            {
              name: "AnsrJ",
              id: 12288442,
            },
            {
              name: "Mengzi",
              id: 31917276,
            },
            {
              name: "邓典果",
              id: 12965215,
            },
            {
              name: "王以太",
              id: 12236125,
            },
            {
              name: "Sleepy Cat",
              id: 13796823,
            },
          ],
          name: "成都集团2020cypher",
          artistName: "成都集团",
          id: 10932405,
          mark: 0,
        },
        {
          lastRank: 7,
          artistId: 12138269,
          cover:
            "http://p1.music.126.net/U0_iLxf5BvXpz8yx5Jw0iA==/109951165007382583.jpg",
          duration: 0,
          playCount: 860211,
          score: 67444,
          subed: false,
          artists: [
            {
              name: "毛不易",
              id: 12138269,
            },
          ],
          name: "入海",
          artistName: "毛不易",
          id: 10936743,
          mark: 0,
        },
        {
          lastRank: 8,
          artistId: 5781,
          cover:
            "http://p1.music.126.net/PelsJu34azsep3DwJl7-wQ==/109951165067754695.jpg",
          duration: 0,
          playCount: 590957,
          score: 65070,
          subed: false,
          artists: [
            {
              name: "薛之谦",
              id: 5781,
            },
            {
              name: "王二妮",
              id: 9762,
            },
          ],
          name: "演员 (Live)",
          artistName: "薛之谦",
          id: 10942170,
          mark: 0,
        },
        {
          lastRank: 9,
          artistId: 188565,
          cover:
            "http://p1.music.126.net/93iec4rjFuCXmzF5DBfM3g==/109951165169449160.jpg",
          duration: 0,
          playCount: 51385,
          score: 57348,
          subed: false,
          briefDesc: "新专辑《琉璃》同名先行曲",
          artists: [
            {
              name: "银临",
              id: 188565,
            },
          ],
          name: "琉璃",
          artistName: "银临",
          id: 10949345,
          mark: 0,
        },
        {
          lastRank: 10,
          artistId: 12002248,
          cover:
            "http://p1.music.126.net/mKuya8_UYtu_wwFLip8wLA==/109951165048698611.jpg",
          duration: 0,
          playCount: 433128,
          score: 48259,
          subed: false,
          artists: [
            {
              name: "沈以诚",
              id: 12002248,
            },
          ],
          name: "STELLA  LUNA X 沈以诚《告白》MV",
          artistName: "沈以诚",
          id: 10940568,
          mark: 0,
        },
      ],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // 类型
            src: "", // url地址
          },
        ],
        poster: "", // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };
  },
  created() {
    this.getDatas();
  },
  methods: {
    // 获取MV推荐
    getDatas() {
      // return;
      if (this.mv.length != 0) return;
      // 加载提示
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: false,
        message: "加载中...",
      });
      this.axios({
        method: "GET",
        url: "https://api.itooi.cn/netease/mv/top",
        params: {
          pageSize: 10,
          page: 0,
        },
      })
        .then((result) => {
          this.$toast.clear();
          this.isLoading = false;
          this.$toast(result.data.msg);
          console.log(result);
          if (result.data.code == 200) {
            this.mv = result.data.data;
          }
        })
        .catch((err) => {
          this.$toast.clear();
          this.isLoading = false;
        });
    },
    onRefresh() {
      this.mv = [];
      // 获取推荐MV
      this.getDatas();
    },
    goback() {
      this.isShow = false;
    },
    // 进入播放页面
    enterPage(item) {
      console.log(item);
      // 如果存在id
      if (item.id) {
        // 封面
        this.playerOptions.poster = item.cover;
        // MV地址
        this.playerOptions.sources[0].src =
          "https://api.itooi.cn/netease/mvUrl?id=" + item.id + "&quality=1080";
        this.isShow = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.discover {
  position: absolute;
  margin-bottom: 100px;
  width: 100%;
  top: 44px;
  padding: 6px;
  box-sizing: border-box;
  #showMvPlayer {
    position: fixed;
    top: 44px;
    left: 0;
    width: 100%;
    height: calc(~"100% - 66px - 43px");
    background-color: rgba(0, 0, 0, 0.05);
  }
  .player-box {
    position: fixed;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .goback {
    position: fixed;
    right: 10px;
    bottom: 90px;
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    background-color: #f77673;
    box-sizing: border-box;
    z-index: 99999999;
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .item {
    position: relative;
    // height: 300px;
    // width: calc(~"100% / 2 - 4px");
    color: #f2302b;
    // border: 1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
    box-sizing: border-box;
    // margin-right: 5px;
    margin-bottom: 8px;
    // &:nth-child(2n) {
    //   // margin-right: 0;
    //   // float: right;
    // }
    .content {
      position: absolute;
      bottom: 2px;
      left: 4px;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 4px;
      padding-left: 6px;
      z-index: 11;
    }
    .online {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 2px 4px;
      border-radius: 4px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.1);
      font-size: 12px;
    }
    .label {
      font-size: 14px;
      // margin: 8px 2px;
    }
    .img {
      position: relative;
      // width: 175px;
      height: 204px;
      overflow: hidden;
      border-radius: 6px;
    }
    .mv {
      display: inline-block;
      border-radius: 4px;
      margin-right: 6px;
      padding: 0 4px;
      font-size: 8px;
      border: 1px solid #f77673;
    }
    .mvname {
      vertical-align: middle;
      display: inline-block;
      color: #333;
      font-size: 12px;
      margin-right: 6px;
    }
    .artistname {
      margin-right: 8px;
    }
    .artistname-box {
      font-size: 10px;
    }
    .video-mask {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      & .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>