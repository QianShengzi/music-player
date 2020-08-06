import { createNamespacedHelpers } from "vuex";
import sorter from '../../components/sorter.vue'
const { mapState, mapMutations } = createNamespacedHelpers("menuModule");
export default {
    data() {
        return {
            isLoading: true,
            listActive: 0,
            // 分页器显示上次页数位置
            nowadaypage: 1,
            // 当前页码
            currentPage: 1,
            // 搜索结果显示的页码
            searchCurrentPage: 1,
            // 每页显示数量
            perPage: 10,
            // 总共多少条记录 总记录数
            totalItems: 0,
            isShow: false,
            // 榜单列表
            mylist: [
                // 数据格式  其实这里没什么用 就是用来提示下数据格式
                {
                    title: "热歌榜",
                    num: 0,
                    datas: [
                        {
                            name: "1",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "2",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "3",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "4",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "5",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD6",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD7",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD8",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD9",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD10",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD11",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD12",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                        {
                            name: "MAYBEDEAD13",
                            url: "http://music.163.com/song/media/outer/url?id=1400060440",
                            picurl:
                                "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
                            artistsname: "Yee",
                        },
                    ],
                },
                {
                    title: "新歌榜",
                    num: 1,
                    datas: [],
                },
                {
                    title: "飙升榜",
                    num: 2,
                    datas: [],
                },
                {
                    title: "抖音榜",
                    num: 3,
                    datas: [],
                },
                {
                    title: "电音榜",
                    num: 4,
                    datas: [],
                },
            ],
            // banner信息
            bannerData: [
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/IL5nDPL3lFZYrpEzJGy8Yg==/109951165188073859.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "0",
                    "monitorImpress": "",
                    "targetType": "3000",
                    "monitorClick": "",
                    "url": "https://music.163.com/store/newalbum/detail?id=93058583"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/_UuNFeOp_ObLplZwPhNSjg==/109951165189466730.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "83878976",
                    "monitorImpress": "",
                    "targetType": "10",
                    "monitorClick": "",
                    "url": "/album?id=83878976"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/XUw5Xze_M-01plsdz0Crfg==/109951165189478598.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "1459678124",
                    "monitorImpress": "",
                    "targetType": "1",
                    "monitorClick": "",
                    "url": "/song?id=1459678124"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/0kJc3AuFlVtqJ3RO-BPFuQ==/109951165189486136.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "93048548",
                    "monitorImpress": "",
                    "targetType": "10",
                    "monitorClick": "",
                    "url": "/album?id=93048548"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/-nd30-xUWc55i30YqzxPqA==/109951165189484409.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "1467073899",
                    "monitorImpress": "",
                    "targetType": "1",
                    "monitorClick": "",
                    "url": "/song?id=1467073899"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/H1_7bPtqDxtTRok6QE4IZg==/109951165189329386.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "1466910225",
                    "monitorImpress": "",
                    "targetType": "1",
                    "monitorClick": "",
                    "url": "/song?id=1466910225"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/9jlowKNx7fQWiOzr-du8RA==/109951165189495853.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "1465957765",
                    "monitorImpress": "",
                    "targetType": "1",
                    "monitorClick": "",
                    "url": "/song?id=1465957765"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/XT46OlQ28vj5Ge1Tmex15g==/109951165189514491.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "1466643383",
                    "monitorImpress": "",
                    "targetType": "1",
                    "monitorClick": "",
                    "url": "/song?id=1466643383"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/qbXe49Jtf6XWvciJ7hrOyg==/109951165189385629.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "93212721",
                    "monitorImpress": "",
                    "targetType": "10",
                    "monitorClick": "",
                    "url": "/album?id=93212721"
                },
                {
                    "backgroundUrl": "",
                    "picUrl": "http://p1.music.126.net/oUt8LNX-CWOCGmeaMOz_qQ==/109951165189513139.jpg",
                    "monitorType": "",
                    "backgroundColor": "",
                    "targetId": "1466303986",
                    "monitorImpress": "",
                    "targetType": "1",
                    "monitorClick": "",
                    "url": "/song?id=1466303986"
                }
            ],
            // 缓存的当前榜单音乐列表
            saveList: [],
            searchValue: '',
            // // 搜索歌曲的显示隐藏
            // showSearchList: false
        };
    },
    components: {
        sorter
    },
    created() {
        // 缓存中有数据
        if (this.list) {
            // 获取缓存数据
            this.mylist = this.list;
            // this.mediaAudio();
        }
        if (this.list[0].datas.length == 0) {
            this.getRandomMusic('热歌榜')
        }
        console.log(this.listActive);
        // this.changeTabs();
        this.countTotalItems();
        if (this.myList.length == 0) {
            // 播放列表无内容 读取榜单歌曲
            this.changeListSongs();
        }
        // 恢复歌曲榜单状态 分页状态
        this.listActive = this._listActive;
        this.currentPage = this._currentPage;
        // 状态为搜索歌曲时 执行代码
        if (this._searchSongs.length) {
            //  分页器显示搜索歌曲分页的页数位置
            this.nowadaypage = this._searchCurrentPage;
        } else {
            // 分页器显示推荐列表上次页数位置
            this.nowadaypage = this._currentPage;
        }

        // 读取搜索关键词
        this.searchValue = this._searchValue;
        // 保存当前搜索音乐的第几页
        this.searchCurrentPage = this._searchCurrentPage;

        this._changeShowHall(true);
    },
    computed: {
        ...mapState([
            "_aplayer",
            "list",
            "_showHall",
            "_listActive",
            "__listActive",
            "_hotComments",
            "myList",
            "_searchSongs",
            "_searchTotalItems",
            "_currentPage",
            "_searchCurrentPage",
            "_searchValue"
        ]),
    },
    methods: {
        ...mapMutations([
            "changeData",
            "changeProducts",
            "changeIndex",
            "_changeShowHall",
            "shopId",
            "changePlayFlag",
            "saveShopProductsKeyword",
            "saveSearchShopData",
            "setNowIsPlay",
            "_changeListAcitve",
            "_changeMyList",
            "_saveSongsByToggle",
            "__changeListAcitve",
            "changeIsRoll",
            "setPlayAll",
            "_changeHotComments",
            "_changeSearchSongs",
            '_changeSearchTotalItems',
            '_changeCurrentPage',
            "_changeSearchCurrentPage",
            "_changeSearchValue"
        ]),
        show() {
            this.isShow = !this.isShow;
        },

        // 歌曲榜单切换事件
        changeTabs() {
            this.isLoading = false;
            console.log(this.listActive);
            this.__changeListAcitve(this.listActive);
            // 当前页码重新变为1
            this.currentPage = 1;
            this._changeCurrentPage(1);
            // 重新计算总记录数
            this.countTotalItems();
            // 榜单切换 记录到缓存
            this._changeListAcitve(this.listActive);
            // // 读取对应榜单歌曲
            // this.changeListSongs();
            console.log(this._listActive);
            // 点击对应榜单 才请求获取音乐保存到vuex中
            this.list.forEach((v) => {
                // console.log(v);
                if (v.num == this._listActive) {
                    console.log(v);
                    // datas里没有数据时 再请求数据
                    // 获取20首随机音乐
                    if (v.datas.length == 0) {
                        // 获取5首
                        for (let i = 0; i <= 5; i++) {
                            console.log(i);
                            // 根据榜单获取对应音乐
                            this.getRandomMusic(v.title);
                        }
                    }
                }
            });
        },
        // 搜索栏取消按钮事件
        cancel() {
            // 清除搜索歌曲数据
            this._changeSearchSongs([]);
            // 搜索分页 恢复为1
            this._changeSearchCurrentPage(1);
            // 更正当前搜索音乐为第一页
            this.searchCurrentPage = this._searchCurrentPage;
            // 恢复歌曲榜单状态 分页状态
            this.listActive = this._listActive;
            console.log(this._listActive);
            this.currentPage = this._currentPage;
            this.nowadaypage = this.currentPage;
            console.log(this.nowadaypage);
            // 分页器显示上次页数位置
            this.nowadaypage = this._currentPage;

        },
        // 保存搜索输入的值
        saveSearchValue() {
            this._changeSearchValue(this.searchValue);
        },
        // 分页器点击
        changePage(item) {
            console.log(item);
            this.currentPage = item;
            // 状态为搜索歌曲时 执行代码
            if (this._searchSongs.length) {
                console.log('搜索');
                // 保存当前点击第几页
                this._changeSearchCurrentPage(item);
                // 根据页数请求搜索歌曲
                this.searchSongs(this.searchValue, item);
                // 阻止currentpage变化
                return;
            }
            // 更改currentpage
            this._changeCurrentPage(item);
        },
        // 评论页
        comment(songId, index) {
            console.log({ songId, index });
            console.log("评论");

            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "获取热评...",
            });

            this.axios({
                method: "GET",
                url: "https://v1.alapi.cn/api/music/comment/hot",
                params: {
                    id: songId,
                },
            })
                .then((result) => {
                    console.log(result);
                    if (result.status == 200) {
                        // 保存获取到的热评
                        let res = result.data.data.hotComments;
                        this._changeHotComments(res);
                        console.log(this._hotComments);
                    }
                    this.$toast.clear();
                })
                .catch((err) => {
                    this.$toast.clear();
                    this.$toast("获取失败");
                });
            this.$router.push({ name: "Comment" });
            this._changeShowHall(false);
        },
        // 计算总记录数
        countTotalItems() {
            if (this._searchSongs.length !== 0) return;
            console.log(this.listActive);
            this.list.some((v) => {
                // console.log(v);
                // 判断是否为当前榜单 对应榜单获取对应长度
                if (v.num == this.__listActive) {
                    // console.log(v.num);
                    // console.log(this.listActive);
                    // console.log(v.datas.length);
                    this.totalItems = v.datas.length;

                    return true;
                }
            });
            console.log(this.totalItems);
        },
        // 下拉刷新事件
        onRefresh() {
            // 清空对应榜单列表歌曲
            this.list.forEach((v) => {
                // console.log(v);
                if (v.num == this._listActive) {
                    console.log(v);
                    v.datas = [];
                }
            });
            // 调用榜单切换事件 获取对应榜单随机歌曲
            this.changeTabs();
            // setTimeout(() => {
            //     console.log("刷新成功");
            //     // this.isLoading = false;
            // }, 2000);
        },
        // 读取对应榜单歌曲 添加到播放器中
        changeListSongs() {
            let index = this._listActive;
            console.log(this.list[index]);
            let arr = [];
            let local = JSON.parse(localStorage.getItem("myCollectedSongs"));

            this.list[index].datas.forEach((v) => {
                console.log(v);
                // 要添加到播放器的歌曲格式
                let song = {
                    title: "",
                    artist: "",
                    src: "",
                    cover: "",
                };
                song.name = v.name;
                song.artist = v.artistsname;
                song.url = v.url;
                song.cover = v.picurl;

                song.lrc = v.lrc;
                song.songId = v.songId;
                song.collect = v.collect;
                // 缓存中读取歌曲数据 如果存在的话
                if (local) {
                    // 有缓存 直接到缓存中获取状态
                    for (let i = 0; i < local.length; i++) {
                        console.log("读取缓存");
                        // 歌曲id相同 获取信息
                        if (v.songId == local[i].songId) {
                            song.lrc = local[i].lrc;
                            song.collect = local[i].collect;
                            break;
                        }
                    }
                }
                // console.log(song);
                arr.push(song);
            });
            console.log(arr);
            this.saveList = arr;
            // 更改播放器列表的歌曲
            this._changeMyList(this.saveList);
        },
        // 点击播放搜索歌曲
        playSongForSearch(searchSong, index) {
            console.log({ searchSong, index });
            // 当前播放与点击的是同一首
            if (searchSong.songId == this._aplayer.currentMusic.songId) return;

            let list = [];
            let flag = false;
            // search属性判断是否含有从搜索列表添加的
            if (this.myList.length > 0) {
                this.myList.some(v => {
                    // 追加歌曲
                    if (v.search) {
                        flag = this.myList.some(v => {
                            // 列表歌曲id与点击要播放的搜索结果歌曲id相同  不添加歌曲
                            if (searchSong.songId == v.songId) return true;
                        })
                        list = this.myList
                        return true;
                    }
                })
            }
            // 播放列表添加的相同id 阻止代码向下执行
            if (flag) return;

            let isHaveLocal = false;
            // 从缓存查找是否存在歌曲
            let arr = JSON.parse(localStorage.getItem('myCollectedSongs'));
            // 要添加到播放器的歌曲格式
            let song = {
                artist: searchSong.artistsname,
                search: true,
                cover: searchSong.picurl,
                name: searchSong.name,
                songId: searchSong.songId,
                collect: searchSong.collect,
                url: searchSong.url,
                lrc: searchSong.lrc
            };
            if (arr) {
                isHaveLocal = arr.some(v => {
                    // console.log(v);
                    if (v.songId == searchSong.songId) {
                        song.url = v.url;
                        song.lrc = v.lrc;
                        return true;
                    }
                })
            }
            // 缓存中没有歌曲 从服务器获取歌曲链接
            if (isHaveLocal == false) {
                // 加载提示
                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: false,
                    message: "获取中...",
                });
                this.axios({
                    method: "GET",
                    url: "https://api.imjad.cn/cloudmusic/",
                    params: {
                        type: song,
                        id: searchSong.songId
                    },
                })
                    .then((result) => {
                        this.$toast.clear();
                        if (result.data.code == 200) {

                            console.log(result);
                            song.url = result.data.data[0].url;
                            // this._aplayer.play()
                        }
                    })
                    .catch((err) => { this.$toast.clear(); });
            }

            list.push(song)
            // 更改播放器列表的歌曲
            this._changeMyList(list);
            console.log(song);
        },
        // 点击播放榜单歌曲
        playSong(song, index) {
            // console.log({
            //   title: item.title,
            //   song,
            //   list: this.mylist,
            //   play: this._aplayer.currentMusic,
            // });
            console.log(this.listActive);
            // 判断点击的歌曲是否为同一首
            if (
                song.url == this._aplayer.currentMusic.url &&
                this.mylist.length !== 0
            ) {
                console.log("点击同一首歌   暂停 播放切换");
                this._aplayer.toggle();
                return;
            }
            // 读取对应榜单歌曲
            this.changeListSongs();
            // 更改播放器列表的歌曲
            this._changeMyList(this.saveList);
            // 改变播放状态标志 控制播放器播放暂停图标显示
            this.changePlayFlag(true);
            console.log({ song, index });
            setTimeout(() => {
                this._aplayer.play();
            }, 150);
            // 重新赋值全部播放状态
            this.setPlayAll(false);

            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "加载中...",
            });

            // 移除控制转动的类名
            this.changeIsRoll(false);
            // 播放当前点击的歌曲
            // this.setNowIsPlay(this.saveList[index]);
            // 设置列表当前播放索引
            this.changeIndex(index);
        },
        // 请求获取榜单随机音乐
        getRandomMusic(sort) {
            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "获取中...",
            });
            this.axios({
                method: "GET",
                url: "https://api.uomg.com/api/rand.music",
                params: {
                    sort: sort,
                    format: "json",
                },
            })
                .then((result) => {
                    this.isLoading = false;
                    this.$toast.clear();
                    console.log(result);
                    this._saveSongsByToggle({ sort: sort, data: result });
                })
                .catch((err) => { this.$toast.clear(); this.isLoading = false; });
        },
        // // 歌曲搜索
        // searchSongs(searchValue, offset) {
        //     // 不能为空
        //     console.log(offset);
        //     if (searchValue == '') return;
        //     if (offset == undefined) {
        //         // 初始偏移
        //         offset = 1;
        //     }
        //     console.log(offset);
        //     // 加载提示
        //     this.$toast.loading({
        //         duration: 0, // 持续展示 toast
        //         forbidClick: false,
        //         message: "获取中...",
        //     });
        //     this.axios({
        //         method: "GET",
        //         url: "https://v1.alapi.cn/api/music/search",
        //         params: {
        //             keyword: searchValue,
        //             type: 1,
        //             limit: this.perPage * 2,
        //             offset: (offset - 1) * this.perPage * 2
        //         }
        //     })
        //         .then((result) => {
        //             this.$toast.clear();
        //             if (result.data.code == 200) {
        //                 console.log(result);
        //                 this._changeSearchSongs(result.data.data.songs);
        //                 // 记录搜索歌曲总页数
        //                 this._changeSearchTotalItems(result.data.data.songCount);
        //                 console.log(this._searchTotalItems);
        //                 console.log(this._searchSongs);
        //                 let arr = [];
        //                 this._searchSongs.forEach(v => {
        //                     let obj = {};
        //                     console.log(v);
        //                     obj.name = v.name;
        //                     obj.songId = v.id;
        //                     obj.collect = false;
        //                     obj.artistsname = v.artists[0].name;
        //                     // // 查找图片
        //                     // this.axios({
        //                     //     method: "GET",
        //                     //     url: "https://v1.alapi.cn/api/music/detail",
        //                     //     params: {
        //                     //         id: v.id
        //                     //     }
        //                     // }).then((res) => {
        //                     //     // console.log(res);
        //                     //     if (res.data.code == 200) {
        //                     //         obj.picurl = res.data.data.songs[0].al.picUrl;
        //                     //         obj.lrc = '';
        //                     //         obj.url = ''
        //                     arr.push(obj);
        //                     //     }
        //                     // }).catch((err) => {

        //                     // })
        //                 });
        //                 this._changeSearchSongs(arr);
        //                 console.log(arr);
        //                 console.log(this._searchSongs);
        //             }
        //         })
        //         .catch((err) => { this.$toast.clear(); });
        // }

        // 歌曲搜索
        searchSongs(searchValue, offset) {
            // 不能为空
            console.log(offset);
            if (searchValue == '') return;
            if (offset == undefined) {
                // 初始偏移
                offset = 1;
            }
            console.log(offset);
            // console.log(searchValue);
            // return;
            // 加载提示
            this.$toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: false,
                message: "获取中...",
            });
            this.axios({
                method: "GET",
                url: "https://api.itooi.cn/netease/search",
                params: {
                    type: 'song',
                    search_type: 1,
                    pageSize: this.perPage,
                    page: (offset - 1),
                    keyword: searchValue
                }
            })
                .then((result) => {
                    this.$toast.clear();
                    this.$toast(result.data.msg);
                    console.log(result);
                    // return;
                    if (result.data.code == 200) {
                        this._changeSearchSongs(result.data.data.songs);
                        // 记录搜索歌曲总页数
                        this._changeSearchTotalItems(result.data.data.songCount);
                        console.log(this._searchTotalItems);
                        console.log(this._searchSongs);
                        let arr = [];
                        this._searchSongs.forEach(v => {
                            let obj = {};
                            console.log(v);
                            obj.name = v.name;
                            obj.songId = v.id;
                            obj.collect = false;
                            obj.artistsname = v.ar[0].name;
                            obj.picurl = v.al.picUrl;
                            arr.push(obj);
                        });
                        this._changeSearchSongs(arr);
                        console.log(arr);
                        console.log(this._searchSongs);
                    }
                })
                .catch((err) => { this.$toast.clear(); });
        }
    },
};