import { state } from "./state";

export const mutations = {

  changeData(state, data) {
    //data: 载荷
    //data.key: 修改数据的名称
    //data.value: 修改的数据

    state[data.key] = data.value;
  },

  // //修改商品数据
  // changeProducts(state, data) {
  //   //data: 载荷
  //   //data.type: 类型
  //   //data.value: 商品数据
  //   state.products[data.type] = data.value;
  // }

  //修改商品数据
  changeProducts(state, data) {
    let arr = data.data.data.data
    //data: 载荷
    state.products[data.index].details = arr;

  },

  // 记录点击商品列表点击时对应商品id
  shopId(state, data) {
    state.clickId = data;

    // 

  },

  // 保存购物车不同类型的商品数目
  shopCountFun(state, data) {
    state.shopCount = data;
  },






  // 保存歌曲当前播放时间
  saveCurrentTime(state, data) {
    state.currentTime = data;
  },
  // 保存播放器标签
  _saveAplayer(state, ele) {
    state._aplayer = ele;
  },
  // 保存歌曲总时长
  saveDuration(state, data) {
    state.duration = data;
    // console.log(data.split(':')[0] * 60);
    state.durationSec = parseInt(data.split(':')[0]) * 60 + parseInt(data.split(':')[1])
  },
  // 音乐馆显示 隐藏音乐推荐
  _changeShowHall(state, flag) {
    state._showHall = flag;
  },
  // 更改歌曲播放时间和标识
  changeChangeTime(state, obj) {
    if (obj.time) {
      state.timeChange = obj.time;
    }
    state.timeChangeFlag = obj.flag;
  },
  // 更改播放时间
  _changePlayTime(state, time) {
    state.timeChange = time;
  },
  // 改变playFlag播放状态
  changePlayFlag(state, flag) {
    state.playFlag = flag;
  },
  // 控制自定义进度条是否跟随播放器进度条
  progressBarFlagState(state, flag) {
    state.progressBarFlag = flag;
  },
  // 控制顶部栏 底部播放器隐藏
  controlHidden(state, flag) {
    state.hidden = flag;
  },
  // 设置当前播放的歌曲
  setNowIsPlay(state, data) {
    state.nowIsPlay = data;
  },
  // 转动状态
  changeIsRoll(state, flag) {
    state.isRoll = flag
  },
  // 更改索引
  changeIndex(state, num) {
    state.index = num;
  },
  // 是否全部播放
  setPlayAll(state, flag) {
    state.isPlayAll = flag
  },
  // 更改榜单选择项
  _changeListAcitve(state, num) {
    state._listActive = num;
  },
  // 更改榜单选择项
  __changeListAcitve(state, num) {
    state.__listActive = num;
  },
  // 更改播放器的歌曲列表
  _changeMyList(state, arr) {
    state.myList = arr;
  },
  // 保存从api获取的音乐数据
  _saveSongsByToggle(state, obj) {
    // 歌曲对象
    let song = obj.data.data.data
    // 新获取歌曲的id
    let newSongId = song.url.split('=')[1]
    state.list.some(v => {
      // 对应榜单 添加音乐数据
      if (v.title == obj.sort) {
        // // 查询是否有重复id 有重复id跳过
        // v.datas.some(item => {
        //   //  已获取、保存的歌曲的id
        //   let oldSongId = item.url.split('=')[1];
        //   // 歌曲存在 跳过添加歌曲
        //   if (oldSongId == newSongId) {
        //     return true;
        //   }
        // })

        // 查询是否有重复id 有重复id跳过
        for (let i = 0; i < v.datas.length; i++) {
          //  已获取、保存的歌曲的id
          let oldSongId = v.datas[i].url.split('=')[1];
          // 歌曲存在 跳过添加歌曲
          if (oldSongId == newSongId) {
            return true;
          }
        }
        // 添加属性
        song.collect = false,
          song.songId = newSongId;
        v.datas.push(song);
        return true;
      }
    })
    console.log(state.list);
  },
  // 改变歌曲循环模式
  _changeLoop(state, loop) {
    state._loop = loop;
  },
  // 单曲循环标志
  _changeSongCycle(state, cycle) {
    state._singleCycle = cycle;
  },
  // 播放器的初始顺序模式
  _changeOrder(state, mode) {
    state._order = mode;
  },
  // 更改音量
  _changeVolume(state, val) {
    state._volume = val;
  },
  // 更新热评
  _changeHotComments(state, arr) {
    state._hotComments = arr;
  },
  // 搜索歌曲保存数据
  _changeSearchSongs(state, arr) {
    state._searchSongs = arr;
  },
  // 更改搜索歌曲条数结果
  _changeSearchTotalItems(state, num) {
    state._searchTotalItems = num
  },
  // 当前榜单第几页 分页
  _changeCurrentPage(state, num) {
    state._currentPage = num
  },
  // 搜索歌曲分页页码
  _changeSearchCurrentPage(state, num) {
    state._searchCurrentPage = num
  },
  _changeSearchValue(state, keyword) {
    state._searchValue = keyword
  }
}