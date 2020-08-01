<template>
  <div class="atnight">
    <div class="topseach">
      <form action="/">
        <van-search v-model="searchVal" show-action @search="onSearch" @cancel="onCancel" />
      </form>
    </div>
    <div class="main">
      <div
        class="list flexbox"
        v-for="(item, index) in list"
        :key="index"
        :class="{select:iselct===index }"
        @click="choose(index,item)"
      >
        <div>{{item.name}}</div>
        <div>+{{item.areaCode}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      wholecss: "",
      countryList: [
        { name: "中国 (China)", areaCode: "86" },
        { name: "中国香港 (Hong Kong)", areaCode: "852" },
        { name: "中国澳門 (Macau)", areaCode: "853" },
        { name: "中国台湾 (Taiwan)", areaCode: "886" },
        { name: "日本 (Japan)", areaCode: "81" },
        { name: "韩国 (South Korea)", areaCode: "82" },
        { name: "美国 (USA or Canada)", areaCode: "1" },
        { name: "阿富汗 (Afghanistan)", areaCode: "93" },
        { name: "阿尔巴尼亚 (Albania)", areaCode: "355" },
        { name: "阿尔及利亚 (Algeria)", areaCode: "213" },
        { name: "萨摩亚 (American Samoa)", areaCode: "684" },
        { name: "安道尔共和国 (Andorra)", areaCode: "376" },
        { name: "安哥拉 (Angola)", areaCode: "244" },
        { name: "安圭拉岛 (Anguilla)", areaCode: "1264" },
        { name: "南极洲 (Antarctica)", areaCode: "672" },
        { name: "安提瓜和巴布达 (Antigua and Barbuda)", areaCode: "1268" },
        { name: "阿根廷 (Argentina)", areaCode: "54" },
        { name: "亚美尼亚 (Armenia)", areaCode: "374" },
        { name: "阿鲁巴 (Aruba)", areaCode: "297" },
        { name: "澳大利亚 (Australia)", areaCode: "61" },
        { name: "奥地利 (Austria)", areaCode: "43" },
        { name: "阿塞拜疆 (Azerbaijan)", areaCode: "994" },
        { name: "巴哈马 (Bahamas)", areaCode: "1242" },
        { name: "巴林 (Bahrain)", areaCode: "973" },
        { name: "孟加拉国 (Bangladesh)", areaCode: "880" },
        { name: "巴巴多斯 (Barbados)", areaCode: "1246" },
        { name: "白俄罗斯 (Belarus)", areaCode: "375" },
        { name: "比利时 (Belgium)", areaCode: "32" },
        { name: "伯利兹城 (Belize)", areaCode: "501" },
        { name: "贝宁 (Benin)", areaCode: "229" },
        { name: "百慕大 (Bermuda)", areaCode: "1441" },
        { name: "不丹 (Bhutan)", areaCode: "975" },
        { name: "玻利维亚 (Bolivia)", areaCode: "591" },
        {
          name: "波斯尼亚和黑塞哥维那 (Bosnia and Herzegovina)",
          areaCode: "387"
        },
        { name: "博茨瓦纳 (Botswana)", areaCode: "267" },
        { name: "巴西 (Brazil)", areaCode: "55" },
        {
          name: "英属印度洋领地 (British Indian Ocean Territory)",
          areaCode: "246"
        },
        { name: "文莱达鲁萨兰国 (Brunei Darussalam)", areaCode: "673" },
        { name: "保加利亚 (Bulgaria)", areaCode: "359" },
        { name: "布基纳法索 (Burkina Faso)", areaCode: "226" },
        { name: "布隆迪 (Burundi)", areaCode: "257" },
        { name: "柬埔寨 (Cambodia)", areaCode: "855" },
        { name: "喀麦隆 (Cameroon)", areaCode: "237" },
        { name: "佛得角 (Cape Verde)", areaCode: "238" },
        { name: "开曼群岛 (Cayman Islands)", areaCode: "1345" },
        { name: "中非共和国 (Central African Republic)", areaCode: "236" },
        { name: "乍得 (Chad)", areaCode: "235" },
        { name: "智利 (Chile)", areaCode: "56" },
        { name: "圣延岛 (Christmas Island)", areaCode: "61" },
        { name: "科科斯群岛 (Cocos (Keeling) Islands)", areaCode: "61" },
        { name: "哥伦比亚(Colombia)", areaCode: "57" },
        { name: "科摩罗 (Comoros)", areaCode: "269" },
        { name: "刚果 (Congo)", areaCode: "242" },
        {
          name: "刚果民主共和国(Congo,The Democratic Republic Of The)",
          areaCode: "243"
        },
        { name: "库克群岛 (Cook Islands)", areaCode: "682" },
        { name: "哥斯达黎加 (Costa Rica)", areaCode: "506" },
        { name: "科特迪瓦 (Cote D Ivoire)", areaCode: "225" },
        { name: "克罗地亚 (Croatia)", areaCode: "385" },
        { name: "古巴 (Cuba)", areaCode: "53" },
        { name: "塞浦路斯 (Cyprus)", areaCode: "357" },
        { name: "捷克 (Czech Republic)", areaCode: "420" },
        { name: "丹麦 (Denmark)", areaCode: "45" },
        { name: "吉布提 (Djibouti)", areaCode: "253" },
        { name: "多米尼克国 (Dominica)", areaCode: "1767" },
        { name: "多米尼加共和国 (Dominican Republic)", areaCode: "1849" },
        { name: "东帝汶 (East Timor)", areaCode: "670" },
        { name: "厄瓜多尔 (Ecuador)", areaCode: "593" },
        { name: "埃及 (Egypt)", areaCode: "20" },
        { name: "萨尔瓦多 (El Salvador)", areaCode: "503" },
        { name: "赤道几内亚 (Equatorial Guinea)", areaCode: "240" },
        { name: "爱沙尼亚 (Estonia)", areaCode: "372" },
        { name: "埃塞俄比亚 (Ethiopia)", areaCode: "251" },
        { name: "福克兰群岛(Falkland Islands (Malvinas))", areaCode: "500" },
        { name: "法罗群岛 (Faroe Islands)", areaCode: "298" },
        { name: "斐济 (Fiji)", areaCode: "679" },
        { name: "芬兰 (Finland)", areaCode: "358" },
        { name: "法国 (France)", areaCode: "33" },
        { name: "法国大都会 (France Metropolitan)", areaCode: "33" },
        { name: "法属圭亚那 (French Guiana)", areaCode: "594" },
        { name: "法属玻里尼西亚 (French Polynesia)", areaCode: "689" },
        { name: "加蓬 (Gabon)", areaCode: "241" },
        { name: "冈比亚 (Gambia)", areaCode: "220" },
        { name: "格鲁吉亚 (Georgia)", areaCode: "995" },
        { name: "德国 (Germany)", areaCode: "49" },
        { name: "加纳 (Ghana)", areaCode: "233" },
        { name: "直布罗陀 (Gibraltar)", areaCode: "350" },
        { name: "希腊 (Greece)", areaCode: "30" },
        { name: "格陵兰 (Greenland)", areaCode: "45" },
        { name: "格林纳达 (Grenada)", areaCode: "1473" },
        { name: "瓜德罗普岛 (Guadeloupe)", areaCode: "590" },
        { name: "关岛 (Guam)", areaCode: "1671" },
        { name: "危地马拉 (Guatemala)", areaCode: "502" },
        { name: "几内亚 (Guinea)", areaCode: "224" },
        { name: "几内亚比绍 (Guinea-Bissau)", areaCode: "245" },
        { name: "圭亚那 (Guyana)", areaCode: "592" },
        { name: "海地 (Haiti)", areaCode: "509" },
        { name: "洪都拉斯 (Honduras)", areaCode: "504" },
        { name: "匈牙利 (Hungary)", areaCode: "36" },
        { name: "冰岛 (Iceland)", areaCode: "354" },
        { name: "印度 (India)", areaCode: "91" },
        { name: "印度尼西亚 (Indonesia)", areaCode: "62" },
        { name: "伊朗 (Iran (Islamic Republic of))", areaCode: "98" },
        { name: "伊拉克 (Iraq)", areaCode: "964" },
        { name: "爱尔兰 (Ireland)", areaCode: "353" },
        { name: "以色列 (Israel)", areaCode: "972" },
        { name: "意大利 (Italy)", areaCode: "39" },
        { name: "牙买加 (Jamaica)", areaCode: "1876" },
        { name: "约旦 (Jordan)", areaCode: "962" },
        { name: "哈萨克 (Kazakhstan)", areaCode: "7" },
        { name: "肯尼亚 (Kenya)", areaCode: "254" },
        { name: "科威特 (Kuwait)", areaCode: "965" },
        { name: "吉尔吉斯 (Kyrgyzstan)", areaCode: "996" },
        { name: "拉脱维亚 (Latvia)", areaCode: "371" },
        { name: "黎巴嫩 (Lebanon)", areaCode: "961" },
        { name: "莱索托 (Lesotho)", areaCode: "266" },
        { name: "利比里亚 (Liberia)", areaCode: "231" },
        { name: "利比亚 (Libyan Arab Jamahiriya)", areaCode: "218" },
        { name: "列支敦士登 (Liechtenstein)", areaCode: "423" },
        { name: "立陶宛 (Lithuania)", areaCode: "370" },
        { name: "卢森堡 (Luxembourg)", areaCode: "352" },
        { name: "马达加斯加 (Madagascar)", areaCode: "261" },
        { name: "马拉维 (Malawi)", areaCode: "265" },
        { name: "马来西亚 (Malaysia)", areaCode: "60" },
        { name: "马尔代夫 (Maldives)", areaCode: "960" },
        { name: "马里 (Mali)", areaCode: "223" },
        { name: "马尔他 (Malta)", areaCode: "356" },
        { name: "马提尼克岛 (Martinique)", areaCode: "596" },
        { name: "毛里塔尼亚 (Mauritania)", areaCode: "222" },
        { name: "毛里求斯(Mauritius)", areaCode: "230" },
        { name: "马约特 (Mayotte)", areaCode: "262" },
        { name: "墨西哥 (Mexico)", areaCode: "52" },
        { name: "密克罗尼西亚 (Micronesia)", areaCode: "691" },
        { name: "摩尔多瓦 (Moldova)", areaCode: "373" },
        { name: "摩纳哥 (Monaco)", areaCode: "377" },
        { name: "外蒙古 (Mongolia)", areaCode: "976" },
        { name: "黑山共和国 (Montenegro)", areaCode: "382" },
        { name: "蒙特塞拉特 (Montserrat)", areaCode: "1664" },
        { name: "摩洛哥 (Morocco)", areaCode: "212" },
        { name: "莫桑比克 (Mozambique)", areaCode: "258" },
        { name: "缅甸 (Myanmar)", areaCode: "95" },
        { name: "那米比亚 (Namibia)", areaCode: "264" },
        { name: "瑙鲁 (Nauru)", areaCode: "674" },
        { name: "尼泊尔 (Nepal)", areaCode: "977" },
        { name: "荷兰 (Netherlands)", areaCode: "31" },
        { name: "荷兰安的列斯群岛 (Netherlands Antilles)", areaCode: "599" },
        { name: "新喀里多尼亚 (New Caledonia)", areaCode: "687" },
        { name: "新西兰 (New Zealand)", areaCode: "64" },
        { name: "尼加拉瓜 (Nicaragua)", areaCode: "505" },
        { name: "尼日尔 (Niger)", areaCode: "227" },
        { name: "尼日利亚 (Nigeria)", areaCode: "234" },
        { name: "诺福克岛 (Norfolk Island)", areaCode: "6723" },
        { name: "朝鲜 (North Korea)", areaCode: "850" },
        { name: "北马里亚纳群岛 (Northern Mariana Islands)", areaCode: "1670" },
        { name: "挪威 (Norway)", areaCode: "47" },
        { name: "阿曼 (Oman)", areaCode: "968" },
        { name: "巴基斯坦 (Pakistan)", areaCode: "92" },
        { name: "帛琉 (Palau)", areaCode: "680" },
        { name: "巴勒斯坦 (Palestine)", areaCode: "970" },
        { name: "巴拿马 (Panama)", areaCode: "507" },
        { name: "巴布亚新几内亚 (Papua New Guinea)", areaCode: "675" },
        { name: "巴拉圭 (Paraguay)", areaCode: "595" },
        { name: "秘鲁 (Peru)", areaCode: "51" },
        { name: "菲律宾共和国 (Philippines)", areaCode: "63" },
        { name: "皮特凯恩岛 (Pitcairn)", areaCode: "64" },
        { name: "波兰 (Poland)", areaCode: "48" },
        { name: "葡萄牙 (Portugal)", areaCode: "351" },
        { name: "波多黎各 (Puerto Rico)", areaCode: "1787" },
        { name: "卡塔尔 (Qatar)", areaCode: "974" },
        { name: "留尼汪岛 (Reunion)", areaCode: "262" },
        { name: "罗马尼亚 (Romania)", areaCode: "40" },
        { name: "俄罗斯联邦 (Russian Federation)", areaCode: "7" },
        { name: "卢旺达 (Rwanda)", areaCode: "250" },
        { name: "美属萨摩亚 (Samoa)", areaCode: "685" },
        { name: "圣马力诺共和国 (San Marino)", areaCode: "378" },
        { name: "沙特阿拉伯 (Saudi Arabia)", areaCode: "966" },
        { name: "塞内加尔 (Senegal)", areaCode: "221" },
        { name: "塞尔维亚共和国 (Serbia)", areaCode: "381" },
        { name: "塞舌尔 (Seychelles)", areaCode: "248" },
        { name: "塞拉利昂 (Sierra Leone)", areaCode: "232" },
        { name: "新加坡 (Singapore)", areaCode: "65" },
        { name: "斯洛伐克 (Slovakia (Slovak Republic))", areaCode: "421" },
        { name: "斯洛文尼亚 (Slovenia)", areaCode: "386" },
        { name: "索罗门群岛 (Solomon Islands)", areaCode: "677" },
        { name: "索马里 (Somalia)", areaCode: "252" },
        { name: "南非 (South Africa)", areaCode: "27" },
        { name: "西班牙 (Spain)", areaCode: "34" },
        { name: "斯里兰卡 (Sri Lanka)", areaCode: "94" },
        { name: "苏丹 (Sudan)", areaCode: "249" },
        { name: "苏里南 (Suriname)", areaCode: "597" },
        { name: "斯威士兰 (Swaziland)", areaCode: "268" },
        { name: "瑞典 (Sweden)", areaCode: "46" },
        { name: "瑞士 (Switzerland)", areaCode: "41" },
        { name: "叙利亚 (Syrian Arab Republic)", areaCode: "963" },
        { name: "塔吉克 (Tajikistan)", areaCode: "992" },
        { name: "坦桑尼亚 (Tanzania)", areaCode: "255" },
        { name: "泰国 (Thailand)", areaCode: "66" },
        { name: "多哥 (Togo)", areaCode: "228" },
        { name: "汤加 (Tonga)", areaCode: "676" },
        { name: "特立尼达和多巴哥 (Trinidad and Tobago)", areaCode: "1868" },
        { name: "突尼斯 (Tunisia)", areaCode: "216" },
        { name: "土耳其 (Turkey)", areaCode: "90" },
        { name: "土库曼 (Turkmenistan)", areaCode: "993" },
        {
          name: "土克斯及开科斯群岛 (Turks and Caicos Islands)",
          areaCode: "1809"
        },
        { name: "乌干达 (Uganda)", areaCode: "256" },
        { name: "乌克兰 (Ukraine)", areaCode: "380" },
        { name: "阿拉伯联合酋长国 (United Arab Emirates)", areaCode: "971" },
        { name: "英国 (United Kingdom)", areaCode: "44" },
        { name: "乌拉圭 (Uruguay)", areaCode: "598" },
        { name: "乌兹别克斯坦 (Uzbekistan)", areaCode: "998" },
        { name: "瓦努阿图 (Vanuatu)", areaCode: "678" },
        { name: "梵蒂冈 (Vatican City State (Holy See))", areaCode: "39" },
        { name: "委内瑞拉 (Venezuela)", areaCode: "58" },
        { name: "越南 (Vietnam)", areaCode: "84" },
        {
          name: "维尔京群岛(英国) (Virgin Islands (British))",
          areaCode: "1284"
        },
        { name: "维尔京群岛(美国) (Virgin Islands (U.S.))", areaCode: "1340" },
        { name: "西撒哈拉 (Western Sahara)", areaCode: "685" },
        { name: "也门 (Yemen)", areaCode: "967" },
        { name: "南斯拉夫 (Yugoslavia)", areaCode: "381" },
        { name: "赞比亚 (Zambia)", areaCode: "260" },
        { name: "津巴布韦 (Zimbabwe)", areaCode: "263" },
        { name: "阿布哈兹 (the Republic of Abkhazia)", areaCode: "7" },
        { name: "南奥赛梯 (the Republic of South Ossetia)", areaCode: "7" },
        { name: "泽西岛 (Bailiwick of Jersey)", areaCode: "44" },
        { name: "老挝 (Lao People s Democratic Republic)", areaCode: "856" },
        { name: "马其顿 (The Republic of Macedonia)", areaCode: "389" },
        {
          name: "圣基茨和尼维斯(The Federation of Saint Kitts and Nevis)",
          areaCode: "1869"
        },
        { name: "圣卢西亚岛 (Santa Luzia Island)", areaCode: "1758" },
        {
          name: "圣文森特和格林纳丁斯(Saint Vincent and the Grenadines)",
          areaCode: "1784"
        },
        { name: "圣多美和普林西比 (Sao Tome and Principe)", areaCode: "239" },
        { name: "南苏丹共和国 (The Republic of South Sudan)", areaCode: "211" }
      ],
      searchVal: "", //默认输入为空
      iselct: -1
    };
  },
  computed: {
    list: function() {
      var _this = this;
      //逻辑-->根据input的value值筛选countryList中的数据
      var arrCount = []; //声明一个空数组来存放数据
      var conlenth = this.countryList.length;
      for (var i = 0; i < conlenth; i++) {
        //for循环数据中的每一项（根据name值）
        if (this.countryList[i].name.search(this.searchVal) != -1) {
          arrCount.push(this.countryList[i]);
        }
      }
      return arrCount;
    }
  },
  mounted() {},
  methods: {
    ...mapMutations(["getCountry"]),
    // 点击取消的按钮
    onCancel() {
      this.searchVal = "";
      this.$router.go(-1);
    },
    // 选择国家
    choose(index, obj) {
      this.iselct = index;
      this.getCountry(obj);
      console.log(obj);

      this.time = setTimeout(() => {
        // this.$router.go(-1);
        clearTimeout(this.time);
      }, 1000);
    },
    onSearch() {}
  }
};
</script>
<style lang="less" scoped>
.atnight {
  background: #fff;
}

.main {
  margin: 10px 20px;

  .list {
    height: 50px;
    // line-height: 40px;
    margin: 10px 0;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 1px solid #ebebeb;
  }
}
</style>