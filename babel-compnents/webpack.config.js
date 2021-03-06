const path = require('path');
const config = {
    entry: {
        external:'./src/external/index.js'
    },
    externals: {
        lodash : {
            commonjs: "lodash",
            amd: "lodash",
            root: "_" // 指向全局变量
        },
        jq: {
            root: '$'
        }
    },
    output: {
        publicPath: "./",
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
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