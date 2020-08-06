<template>
  <div>
    <!-- 分页器 -->
    <!--  page-count	总页数	number | string	根据页数计算
            total-items	总记录数	number | string	0
            items-per-page	每页记录数	number | string	10
    show-page-size	显示的页码个数  number | string-->
    <div class="page">
      <van-pagination
        @change="$emit('change-page',currentPage)"
        v-model="currentPage"
        :total-items="totalItems"
        :items-per-page="perPage"
        show-page-size="3"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "sorter",
  props: {
    changeCurrentPage: Number || String,
    totalItems: Number || String,
    perPage: Number || String,
    nowadaypage: Number || String,
  },
  data() {
    return {
      currentPage: 1,
      //   totalItems: 20,
      //   perPage: 5,
    };
  },
  created() {
    this.currentPage = this.nowadaypage;
  },
  methods: {
    // changePage(item) {
    //   console.log(item);
    // },
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 60%;
  margin: auto;
  margin-bottom: 30px;

  /deep/ .van-pagination__item--disabled {
    color: #f54c49;
  }

  /deep/ .van-pagination__item--active {
    color: #fff !important;
    background-color: #f54c49;
  }

  /deep/ .van-pagination__item {
    height: 30px;
    color: #f54c49;
  }
}
</style>