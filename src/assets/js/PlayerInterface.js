import { createNamespacedHelpers } from "vuex";
import { state } from "../../store/menuStore/state";
const { mapState, mapMutations } = createNamespacedHelpers("menuModule");
export default {
    computed: {
        ...mapState([
            "_aplayer",
            "currentTime",
            "duration",
            "durationSec",
            "timeChange",
            "progressBarFlag",
            "nowIsPlay",
            "isRoll",
            "index",
            "myList",
            "isPlayAll",
            "index",
            "playFlag",
            "_loop",
            "_order",
            "_singleCycle",
            "_volume",
            "_saveCollected",
        ]),
    },
    data() {
        return {
            active: "",
            // 自定义进度条的值
            progressBarValue: 0,
            // 定时器
            timer: null,
            // 节流阀
            delay: false,
            show: false,
            indexForSong: 0,
            // 音量
            customVolume: 10,
            // 音量调节条显示状态
            volumeBar: false,
            // 收藏
            isCollected: false,
            lrc: [],
            // 歌词播放的索引
            lrcIndex: 0,
            // 拖动歌词时对应歌词索引
            moveLrcIndex: -1,
            // 触摸时ul的top值
            startMove: 0,
            // 触摸时的y坐标
            touchStartY: 0,
            flag: true
        };
    },
    watch: {
        // volume(e) {
        //   this._changeVolume(e);
        // },
        // _volume(e) {
        //   this.volume = e;
        // }
        index(e) {
            // 改正自定义列表歌曲高亮显示
            this.indexForSong = e;
            // 歌曲改变 重新处理歌词
            let lrc = this.myList[e].lrc;
            this.disposeLyric(lrc);
        },
    },
    mounted() {
        // 同步列表选中状态
        this.indexForSong = this._aplayer.currentMusic.id - 1;
    },
    created() {
        // 同步音量状态
        this.customVolume = this._volume * 100;
        console.log(this.customVolume);
        let lrc = this._aplayer.currentMusic.lrc;
        this.disposeLyric(lrc);
    },
    methods: {
        ...mapMutations([
            "saveCurrentTime",
            "saveDuration",
            "changeChangeTime",
            "progressBarFlagState",
            "setNowIsPlay",
            "setPlayAll",
            "changeIndex",
            "controlHidden",
            "changePlayFlag",
            "changeIsRoll",
            "_changeLoop",
            "_changeSongCycle",
            "_changeOrder",
            "_changeVolume",
            "_changePlayTime",
            "_changeSaveCollected",
        ]),
        // 处理当前播放时间秒数
        seconds() {
            console.log(this._aplayer.currentMusic.collect);
            console.log(this.timeChange);
            // 显示歌词时 执行
            if (this.$refs.myLyric) {
                let index = 0;
                // console.log("this.$refs.myLyric=>", this.$refs.myLyric);
                // this.$refs.myLyric.getElementsByClassName("activeLrc")
                for (let i = 0; i < this.lrc.length; i++) {
                    // 播放进度时间大于歌词时间 取最近一句高亮显示
                    if (this.currentTime >= this.lrc[i][0]) {
                        // console.log(this.lrc[i]);
                        index = this.lrc[i][2];
                    } else {
                        // break;
                    }
                }
                console.log(index);
                // console.log(index * 25);
                // 允许歌词滚动
                if (this.flag) {
                    // console.log(index);
                    this.lrcIndex = index;
                    // 歌词滚动
                    this.$refs.myLyric.style.top = -this.lrcIndex * 25 + 190 + "px";
                }
                // console.log(this.$refs.myLyric.getElementsByClassName("lrc"));
            }
            // 全部播放完毕 并且不为列表循环 停止播放
            if (this.isPlayAll && this._loop == "none") {
                this.changePlayFlag(false);
                console.log(this.playFlag);
                console.log("全部播放完毕 并且不为列表循环 停止播放");
                this._aplayer.pause();
                // 清除提示
                this.$toast.clear();
            }
            console.log(this.myList);
            // 改变自定义进度条的进度
            if (this.progressBarFlag) {
                this.progressBarValue = (this.currentTime / this.durationSec) * 100;
                // 分钟数
                let min =
                    this.currentTime / 60 < 10
                        ? "0" + parseInt(this.currentTime / 60)
                        : parseInt(this.currentTime / 60);
                // 秒数
                let sec =
                    this.currentTime % 60 < 10
                        ? "0" + parseInt(this.currentTime % 60)
                        : parseInt(this.currentTime % 60);
                // console.log(min, sec);
                // console.log(this.durationSec);
                return min + ":" + sec;
            } else {
                //  转换为秒数 获取拖动自定义进度条拖动时对应的滑块进度
                let time = (this.progressBarValue * this.durationSec) / 100;
                console.log(time);
                // 分钟数
                let min =
                    time / 60 < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60);
                // 秒数
                let sec =
                    time % 60 < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60);
                console.log(sec);
                return min + ":" + sec;
            }
        },
        // 自定义进度条的progressBarFlag false
        noChange() {
            //  禁止自定义进度条跟随播放器进度条变化
            this.progressBarFlagState(false);
        },
        listCollect(item, i) {
            console.log(item, i);
            let arr = JSON.parse(localStorage.getItem("myCollectedSongs"));
            if (arr) {
                // 有缓存 直接到缓存中修改状态
                for (let i = 0; i < arr.length; i++) {
                    // 歌曲id相同 修改对应收藏信息
                    if (item.songId == arr[i].songId) {
                        console.log(arr[i].songId);
                        arr[i].collect = !arr[i].collect;
                        // 更正点击时收藏图标与取消收藏图标切换
                        item.collect = arr[i].collect;
                        console.log(arr);
                        // 写入缓存
                        localStorage.setItem("myCollectedSongs", JSON.stringify(arr));
                        return;
                    }
                }
                // 没有缓存 执行收藏
                console.log(item);
                item.collect = true;
                arr.push(item);
                console.log(arr);
                // 写入缓存
                localStorage.setItem("myCollectedSongs", JSON.stringify(arr));
                return;
            }
            // 没有缓存 执行收藏
            let arr1 = [];
            console.log(item);
            item.collect = true;
            arr1.push(item);
            console.log(arr1);
            // 写入缓存
            localStorage.setItem("myCollectedSongs", JSON.stringify(arr1));
        },
        // 收藏
        collect() {
            let arr = JSON.parse(localStorage.getItem("myCollectedSongs"));
            console.log(arr);
            if (arr) {
                // 有缓存 直接到缓存中修改状态
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                    console.log(this._aplayer.currentMusic);
                    // 歌曲id相同 修改对应收藏信息
                    if (this._aplayer.currentMusic.songId == arr[i].songId) {
                        console.log(arr[i].songId);
                        arr[i].collect = !arr[i].collect;
                        this.myList.some((v) => {
                            if (v.songId == arr[i].songId) {
                                // 更正列表收藏图标状态
                                v.collect = arr[i].collect;
                                return true;
                            }
                        });
                        // 更正点击时收藏图标与取消收藏图标切换
                        this._aplayer.currentMusic.collect = arr[i].collect;
                        console.log(arr);
                        // 写入缓存
                        localStorage.setItem("myCollectedSongs", JSON.stringify(arr));
                        return;
                    }
                }

                // 没有缓存 执行收藏
                console.log(this._aplayer.currentMusic);
                this._aplayer.currentMusic.collect = true;
                this.myList.some((v) => {
                    if (v.songId == this._aplayer.currentMusic.songId) {
                        // 更正列表收藏图标状态
                        v.collect = this._aplayer.currentMusic.collect;
                        return true;
                    }
                });
                arr.push(this._aplayer.currentMusic);
                console.log(arr);
                // 写入缓存
                localStorage.setItem("myCollectedSongs", JSON.stringify(arr));
                return;
            }
            // 没有缓存 执行收藏
            let arr1 = [];
            console.log(this._aplayer.currentMusic);
            this._aplayer.currentMusic.collect = true;
            this.myList.some((v) => {
                if (v.songId == this._aplayer.currentMusic.songId) {
                    // 更正列表收藏图标状态
                    v.collect = this._aplayer.currentMusic.collect;
                    return true;
                }
            });
            arr1.push(this._aplayer.currentMusic);
            console.log(arr1);
            // 写入缓存
            localStorage.setItem("myCollectedSongs", JSON.stringify(arr1));
        },
        // 重新搜索歌词
        regain() {
            this.$dialog
                .confirm({
                    title: "重新获取歌词",
                    message: "确认重新获取歌词吗？",
                })
                .then(() => {
                    // on confirm
                    this.$toast.loading({
                        message: "加载中...",
                        forbidClick: false,
                        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
                        duration: 0,
                    });
                    // 传入API名以及请求参数对象
                    this.jsp("http://music.163.com/api/song/media", {
                        id: this._aplayer.currentMusic.songId,
                        callbackName: "jsonpFunc",
                    })
                        .then((result) => {
                            console.log(result);
                            if (result.code == 200) {
                                this.$toast.clear();
                                this.$toast("获取成功");
                                // 重新处理歌词
                                this.disposeLyric(result.lyric);
                                let arr = JSON.parse(localStorage.getItem("myCollectedSongs"));
                                if (arr) {
                                    // 有缓存 直接到缓存中修改状态
                                    for (let i = 0; i < arr.length; i++) {
                                        // console.log(arr[i]);
                                        // console.log(this._aplayer.currentMusic);
                                        // 歌曲id相同 修改对应歌词信息
                                        if (this._aplayer.currentMusic.songId == arr[i].songId) {
                                            console.log(arr[i].songId);
                                            arr[i].lrc = result.lyric;
                                            // 写入缓存
                                            localStorage.setItem(
                                                "myCollectedSongs",
                                                JSON.stringify(arr)
                                            );
                                            return;
                                        }
                                    }
                                }
                            } else {
                                this.$toast.clear();
                                this.$toast("获取失败");
                            }
                        })
                        .catch((err) => {
                            this.$toast.clear();
                            console.log(err);
                        });
                })
                .catch(() => {
                    // on cancel
                });
        },
        // 拖动进度条 改变歌曲播放时间
        changeTime() {
            this.setPlayAll(false);
            // 转换为秒数
            let value = (this.progressBarValue * this.durationSec) / 100;
            console.log(value);
            if (value == 0) {
                // value = value++;
                this._changePlayTime(0);
            }
            // 设置播放时间 标识
            this.changeChangeTime({ time: value, flag: true });
            console.log(this._aplayer);
            setTimeout(() => {
                this._aplayer.play();
            }, 150);
        },
        // 随机播放 列表播放切换
        changeRandom() {
            if (this._order == "list") {
                this._changeOrder("random");
                this.$toast("随机播放");
            } else if (this._order == "random") {
                this._changeOrder("list");
                this.$toast("列表播放");
            }
        },
        // 播放暂停按钮
        playOrPause() {
            // const { media } = this._aplayer;
            // console.log(media.paused); // 获取音频是否暂停
            this.setPlayAll(false);
            console.log(123);
            setTimeout(() => {
                this._aplayer.toggle();
            }, 150);
            // this.playFlag = !this.playFlag;
            this.changePlayFlag(!this.playFlag);
        },
        // 下一首
        next() {
            if (this.myList.length == 0) {
                this.$toast("列表没有歌曲，快去添加歌曲吧");
                return;
            }
            this.isCollected = false;
            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "加载中...",
            });
            // 同步列表选中状态
            this.indexForSong = this._aplayer.currentMusic.id;
            if (this._aplayer.currentMusic.id >= this.myList.length) {
                this.indexForSong = 0;
            }
            this.changeIsRoll(false);
            this._aplayer.skipForward();
            // 重新获取歌词
            this.disposeLyric(this.myList[this.indexForSong].lrc);
        },
        // 上一首
        prev() {
            if (this.myList.length == 0) {
                this.$toast("列表没有歌曲，快去添加歌曲吧");
                return;
            }
            this.isCollected = false;

            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "加载中...",
            });
            // 同步列表选中状态
            this.indexForSong = this._aplayer.currentMusic.id - 2;
            if (this.indexForSong < 0) {
                this.indexForSong = this.myList.length - 1;
            }
            console.log(this.indexForSong);
            this.changeIsRoll(false);
            this._aplayer.skipBack();
            // 重新获取歌词
            this.disposeLyric(this.myList[this.indexForSong].lrc);
        },
        // 触摸时
        touchStart(e) {
            console.log(this.$refs.myLyric);
            console.log(this.$refs.myLyric.style.top);
            // 记录触摸时的歌词位置
            this.startMove = parseInt(this.$refs.myLyric.style.top);
            this.touchStartY = e.changedTouches[0].pageY;

            if (this.$refs.myLyric.style.top == '') {
                this.startMove = 190
            }
            console.log(this.startMove);
        },
        // 手指在屏幕滑动
        touchMove(e) {
            // y位移
            let y = e.changedTouches[0].pageY;
            // x位移 y位移
            // console.log(y);
            // console.log(y - this.touchStartY);
            this.$refs.myLyric.style.top = this.startMove + y - this.touchStartY + 'px';
            // 清除动画
            this.$refs.myLyric.classList.add('clear-transition')
            // 禁止歌词随歌曲播放滚动
            this.flag = false;
            // console.log((this.startMove + y - this.touchStartY));
            console.log((this.startMove + y - this.touchStartY - 190) / 25);
            // 对应歌词索引号
            this.moveLrcIndex = -((this.startMove + y - this.touchStartY - 190) / 25).toFixed();
            console.log(this.moveLrcIndex);
            if (this.moveLrcIndex <= 0) {
                this.moveLrcIndex = 0;
            } else if (this.moveLrcIndex >= this.lrc.length - 1) {
                this.moveLrcIndex = this.lrc.length - 1
            }
            // 清除原来的歌词高亮显示
            this.lrcIndex = -1;
            // this.lrcIndex = this.moveLrcIndex;
        },
        // 手指滑动结束
        touchEnd() {
            console.log('touchEnd');
            // 恢复动画
            this.$refs.myLyric.classList.remove('clear-transition');
            // console.log(this.lrc[this.moveLrcIndex][0]);
            // 只点击歌词 没有拖动
            if (this.moveLrcIndex == -1) return;

            // toggle*2 保持当前播放 或者暂停状态
            setTimeout(() => {
                console.log(this.active);
                if (this.active) {
                    console.log(this.lrc);
                    console.log(this.moveLrcIndex);
                    // 设置播放时间 标识  拖动结束 根据对应歌词设置播放时间
                    this.changeChangeTime({ time: this.lrc[this.moveLrcIndex][0], flag: true });
                    this._aplayer.toggle();
                }
                // 清除拖动时的歌词高亮显示
                this.moveLrcIndex = -1;
            }, 0);
            setTimeout(() => {
                if (this.active) {
                    this._aplayer.toggle();
                }
            }, 100);
            // 恢复歌词随歌曲播放滚动
            this.flag = true;
        },
        // 显示当前歌单列表
        showList() {
            console.log(this.myList);
            if (this.myList.length == 0) {
                this.$toast("歌曲列表空空如也");
                return;
            }
            this.show = true;
        },
        // 返回主界面
        goBack() {
            console.log(1111);
            // 取消隐藏音乐播放器控件
            this.controlHidden(false);
            // 跳转回上一页
            this.$router.go(-1);
        },
        // 自定义音乐列表选歌
        selectSong(item, index) {
            console.log(this._aplayer.currentMusic);
            if (item.url == this._aplayer.currentMusic.url) {
                console.log("点击同一首歌   暂停 播放切换");
                this._aplayer.toggle();
                return;
            }
            console.log(index);
            // 更改歌曲播放索引
            this.changeIndex(index);
            // 改正自定义列表歌曲高亮显示
            this.indexForSong = index;
            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "加载中...",
            });

            // 移除控制转动的类名
            this.changeIsRoll(false);

            this.show = false;
        },
        // 改变歌曲播放状态
        changeLoop() {
            if (this._loop == "one") {
                // 单曲循环 改为不循环
                this._changeLoop("none");
                this.$toast("列表播放");
            } else if (this._loop == "none") {
                // 不循环 改为列表循环
                this._changeLoop("all");
                this.$toast("列表循环");
            } else if (this._loop == "all") {
                // 列表循环 改为单曲循环
                this._changeLoop("one");
                this.$toast("单曲循环");
            }
        },
        // 显示 隐藏调节音量控件
        trumpet() {
            // 音量进度条显示时 静音不静音 切换
            if (this.volumeBar) {
                if (this._volume == 0) {
                    // 从缓存中读取上一次的音量
                    let val = JSON.parse(localStorage.getItem("aplayer-setting"));
                    // console.log(val[0].volume);
                    this._changeVolume(val[0].volume);
                    this.customVolume = val[0].volume * 100;
                    this.$toast("音量" + this.customVolume + "%");
                } else {
                    this._changeVolume(0);
                    this.customVolume = 0;
                    this.$toast("静音");
                }
            }
            this.volumeBar = true;
        },
        // 更改音量
        changeCustomVolume() {
            console.log(this.customVolume);
            this.$toast("音量" + this.customVolume + "%");
            // 音量 0-1
            let val = this.customVolume / 100;
            console.log(val);
            this._changeVolume(val);
        },
        hiddenVolumeBar() {
            this.volumeBar = false;
        },
        // 歌词处理
        disposeLyric(lrc) {
            console.log(lrc);
            if (!lrc) {
                console.log("无歌词");
                this.lrc = [[0.0, "暂无歌词", 0]];
                return;
            }
            // console.log(lrc);
            // 歌词数组
            let lrcArr = lrc.split("\n");
            let arr = [];
            // console.log(lrcArr);
            // // 以[]开头结束
            // let regExp = /^\[([\s\S])*\]$/;
            // console.log(regExp.test("[1:.1]"));

            // 以[]开头结束 匹配播放时间 [01:12.36]
            let regExp = /^\[\d{2}:\d{2}.\d{1,}\]/;
            lrcArr.forEach((v, i) => {
                // console.log(v);
                // 通过正则验证
                if (regExp.test(v)) {
                    // 排除空数组
                    if (v !== "") {
                        arr.push(v.split("["));
                    }
                } else {
                    // console.log(v);
                }
            });
            // console.log(arr);
            arr.forEach((v) => {
                v.splice(0, 1);
            });

            let songLrc = [];
            arr.forEach((v) => {
                // console.log(v);
                songLrc.push(v[0].split("]"));
            });
            // console.log(songLrc);
            songLrc.forEach((v, i) => {
                // console.log(v);
                v.push(i);
                let arr = v[0].split(":");
                v[0] = arr[0] * 60 + parseFloat(arr[1]);
            });
            console.log(songLrc);
            // console.log(lrcArr);
            // 二维数组
            this.lrc = songLrc;
        },
    },
    // created() {
    //   console.log(this.currentTime);
    //   console.log(this.duration);
    //   console.log(this._loop);
    // }
};