class OutJs {
    // 歌词处理
    disposeLyric(lrc) {
        console.log(lrc);
        if (!lrc) {
            console.log("无歌词");
            this.lrc = [[0.0, "暂无歌词", 0]];
            return;
        }
        // console.log(lrc);
        // 歌词数组
        let lrcArr = lrc.split("\n");
        let arr = [];
        // console.log(lrcArr);
        // // 以[]开头结束
        // let regExp = /^\[([\s\S])*\]$/;
        // console.log(regExp.test("[1:.1]"));
        lrcArr.forEach((v) => {
            // console.log(v);
            // 排除空数组
            if (v !== "") {
                arr.push(v.split("["));
            }
        });
        // console.log(arr);
        arr.forEach((v) => {
            v.splice(0, 1);
        });

        let songLrc = [];
        arr.forEach((v) => {
            // console.log(v);
            songLrc.push(v[0].split("]"));
        });
        // console.log(songLrc);
        songLrc.forEach((v, i) => {
            // console.log(v);
            v.push(i);
            let arr = v[0].split(":");
            v[0] = arr[0] * 60 + parseFloat(arr[1]);
        });
        // console.log(songLrc);
        // console.log(lrcArr);
        // 二维数组
        return songLrc;
    }
}

export default new OutJs();