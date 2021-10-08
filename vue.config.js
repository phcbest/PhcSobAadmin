module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://api.coincent.cn',
                changeOrigin: true
            }
        }
    }
}
