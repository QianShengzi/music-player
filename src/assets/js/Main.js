import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("menuModule");
export default {
    // name: "Main",
    // components: {
    //   APlayer
    // },
    data() {
        return {
            active: 1,

            titles: [
                {
                    title: "我的收藏",
                    url: '/main/mycollect'
                },
                {
                    title: "音乐馆",
                    url: '/main/'
                },
                {
                    title: "发现",
                    url: '/main/discover'
                },
            ],
            // 音乐播放器组件的列表收展
            listFolded: true,
            // 展示方块
            showDiamonds: true,
            // 列表遮罩层
            listshow: false,
            timer111: null,
            loop: "none",
            volume: 1,
            order: "list",
        };
    },
    watch: {
        index(i) {
            // console.log(i);
            console.log("index变了", i);
            // console.log(this.myList);
            // 按列表顺序播放时 才执行
            if (this.order == "list") {
                // 加定时器 为了异步
                setTimeout(() => {
                    // 索引变化 播放列表当前歌曲切换
                    this.$refs.aplayer.switch(i);
                }, 0);
                // 播放
                setTimeout(() => {
                    this.$refs.aplayer.play();
                }, 150);
            }
        },
        // 修改播放器初始循环模式
        loop(e) {
            this._changeLoop(e);
        },
        // 修改播放器初始循环模式
        _loop(e) {
            this.loop = e;
        },
        // 监听播放器的初始顺序模式
        order(e) {
            this._changeOrder(e);
        },
        _order(e) {
            this.order = e;
        },
        // 监听播放器的初始顺序模式
        volume(e) {
            this._changeVolume(e);
        },
        _volume(e) {
            this.volume = e;
        },
    },
    computed: {
        ...mapState([
            "_aplayer",
            "currentTime",
            "duration",
            "timeChange",
            "timeChangeFlag",
            "progressBarFlag",
            "hidden",
            "myList",
            "_showHall",
            "nowIsPlay",
            "index",
            "isPlayAll",
            "_loop",
            "isRoll",
            "_order",
            "_volume",
        ]),
    },
    created() {
        // 缓存有数据
        if (localStorage.getItem("myCollectedSongs")) {
        }
        let hash = location.hash.slice(1);
        console.log(hash);
        //根据路径激活相应路由
        for (let i = 0; i < this.titles.length; i++) {
            if (this.titles[i].url == hash) {
                this.active = i;
                break;
            }
        }

        //    路由为/main/playerinterface时  controlHidden false
        if (hash == '/main/playerinterface') {
            this.controlHidden(true);
            console.log(this._showHall);
        }
        // 评论页面刷新 重定向回首页
        if (hash == '/main/comment') {
            // this.$toast('评论参数错误');
            // setTimeout(() => {
            this.$router.push({ name: 'MusicHall' })
            // }, 2000);
        }
    },
    mounted() {
        console.log(this.$refs.aplayer);
        this._saveAplayer(this.$refs.aplayer);
    },

    methods: {
        ...mapMutations([
            "_saveAplayer",
            "controlHidden",
            "saveCurrentTime",
            "saveDuration",
            "changeChangeTime",
            "progressBarFlagState",
            "setNowIsPlay",
            "changeIsRoll",
            "changeIndex",
            "setPlayAll",
            "changePlayFlag",
            "_changeLoop",
            "_changeOrder",
            "_changeVolume",
        ]),
        aplayerEnded() {
            console.log("播放结束");
        },
        listFoldedFalse() {
            this.listFolded = false;
        },
        // 列表展示时 触发
        aplayerListShow() {
            // this.listFolded = true
            this.showDiamonds = false
            this.listshow = true;
            console.log(this.listFolded);
        },
        // 列表隐藏时 触发
        aplayerListHide() {
            // this.listFolded = false
            this.listshow = false;
            this.showDiamonds = true
            console.log(this.listFolded);
        },
        // 当在文件加载期间发生错误时触发
        aplayerError() {
            this.$toast("找不到该资源");
            setTimeout(() => {
                this.changeIndex(this.index + 1);
                console.log("下一首吧");
                this._aplayer.skipForward();
            }, 2000);
        },
        // 播放列表新增音频时触发
        aplayerListAdd() {
            console.log("aplayerListAdd");
        },
        // 当媒介已到达结尾时触发
        aplayerIsEnded() {
            console.log("this._loop");

            // 单曲循环 停止向下执行切歌
            if (this._loop == "one") {
                console.log("不应该切歌");
                return;
            }
            console.log(this._loop);
            // 播放结束 下一首
            console.log("endedededed");

            if (this.order == "list") {
                // let num = 0;
                // num = this.index;
                // console.log(this.index);
                // num++;
                // // 超过播放列表长度 Index变回0
                // if (num >= this.myList.length) {
                //   num = 0;
                //   this.setPlayAll(true);
                //   console.log("这里设置了isPlayAll");
                // }

                console.log("loooooooaaaaaaaddddddddddding");
                // 加载提示
                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: false,
                    message: "加载中...",
                });

                // this.changeIndex(num);

                console.log(this._aplayer.currentMusic);
                // 根据歌曲id-1确定index
                this.changeIndex(this._aplayer.currentMusic.id - 1);
                if (this._aplayer.currentMusic.id) {
                    //  Index为0
                    if (this._aplayer.currentMusic.id - 1 == 0) {
                        this.setPlayAll(true);
                        console.log("这里设置了isPlayAll");
                    }
                }
            } else if (this.order == "random") {
                console.log("随机模式 让他放");
                // 加载提示
                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: false,
                    message: "加载中...",
                });
                setTimeout(() => {
                    this._aplayer.play();
                }, 150);
            }

            // 播放结束 移除控制转动的类名
            this.changeIsRoll(false);
        },
        // 当文件就绪可以开始播放时触发
        aplayerCanplay() {
            console.log("canplay");
            // 判断是否全部播放完成 并且不为列表循环
            if (this.isPlayAll && this._loop !== "all") {
                console.log(this._loop);
                return;
            }
            console.log("8888");
            console.log(this.myList);

            // 媒体数据已经有足够的数据 可提供播放 自定义进度条可以跟随播放器进度条
            this.progressBarFlagState(true);
        },
        // 当媒介被用户或程序暂停时触发
        aplayerPause() {
            const { media } = this._aplayer;
            console.log(media.paused); // 获取音频是否暂停
            this.changePlayFlag(false);
        },
        // 当媒介长度改变时触发
        getDuration() {
            const { media } = this.$refs.aplayer;
            console.log(media.duration); // 获取音频总时间 秒数
            // console.log(this.$refs.audio);
            // 获取总时长
            // 获取到的是分钟数+秒数
            console.log(document.querySelector(".aplayer-dtime").innerHTML);
            // 保存总时长
            this.saveDuration(document.querySelector(".aplayer-dtime").innerHTML);

            // 播放结束 移除控制转动的类名
            this.changeIsRoll(false);

            console.log(this.$refs.aplayer.currentMusic);
            this.setNowIsPlay(this.$refs.aplayer.currentMusic);
        },
        // 当媒介已开始播放时触发
        aplayerPlaying() {
            this.changePlayFlag(true);
            console.log("播放");
            // 缓存中读取歌曲数据 如果存在的话
            let arr = JSON.parse(localStorage.getItem("myCollectedSongs"));
            if (arr) {
                // 有缓存 直接到缓存中修改状态
                for (let i = 0; i < arr.length; i++) {
                    console.log("读取缓存");
                    // 歌曲id相同 获取信息
                    if (this._aplayer.currentMusic.songId == arr[i].songId) {
                        this._aplayer.currentMusic.collect = arr[i].collect;
                        this._aplayer.currentMusic.lrc = arr[i].lrc;
                    }
                }
            }
            // 全部播放完毕 并且不为列表循环 停止播放
            if (this.isPlayAll && this._loop == "none") {
                this.changePlayFlag(false);
                console.log("全部播放完毕 并且不为列表循环 停止播放");
                setTimeout(() => {
                    this._aplayer.pause();
                }, 150);
                // 重新赋值全部播放状态
                this.setPlayAll(false);
                // 清除提示
                this.$toast.clear();
            }

            // 清除提示 开始播放
            this.$toast.clear();
            // 播放开始 重新添加类名转动
            this.changeIsRoll(true);
        },
        // 歌曲当前时间
        updateTime(e) {
            // 播放器列表显示隐藏状态
            if (this._aplayer.listVisible) {
                // 隐藏mask
                this.showDiamonds = false;
            } else {
                // 显示mask
                this.showDiamonds = true;
            }

            // 清除提示
            // this.$toast.clear();
            console.log(this._order);
            console.log(this.order);
            console.log(this._loop);
            const { media } = this.$refs.aplayer;
            console.log(media.currentTime); // 获取音频当前播放时间 秒数
            // 播放结束
            if (media.currentTime == media.duration) {
                this.aplayerIsEnded();
            }

            // 获取到的是秒数
            // console.log(e.target.currentTime);
            // 保存当前播放时间
            this.saveCurrentTime(media.currentTime);
            // 改变播放时间标志为true
            if (this.timeChangeFlag) {
                e.target.currentTime = this.timeChange;
                this.changeChangeTime({ flag: false });
            }

            // 清除提示
            this.$toast.clear();
        },
        // tab切换 跳转对应路由
        tabsChange(item) {
            console.log(item);
            if (item == 0) {
                this.$router.push({ name: "MyCollect" });
            }
            if (item == 1) {
                this.$router.push({ name: "MusicHall" });
            }
            if (item == 2) {
                this.$router.push({ name: "Discover" });
            }
        },
        aplayerClick() {
            // console.log(777);
            // 跳转到音乐播放界面
            this.$router.push({ name: "PlayerInterface" });
            // 控制隐藏顶 底
            this.controlHidden(true);
        },
        // getLyric(id) {
        //   this.axios({
        //     method: "GET",
        //     url: "/api/api/song/media",
        //     params: {
        //       id: "409654891",
        //     },
        //   })
        //     .then((result) => {
        //       console.log(result);
        //       console.log(result.data.lyric);
        //     })
        //     .catch((err) => {});
        // },
    },
};