import { createNamespacedHelpers } from "vuex";
import sorter from '../../components/sorter.vue'
const { mapState, mapMutations } = createNamespacedHelpers("menuModule");
export default {
    computed: {
        ...mapState(["myList", "_aplayer"]),
    },
    components: {
        sorter
    },
    data() {
        return {
            // 收藏数据数组
            collectList: [],
            changeCurrentPage: 1,
            // 总共多少条记录 总记录数
            totalItems: 0,
            // 每页显示
            perPage: 10,
            // 当前页码
            currentPage: 1
        };
    },
    created() {
        // 获取缓存歌曲
        this.getMyCollect();
    },

    methods: {
        ...mapMutations(["_changeMyList"]),
        // 分页器点击
        changePage(item) {
            console.log(item);
            this.currentPage = item;
            // this._changeCurrentPage(item);
        },
        // 获取缓存歌曲
        getMyCollect() {
            let local = JSON.parse(localStorage.getItem("myCollectedSongs"));
            let myList = [];
            let count = 0;
            local.forEach((v) => {
                // 筛选收藏
                if (v.collect) {
                    myList.push(v);
                    v.id = count++;
                }
            });
            this.collectList = myList;
            // 总共多少条记录 总记录数
            this.totalItems = myList.length
        },
        // 取消收藏
        cancelCollect(id) {
            console.log(6666);
            this.$dialog
                .confirm({
                    title: "取消收藏",
                    message: "确认取消收藏吗？",
                })
                .then(() => {
                    // on confirm
                    // 根据歌曲id获取数据 修改收藏状态
                    let local = JSON.parse(localStorage.getItem("myCollectedSongs"));
                    local.some((v) => {
                        if (v.songId == id) {
                            v.collect = false;
                            return true;
                        }
                    });
                    console.log(local);
                    // 更改缓存
                    localStorage.setItem("myCollectedSongs", JSON.stringify(local));
                    // 更新收藏歌曲列表
                    this.getMyCollect();
                })
                .catch(() => {
                    // on cancel
                });
        },
        playSongs(index) {
            console.log(123);
            // 更新播放器歌曲列表
            this._changeMyList(this.collectList);
            console.log(this.myList);
            console.log(index);
            // 当前播放id和index相同 暂停 播放切换
            if (this._aplayer.currentMusic.id == index) {
                setTimeout(() => {
                    this._aplayer.toggle();
                }, 150);
                return;
            } else {
                setTimeout(() => {
                    // 切换歌曲
                    this._aplayer.switch(index)
                }, 0);
                // 切换歌曲
                setTimeout(() => {
                    this._aplayer.play();
                }, 150);
            }

        },
    },
};