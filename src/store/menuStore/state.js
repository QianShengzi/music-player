export const state = {

  //  缓存榜单列表推荐歌曲数据
  // 榜单列表
  list: [
    {
      title: "热歌榜",
      num: 0,
      datas: [
        {
          name: "secret base~君がくれたもの~",
          songId: '1400060440',
          collect: false,
          artistsname: "Silent Siren",
          url: "http://music.163.com/song/media/outer/url?id=1400060440",
          picurl:
            "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        },
        {
          name: "OKAY",
          artistsname: "王嘉尔",
          songId: '521416228',
          collect: false,
          url: "http://music.163.com/song/media/outer/url?id=521416228",
          picurl:
            "http://p2.music.126.net/2lEKh1iJAoyiSyGFsL7z-w==/109951163072695320.jpg"
        },
        {
          name: "故梦（Cover 橙翼）",
          songId: '409654891',
          collect: true,
          artistsname: "双笙",
          url: "http://music.163.com/song/media/outer/url?id=409654891",
          picurl:
            "https://p1.music.126.net/GZJY3Iz7TacxI3pr4jvQYQ==/18007801439911769.jpg",
          lrc:
            "[00:00.196] 原唱：橙翼\n[00:00.796]填词：腾云驾雾琉璃仙\n[00:00.796] 曲/编：千年破晓\n[00:01.291] 翻唱：双笙\n[00:01.14]旧忆就像一扇窗\n[00:06.30]推开了就再难合上\n[00:13.14]谁踩过枯枝轻响\n[00:16.79]萤火绘着画屏香\n[00:26.16]为谁拢一袖芬芳\n[00:31.68]红叶的信笺情意绵长\n[00:37.96]他说就这样去流浪\n[00:42.58]到美丽的地方\n[00:49.74]谁的歌声轻轻、轻轻唱\n[00:57.45]谁的泪水静静淌\n[01:03.85]那些年华都付作过往\n[01:10.21]他们偎依着彼此说好要面对风浪\n[01:16.96]又是一地枯黄\n[01:22.43]枫叶红了满面秋霜\n[01:28.94]这场故梦里\n[01:31.94]人生如戏唱\n[01:34.95]还有谁登场\n[02:31.76]昏黄烛火轻摇晃\n[02:38.20]大红盖头下谁彷徨\n[02:44.44]流泪的花和荣喜糖\n[02:49.30]静静放在一旁\n[02:56.30]回忆像默片播放\n[03:03.21]刻下一寸一寸旧时光\n[03:09.54]他说就这样去流浪\n[03:14.17]到美丽的地方\n[03:22.57]谁的歌声轻轻、轻轻唱\n[03:28.85]谁的泪水静静淌\n[03:35.50]愿化一双鸟儿去飞翔\n[03:41.35]任身后哭号嘶喊着也追不上\n[03:47.74]又一年七月晚风凉\n[03:54.10]斜阳渐矮只影长\n[04:00.55]这场故梦里\n[04:03.56]孤桨声远荡\n[04:06.64]去他乡 遗忘"
        },
        {
          name: "你到底爱谁",
          songId: '37778156',
          collect: false,
          url: "http://music.163.com/song/media/outer/url?id=37778156",
          picurl:
            "http://p2.music.126.net/aYBIGkPvB3t3y6GnFs03Ng==/16645506533505569.jpg",
          artistsname: "可儿"
        },
        {
          artistsname: "柏松",
          songId: '1363948882',
          collect: false,
          name: "世间美好与你环环相扣",
          picurl: "http://p2.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1363948882"
        },
        {
          artistsname: "尚士达",
          songId: '1383876635',
          collect: false,
          name: "迷人的危险",
          picurl: "http://p1.music.126.net/aryxbULAHjqP5MPgUdg9gA==/109951164292787462.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1383876635"
        },
        {
          artistsname: "梁爽凉爽",
          collect: false,
          name: "根本你不懂得爱我（女生版）",
          picurl: "http://p1.music.126.net/TDUNUdyiRpZ7plXm1aca0w==/109951164276645213.jpg",
          songId: "1382985712",
          url: "http://music.163.com/song/media/outer/url?id=1382985712",
        },
        {
          artistsname: "阿冗",
          collect: false,
          name: "太多",
          picurl: "http://p1.music.126.net/y_aPHj1dNMylbPxGLrJi5Q==/109951163835342783.jpg",
          songId: "1343756008",
          url: "http://music.163.com/song/media/outer/url?id=1343756008"
        },
        {
          artistsname: "IU",
          collect: false,
          name: "Blueming",
          picurl: "http://p2.music.126.net/2pF-tKT79yQLWfOnm49-hA==/109951164496579083.jpg",
          songId: "1404511131",
          url: "http://music.163.com/song/media/outer/url?id=1404511131"
        },
        {
          artistsname: "Vicetone",
          collect: false,
          name: "Walk Thru Fire",
          picurl: "http://p2.music.126.net/SZFvPTbtIWaO2Dz1ytOeAw==/109951163433090567.jpg",
          songId: "1297498908",
          url: "http://music.163.com/song/media/outer/url?id=1297498908"
        },
        {
          artistsname: "en",
          collect: false,
          name: "嚣张",
          picurl: "http://p1.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg",
          songId: "1382596189",
          url: "http://music.163.com/song/media/outer/url?id=1382596189"
        },
        {
          artistsname: "王巨星",
          collect: false,
          name: "还是分开",
          picurl: "http://p1.music.126.net/GW0Zyx95jg2HiWBLO-IAHw==/109951164938630685.jpg",
          songId: "1443143188",
          url: "http://music.163.com/song/media/outer/url?id=1443143188"
        },
        {
          artistsname: "一支榴莲",
          collect: false,
          name: "海底",
          picurl: "http://p2.music.126.net/swcW0FE-__ihfjnJqU22Qg==/109951164696345792.jpg",
          songId: "1426649237",
          url: "http://music.163.com/song/media/outer/url?id=1426649237"
        },
        {
          artistsname: "凯瑟喵",
          collect: false,
          name: "撒野",
          picurl: "http://p1.music.126.net/TKYYGZTSPhJ4STGX5mzahQ==/109951164854563088.jpg",
          songId: "483937795",
          url: "http://music.163.com/song/media/outer/url?id=483937795"

        },
        {
          artistsname: "郭顶",
          collect: false,
          name: "水星记",
          picurl: "http://p2.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg",
          songId: "441491828",
          url: "http://music.163.com/song/media/outer/url?id=441491828"
        }
      ]
    },
    {
      title: "新歌榜",
      num: 1,
      datas: [
        {
          name: "1",
          songId: '1400060440',
          collect: false,
          url: "http://music.163.com/song/media/outer/url?id=1400060440",
          picurl:
            "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
          artistsname: "Yee"
        },
        {
          artistsname: "刘大壮",
          name: "吉他不及她",
          songId: '1459659740',
          collect: false,
          picurl: "http://p1.music.126.net/gtdHii1EqRpCoXrJU8Mh9Q==/109951165104467973.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1459659740"
        },
        {
          artistsname: "李姿逸RizRea",
          name: "何御",
          songId: '1459485088',
          collect: false,
          picurl: "http://p1.music.126.net/vPua7u8AD3gNSIOYKTgbqw==/109951165102719481.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1459485088",
          lrc: "[00:02.460]编曲Production: 李晓璇@DX Music\n[00:06.576]\n[00:20.591]长鞭策马 是谁人？\n[00:28.930]尝淡这春秋 与生杀\n[00:36.592]任谁独霸 时间纷杂 天涯\n[00:45.748]一壶淡茶 恩怨作罢\n\n[00:52.541]唯见踌躇满天下\n\n[00:54.972]世人难辩真假\n[00:58.484]像黑夜中 被遮蔽的 迷途里幻化\n[01:03.471]真相扑朔和迷离\n[01:07.247]在黑暗中 肆意伪装\n\n[01:10.915]他正追逐着 永恒真相\n[01:13.422]他背负着 天下兴亡\n[01:15.332]卷轴上 难以镌刻 的故事\n[01:18.583]（他正 追逐着 挥手一方）\n\n[01:19.666]挥手一方 沧海云间\n[01:21.950]望瑟天边 高楼此夜\n[01:24.385]风万里 冲破险峻 终有人还\n\n[01:28.706]乘风归去 浪淘尽\n[01:38.548]江山似入画 故人惜\n[01:45.134]（让世人难辩真假）\n[01:47.243]任谁独霸 时间纷杂 天涯\n[01:53.020]（让世人难辩真假）\n[01:55.476]一壶淡茶 恩怨作罢\n\n[02:01.736]唯见踌躇满天下\n\n[02:04.455]世人难辩真假\n[02:08.113]像黑夜中 被遮蔽的 迷途里幻化\n[02:13.032]真相扑朔和迷离\n[02:16.914]在黑暗中 肆意伪装\n\n[02:20.919]他正追逐着 永恒真相\n[02:23.153]他背负着 天下兴亡\n[02:25.234]卷轴上 难以镌刻 的故事\n[02:28.636]（他正 追逐着 挥手一方）\n\n[02:30.134]挥手一方 沧海云间\n[02:31.736]望瑟天边 高楼此夜\n[02:33.995]风万里 冲破险峻 终有人还\n[02:37.936]（他正 追逐着 挥手一方）\n\n[02:39.611]南望朱雀 北看世间\n[02:43.343]过几重山 叹此心到处悠然\n[02:47.868]尝一世间 喜忧参半\n[02:52.180]逐远归来\n\n[02:55.610]他正追逐着 永恒真相\n[02:57.796]他背负着 天下兴亡\n[03:00.114]卷轴上 难以镌刻 的故事\n[03:03.319]（他正 追逐着 挥手一方）\n\n[03:04.544]挥手一方 沧海云间\n[03:06.616]望瑟天边 高楼此夜\n[03:08.803]风万里 冲破险峻 终有人还\n[03:12.401]（他正 追逐着 挥手一方）\n\n[03:13.682]他追逐着 永恒真相\n[03:15.360]他背负着 天下兴亡\n[03:17.518]卷轴上 难以镌刻 的故事\n[03:20.920]（他正 追逐着 挥手一方）\n\n[03:22.003]挥手一方 沧海云间\n[03:24.104]望瑟天边 高楼此夜\n[03:26.318]风万里 冲破险峻 终有人还\n[03:29.982]（他正 追逐着 挥手一方）\n[03:33.280]\n[03:34.064]制作人Producer: 袁大巍@DX Music\n[03:34.817]和声演唱/和声编写Background Vocals: 李晓璇@DX Music\n[03:35.598]录音室Recording Studio: @DX Music \n[03:36.316]混音工程师Mixing: 吴澎@DX Music \n[03:37.003]母带工程师Mastering: Scott Yao@DX Music \n[03:37.636]OP/SP: 北京卓颜巍声文化传播有限公司\n[03:38.636]封面设计：余溪瑶@DX Music"
        },
        {
          artistsname: "BTS (防弹少年团)",
          name: "Your eyes tell",
          songId: '1461433170',
          collect: false,
          picurl: "http://p2.music.126.net/8PzSV5tf_E4a2OG27hYcew==/109951165123503324.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1461433170"
        },
        {
          artistsname: "隔壁老樊",
          name: "少年不识愁滋味",
          songId: '1461381929',
          collect: false,
          picurl: "http://p1.music.126.net/4Hh1Fl5W1PB5DG9yp5zGJw==/109951165123131721.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1461381929",
          lrc: '[00:05.66]制作人：段小林\n[00:06.86]编曲：黄超\n[00:08.31]吉他：黄超\n[00:09.41]鼓手：郝稷伦\n[00:10.84]贝斯：韩阳\n[00:12.57]古筝：丁雪儿\n[00:14.00]录音：杨惠琳\n[00:15.19]混音：段小林\n[00:16.56]封面：橙橙\n[00:18.03]制作统筹：张洪余\n[00:20.00]录音棚：好听音乐录音棚\n[00:21.77]出品：北京泊柏宇希文化有限公司\n[00:23.67]\n[00:33.14]他们和我说的 我却没听过\n[00:41.22]他们叫我看的 我却也没看过\n[00:49.18]活在自己的世界 从未醒来\n[00:57.43]对自己的人生 我看不清楚\n[01:03.86]\n[01:05.80]少年不识愁滋味 爱上层楼\n[01:13.86]爱上层楼 为赋新词强说愁\n[01:22.16]而今识尽愁滋味 欲说还休\n[01:30.12]欲说还休 却道天凉好个秋\n[01:38.29]\n[01:56.38]他们和我说的 我却没听过\n[02:04.24]他们叫我看的 我却也没看过\n[02:12.07]活在自己的世界 从未醒来\n[02:20.51]对自己的人生 我看不清楚\n[02:27.60]\n[02:29.16]如今世间万物复苏追寻着自由\n[02:36.24]我也跟随其中 任思绪随波逐流\n[02:45.04]坦然面对自己的内心 淡然所有\n[02:52.79]抚琴唱自己 唱到沉溺其中\n[03:00.22]\n[03:01.75]少年不识愁滋味 爱上层楼\n[03:10.10]爱上层楼 为赋新词强说愁\n[03:18.02]而今识尽愁滋味 欲说还休\n[03:26.48]欲说还休 却道天凉好个秋\n[03:35.34]'
        },
        {
          title: "",
          artistsname: "Logic",
          src: "",
          picurl: "http://p2.music.126.net/bW7E1B3uTqmdgPQfdNXBKw==/109951165165207808.jpg",
          name: "No Pressure (intro)",
          url: "http://music.163.com/song/media/outer/url?id=1465261218",
          lrc: "",
          songId: "1465261218",
          collect: false
        },
        {
          title: "",
          artistsname: "李荣浩",
          src: "",
          picurl: "http://p2.music.126.net/LJmqN6twFqHp2BGsTp1yLg==/109951165118145287.jpg",
          name: "要我怎么办",
          url: "http://music.163.com/song/media/outer/url?id=1460930236",
          lrc: "",
          songId: "1460930236",
          collect: false
        },
        {
          title: "",
          artistsname: "Panta.Q",
          src: "",
          picurl: "http://p1.music.126.net/MsAic6lxul4qxochMej95Q==/109951165112227142.jpg",
          name: "世界不小心生下我的普通",
          url: "http://music.163.com/song/media/outer/url?id=1459686430",
          lrc: "",
          songId: "1459686430",
          collect: false
        },
        {
          title: "",
          artistsname: "卢卢快闭嘴",
          src: "",
          picurl: "http://p2.music.126.net/yZipSHp6XCUqy9l2VybCTQ==/109951165115661793.jpg",
          name: "爱，存在",
          url: "http://music.163.com/song/media/outer/url?id=1460682363",
          lrc: "",
          songId: "1460682363",
          collect: false
        },
        {
          title: "",
          artistsname: "MaxRiven",
          src: "",
          picurl: "http://p1.music.126.net/qffIYTDrNfef0D49tOOlyA==/109951165075039745.jpg",
          name: "Astronomia (Original Mix)",
          url: "http://music.163.com/song/media/outer/url?id=1456782294",
          lrc: "",
          songId: "1456782294",
          collect: false
        },
        {
          title: "",
          artistsname: "伍嘉成",
          src: "",
          picurl: "http://p2.music.126.net/_At900NN5iPFG1NsbBuhLA==/109951165165859637.jpg",
          name: "我们的纪念",
          url: "http://music.163.com/song/media/outer/url?id=1465322134",
          lrc: "",
          songId: "1465322134",
          collect: false
        },
        {
          title: "",
          artistsname: "GAI周延",
          src: "",
          picurl: "http://p1.music.126.net/fx20g6f-oy_pkd8IdrM0dA==/109951165155553988.jpg",
          name: "Open The Night (The Chainsmokers x 乐堡开躁 Official Mix)",
          url: "http://music.163.com/song/media/outer/url?id=1464287700",
          lrc: "",
          songId: "1464287700",
          collect: false
        },
        {
          title: "",
          artistsname: "三块木头",
          src: "",
          picurl: "http://p2.music.126.net/nBWZ9I3_dZuDCBZGtfpfuQ==/109951165156853318.jpg",
          name: "殉情的抹香鲸",
          url: "http://music.163.com/song/media/outer/url?id=1460706496",
          lrc: "",
          songId: "1460706496",
          collect: false
        },
        {
          title: "",
          artistsname: "BLACKPINK",
          src: "",
          picurl: "http://p2.music.126.net/aMSW1WMQsV_gKnB9k1rvBQ==/109951165114780620.jpg",
          name: "PLAYING WITH FIRE",
          url: "http://music.163.com/song/media/outer/url?id=1460572579",
          lrc: "",
          songId: "1460572579",
          collect: false
        },
        {
          title: "",
          artistsname: "BigYear大年",
          src: "",
          picurl: "http://p1.music.126.net/MqWe8F-6jfRamYMnXdpDYA==/109951165125555939.jpg",
          name: "城市日记",
          url: "http://music.163.com/song/media/outer/url?id=1460874108",
          lrc: "",
          songId: "1460874108",
          collect: false
        },
        {
          title: "",
          artistsname: "周思涵",
          src: "",
          picurl: "http://p2.music.126.net/bfhBpR9lvO-ZxPNXZBPjfg==/109951165160209942.jpg",
          name: "伙伴",
          url: "http://music.163.com/song/media/outer/url?id=1464827235",
          lrc: "",
          songId: "1464827235",
          collect: false
        },
        {
          title: "",
          artistsname: "Jeremy Zucker",
          src: "",
          picurl: "http://p1.music.126.net/SG5fs7mmX4XQxiBtoiJjtg==/109951165167732945.jpg",
          name: "supercuts",
          url: "http://music.163.com/song/media/outer/url?id=1465222233",
          lrc: "",
          songId: "1465222233",
          collect: false
        },
        {
          title: "",
          artistsname: "刘宪华 (Henry)",
          src: "",
          picurl: "http://p1.music.126.net/qrKJqrD9mUFPYecdE7VlXQ==/109951165136871803.jpg",
          name: "别离开",
          url: "http://music.163.com/song/media/outer/url?id=1462631921",
          lrc: "",
          songId: "1462631921",
          collect: false
        },
        {
          title: "",
          artistsname: "Taylor Swift",
          src: "",
          picurl: "http://p2.music.126.net/1-WYcjngQv-gd7X0o-NuFA==/109951165163258166.jpg",
          name: "exile",
          url: "http://music.163.com/song/media/outer/url?id=1465114465",
          lrc: "",
          songId: "1465114465",
          collect: false
        },
        {
          title: "",
          artistsname: "Taylor Swift",
          src: "",
          picurl: "http://p2.music.126.net/1-WYcjngQv-gd7X0o-NuFA==/109951165163258166.jpg",
          name: "the 1",
          url: "http://music.163.com/song/media/outer/url?id=1465111714",
          lrc: "",
          songId: "1465111714",
          collect: false
        },
        {
          title: "",
          artistsname: "旺仔小乔",
          src: "",
          picurl: "http://p2.music.126.net/KoYz7q3oYAdFaXC37WBb8Q==/109951165146231053.jpg",
          name: "爱，存在",
          url: "http://music.163.com/song/media/outer/url?id=1456286877",
          lrc: "",
          songId: "1456286877",
          collect: false
        },
        {
          title: "",
          artistsname: "简弘亦",
          src: "",
          picurl: "http://p1.music.126.net/iCcG7sDXV7zEB5AAUyYV8Q==/109951164975755407.jpg",
          name: "我们的纪念",
          url: "http://music.163.com/song/media/outer/url?id=1447330704",
          lrc: "",
          songId: "1447330704",
          collect: false
        },
        {
          title: "",
          artistsname: "画风风",
          src: "",
          picurl: "http://p2.music.126.net/8Wm5PYuBYPenU8-Gz8PBKg==/109951165162947072.jpg",
          name: "Swagger (画风风 Bootleg)",
          url: "http://music.163.com/song/media/outer/url?id=1465106723",
          lrc: "",
          songId: "1465106723",
          collect: false
        },
        {
          title: "",
          artistsname: "某幻君",
          src: "",
          picurl: "http://p1.music.126.net/zZorwU-gcIYVJCz73Gb1vA==/109951165123412138.jpg",
          name: "考神",
          url: "http://music.163.com/song/media/outer/url?id=1461430536",
          lrc: "",
          songId: "1461430536",
          collect: false
        }
      ]
    },
    {
      title: "飙升榜",
      num: 2,
      datas: [
        {
          artistsname: "Johnny Orlando",
          name: "See You",
          songId: '1440587485',
          collect: false,
          picurl: "http://p1.music.126.net/mQAxJXZBb1vBPtj7a79NqA==/109951164905637216.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1440587485"
        },
        {
          "name": "Love Is Gone (feat. Dylan Matthew) (Acoustic)",
          "url": "http://music.163.com/song/media/outer/url?id=1401671455",
          "picurl": "http://p1.music.126.net/E5JYsO4DR4_Y-CdidpUVCw==/109951164473460772.jpg",
          "artistsname": "SLANDER",
          "collect": false,
          "songId": "1401671455"
        },
        {
          "name": "dual existence<TVsize>",
          "url": "http://music.163.com/song/media/outer/url?id=1464482956",
          "picurl": "http://p1.music.126.net/2-OqZSddcFPYK_4Ws9mJvw==/109951165157066477.jpg",
          "artistsname": "fripSide",
          "collect": false,
          "songId": "1464482956"
        },
        {
          "name": "Monsters (Live)",
          "url": "http://music.163.com/song/media/outer/url?id=1428598981",
          "picurl": "http://p1.music.126.net/8CBeG0BF2C0dPiA1FDflGQ==/109951164773621591.jpg",
          "artistsname": "周深",
          "collect": false,
          "songId": "1428598981"
        },
        {
          "name": "想想念念",
          "url": "http://music.163.com/song/media/outer/url?id=1432544572",
          "picurl": "http://p1.music.126.net/BT_H-CPY2CuJPnhaFt8lDw==/109951164821632506.jpg",
          "artistsname": "皮卡丘多多",
          "collect": false,
          "songId": "1432544572"
        },
        {
          "name": "午后的咖啡",
          "url": "http://music.163.com/song/media/outer/url?id=1458770100",
          "picurl": "http://p2.music.126.net/ZnlG5d9U3vMdzLGtU6F_oQ==/109951165096278426.jpg",
          "artistsname": "蓝的够戗",
          "collect": false,
          "songId": "1458770100"
        },
        {
          "name": "그래요 나를 잊어요",
          "url": "http://music.163.com/song/media/outer/url?id=1464975639",
          "picurl": "http://p1.music.126.net/46maINYlTnnF3jWj05y2TA==/109951165161801383.jpg",
          "artistsname": "Standing Egg",
          "collect": false,
          "songId": "1464975639"
        }
      ]
    },
    {
      title: "抖音榜",
      num: 3,
      datas: [
        {
          artistsname: "左立",
          name: "在这个冬天来临之前",
          songId: '1400449836',
          collect: false,
          picurl: "http://p2.music.126.net/8GzTIohcoLugcw8bZXfVsA==/109951164461569096.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1400449836"
        }
      ]
    },
    {
      title: "电音榜",
      num: 4,
      datas: [
        {
          artistsname: "ThimLife",
          name: "Home (Blaze U Remix)",
          songId: '448317566',
          collect: false,
          picurl: "http://p1.music.126.net/9Nub3O5wm7Vs22W84BhJnQ==/18646617697109289.jpg",
          url: "http://music.163.com/song/media/outer/url?id=448317566"
        },
        {
          artistsname: "Vicetone",
          name: "Way Back",
          songId: '543987451',
          collect: false,
          picurl: "http://p1.music.126.net/sOfRLrOCx-THntvvnlimCg==/109951163311532318.jpg",
          url: "http://music.163.com/song/media/outer/url?id=543987451"
        },
        {
          artistsname: "Danny Avila",
          name: "End Of The Night",
          songId: '1324159296',
          collect: false,
          picurl: "http://p1.music.126.net/JgypqYl8PkTOwtIallrpxQ==/109951163656707857.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1324159296"
        },
        {
          artistsname: "The Glitch Mob",
          name: "RISE",
          songId: '1313107065',
          collect: false,
          picurl: "http://p2.music.126.net/XLulJwVbfowNQhATCt809g==/109951163573081067.jpg",
          url: "http://music.163.com/song/media/outer/url?id=1313107065",
        }
      ]
    }
  ],
  // 播放器的列表
  myList: [
    // {
    //   name: "secret base~君がくれたもの~",
    //   artist: "Silent Siren",
    //   url: "http://music.163.com/song/media/outer/url?id=1400060440",
    //   cover:
    //     "http://p2.music.126.net/CKBQur5mPK-wwsYHz-kqEw==/109951164457988948.jpg",
    //   lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
    // },
    // {
    //   name: "OKAY",
    //   artist: "王嘉尔",
    //   url: "http://music.163.com/song/media/outer/url?id=521416228",
    //   cover:
    //     "http://p2.music.126.net/2lEKh1iJAoyiSyGFsL7z-w==/109951163072695320.jpg"
    // },
    // {
    //   name: "故梦（Cover 橙翼）",
    //   artist: "双笙",
    //   url: "http://music.163.com/song/media/outer/url?id=409654891",
    //   cover:
    //     "https://p1.music.126.net/GZJY3Iz7TacxI3pr4jvQYQ==/18007801439911769.jpg",
    //   lrc:
    //     "[00:00.196] 原唱：橙翼\n[00:00.796]填词：腾云驾雾琉璃仙\n[00:00.796] 曲/编：千年破晓\n[00:01.291] 翻唱：双笙\n[00:01.14]旧忆就像一扇窗\n[00:06.30]推开了就再难合上\n[00:13.14]谁踩过枯枝轻响\n[00:16.79]萤火绘着画屏香\n[00:26.16]为谁拢一袖芬芳\n[00:31.68]红叶的信笺情意绵长\n[00:37.96]他说就这样去流浪\n[00:42.58]到美丽的地方\n[00:49.74]谁的歌声轻轻、轻轻唱\n[00:57.45]谁的泪水静静淌\n[01:03.85]那些年华都付作过往\n[01:10.21]他们偎依着彼此说好要面对风浪\n[01:16.96]又是一地枯黄\n[01:22.43]枫叶红了满面秋霜\n[01:28.94]这场故梦里\n[01:31.94]人生如戏唱\n[01:34.95]还有谁登场\n[02:31.76]昏黄烛火轻摇晃\n[02:38.20]大红盖头下谁彷徨\n[02:44.44]流泪的花和荣喜糖\n[02:49.30]静静放在一旁\n[02:56.30]回忆像默片播放\n[03:03.21]刻下一寸一寸旧时光\n[03:09.54]他说就这样去流浪\n[03:14.17]到美丽的地方\n[03:22.57]谁的歌声轻轻、轻轻唱\n[03:28.85]谁的泪水静静淌\n[03:35.50]愿化一双鸟儿去飞翔\n[03:41.35]任身后哭号嘶喊着也追不上\n[03:47.74]又一年七月晚风凉\n[03:54.10]斜阳渐矮只影长\n[04:00.55]这场故梦里\n[04:03.56]孤桨声远荡\n[04:06.64]去他乡 遗忘"
    // },
    // {
    //   name: "你到底爱谁",
    //   url: "http://music.163.com/song/media/outer/url?id=37778156",
    //   cover:
    //     "http://p2.music.126.net/aYBIGkPvB3t3y6GnFs03Ng==/16645506533505569.jpg",
    //   artist: "可儿"
    // }
  ],
  // 保存播放器标签
  _aplayer: "",
  // // 搜索框内容
  // searchValue: "",
  // 搜索歌曲的数据
  _searchSongs: [],
  // 搜索歌曲保存的总条数数据
  _searchTotalItems: 1,
  // 对应榜单歌曲分页页码
  _currentPage: 1,
  // 搜索关键词
  _searchValue: '',
  // 搜索歌曲分页页码
  _searchCurrentPage: 1,
  // 音乐馆显示 隐藏音乐推荐
  _showHall: true,
  // 榜单索引
  _listActive: 0,
  // 榜单索引2 用于解决进入播放界面返回后 分页器bug
  __listActive: 0,
  // 当前播放
  nowIsPlay: [],
  // 当前播放状态 true为播放
  playFlag: false,
  // 当前播放时间 秒数
  currentTime: '',
  // 歌曲总时长 分钟
  duration: '00:00',
  // 歌曲总时长 秒数
  durationSec: '',
  // 改变歌曲播放时间
  timeChange: '',
  // 改变歌曲播放时间标识 true为可以更改
  timeChangeFlag: false,
  // 控制自定义进度条是否跟随播放器进度条变化
  progressBarFlag: true,
  // 控制顶部栏，底部播放器隐藏
  hidden: false,
  // 添加/删除转动
  isRoll: true,
  // 播放歌曲的索引
  index: -1,
  // 是否全部播放
  isPlayAll: false,
  // 播放模式 值可以是 'one'（单曲循环）'all'（列表循环）或者 'none'（不循环）
  _loop: "none",
  // 循环模式标志
  _singleCycle: 'repeat-one',
  // 设置是否随机播放
  // list  random 
  _order: 'list',
  // 音量
  _volume: 1,
  // 热评列表
  _hotComments: []
}