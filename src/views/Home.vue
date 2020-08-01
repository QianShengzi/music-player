<template>
  <div class="home">
    <div>1231332131231321</div>
    <Country></Country>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from "../components/country.vue";

export default {
  name: "country",
  components: {
    Country,
  },
  created() {
    this.aaa();
  },
  methods: {
    aaa() {
      //   根据商品id请求数据
      // this.axios({
      //   method: "GET",
      //   url: "/api/index.php/v1/api/jd/goodslist",
      //   params: {
      //     apikey: "dd14c882d2f449e9",
      //     //   goods_id: this.clickId
      //     keyword: "手机"
      //   }
      // })
      //   .then(result => {
      //     console.log(result);
      //   })
      //   .catch(err => {});

      // //   根据商品id请求数据
      // this.axios({
      //   method: "GET",
      //   url: "/search",
      //   params: {
      //     keyword: "海阔天空"
      //   }
      // })
      //   .then(result => {
      //     console.log(result);
      //   })
      //   .catch(err => {});

      // //   根据商品id请求数据
      // this.axios({
      //   method: "GET",
      //   url: "https://api.uomg.com/api/rand.music",
      //   params: {
      //     sort: "热歌榜",
      //     format: "json"
      //   }
      // })
      //   .then(result => {
      //     console.log(result);
      //   })
      //   .catch(err => {});

      // this.axios({
      //   method: "GET",
      //   url: "/api/api/v3/tag/list",
      //   params: {
      //     pid: 0,
      //     apiver: 2,
      //     plat: 0
      //   }
      // })
      //   .then(result => {
      //     console.log(result);
      //   })
      //   .catch(err => {});

      this.axios({
        method: "GET",
        url: "https://api.mlwei.com/music/api/wy/",
        params: {
          key: "523077333",
          id: "%E6%95%85%E6%A2%A6",
          type: "so",
          cache: 0,
          nu: 20,
        },
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },
  },
};
</script>
