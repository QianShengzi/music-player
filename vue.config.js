module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: {
            '/api': {
                target: 'http://music.163.com', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/kugouApi': {
                target: 'https://fanxing.kugou.com', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/kugouApi': ''
                }
            },
            '/bjacshow': {
                target: 'http://bjacshow.kugou.com', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/bjacshow': ''
                }
            }
        },
    }
}