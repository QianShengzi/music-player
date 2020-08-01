import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("menuModule");
export default {
    computed: {
        ...mapState(["_aplayer", "_showHall", "_hotComments"]),
    },
    data() {
        return {
            comments: [],
        };
    },
    methods: {
        ...mapMutations(["_changeShowHall"]),
        // 关闭评论页面
        close() {
            this._changeShowHall(true);
            console.log(this._showHall);
            this.$router.go(-1);
        },
        // 分页点击切换
        changePage() { },
        // 计算总记录数
        countTotalItems() { },
    },
};