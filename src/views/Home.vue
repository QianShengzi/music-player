<template>
  <div class="home">
    <div>1231332131231321</div>
    <Country></Country>
    <!-- <img
      class="100%"
      ref="img"
      src="http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg"
      alt
    />-->

    <canvas id="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from "../components/country.vue";
import { myColor } from "../assets/js/color-thief.js";
export default {
  name: "country",
  components: {
    Country,
  },
  created() {
    // this.aaa();
    // this.bbbbbb();
  },
  mounted() {
    this.bbbbbb();
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
    bbbbbb() {
      console.log(this.$refs.img);
      // let img = this.$refs.img;
      // // return;
      // let canvas = document.createElement("canvas");
      // let context = canvas.getContext("2d");
      // context.width = img.width;
      // context.height = img.height;
      // let data = context.getImageData(0, 0, img.width, img.height).data;

      let img = new Image();
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      img.src =
        "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg";
      img.crossOrigin = "anonymous";
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        img.style.display = "none";
        let data = ctx.getImageData(0, 0, img.width, img.height).data;

        console.log(data);
        // return;
        let r = 0,
          g = 0,
          b = 0;

        // 取所有像素的平均值
        for (let row = 0; row < img.height; row++) {
          for (let col = 0; col < img.width; col++) {
            r += data[(img.width * row + col) * 4];
            g += data[(img.width * row + col) * 4 + 1];
            b += data[(img.width * row + col) * 4 + 2];
          }
        }

        // 求取平均值
        r /= img.width * img.height;
        g /= img.width * img.height;
        b /= img.width * img.height;

        // 将最终的值取整
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);

        //rgb转16进制 位运算
        const color = ((r << 16) | (g << 8) | b).toString(16);
        console.log(color);
        // 完
      };
    },
  },
};
</script>
