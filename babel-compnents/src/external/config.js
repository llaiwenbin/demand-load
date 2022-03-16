const path = require('path');
const config = {
    entry: './external/index.js',
    externals:["lodash",'jq'],// 配置不打包文件
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    }
}
module.exports = (env,argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        //...
    }
    
    return config
};