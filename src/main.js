import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import APlayer from "@moefe/vue-aplayer";
import VueJsonp from 'vue-jsonp'
import Common from './assets/js/common.js'
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'vant/lib/index.css';
import 'lib-flexible/flexible'
import "font-awesome/css/font-awesome.min.css"
import { Button, NavBar, Form, Field, Search, Tabs, Tab, Pagination, Icon, NoticeBar, Toast, Lazyload, PullRefresh, Popup, Slider, Dialog, Empty, Swipe, SwipeItem } from 'vant';

Vue.use(Button)
  .use(NavBar)
  .use(Form)
  .use(Field)
  .use(Search)
  .use(Tabs)
  .use(Tab)
  .use(Pagination)
  .use(Icon)
  .use(NoticeBar)
  .use(Toast)
  .use(Lazyload)
  .use(PullRefresh)
  .use(Slider)
  .use(Popup)
  .use(Dialog)
  .use(Empty)
  .use(SwipeItem)
  .use(Swipe)

//注册axios
Vue.use(VueAxios, axios);

Vue.use(APlayer, {
  defaultCover: '',
  productionTip: true,
});

Vue.use(VueJsonp)
  .use(Common);
Vue.use(VideoPlayer)


//配置请求基础路径
// axios.defaults.baseURL = 'https://v1.alapi.cn/api/music'

//配置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

//发起请求之前处理
axios.interceptors.request.use(config => {
  // 

  if (config.method == 'post') {
    let paramsString = '';
    //post请求参数序列化，转成一个字符串
    for (let key in config.data) {
      paramsString += key + '=' + config.data[key] + '&'
    }

    // 

    config.data = paramsString.slice(0, -1);

    // 
  }

  return config;
})

Vue.config.productionTip = false

Vue.filter('myDate', (date, format) => {
  if (typeof date === "string") {
    var mts = date.match(/(\/Date\((\d+)\)\/)/);
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2]);
    }
  }
  date = new Date(date);
  if (!date || date.toUTCString() == "Invalid Date") {
    return "";
  }
  var map = {
    "M": date.getMonth() + 1, //月份 
    "d": date.getDate(), //日 
    "h": date.getHours(), //小时 
    "m": date.getMinutes(), //分 
    "s": date.getSeconds(), //秒 
    "q": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };

  format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
    var v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - 2);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
}),

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
