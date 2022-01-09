const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        name: 'src',
        resolve: {
            alias: {
                '@': resolve('src'),
                '&': resolve('./src/components')
            }
        }
    }
}