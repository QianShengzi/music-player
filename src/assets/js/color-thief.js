function myColor(src, ele) {
    let img = new Image();
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    img.src = src;
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

        console.log({ r, g, b });
        //rgb转16进制 位运算
        let color = ((r << 16) | (g << 8) | b).toString(16);
        console.log(color);
        console.log(color.length);
        // color长度不足6位 前面补0
        let str = '';
        if (color.length < 6) {
            // 计算拼接需要补的0
            for (let i = 0; i < 6 - color.length; i++) {
                str += '0';
            }
            console.log(str);
        }
        color = str + color;
        console.log(color);
        ele.style.backgroundColor = '#' + color;
        return color;
        // 完
    }
}

export {
    myColor
}