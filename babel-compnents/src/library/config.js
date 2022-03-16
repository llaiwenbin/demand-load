const path = require('path');
const config = {
    entry: {
        library:'./src/library/index.js'
    },
    output: {
        publicPath: "./",
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library:'myLibrary',
        //一般用于 window、amd、commonjs 模式，在libraryTarget 为umd时可以使用对象，为每个模式设置不同的名称。
        library: {
            root: "MyLibrary",
            amd: "my-library", //amd 不知为何没生效
            commonjs: "my-common-library"
        },
        libraryTarget: "umd",

        // 单独设置 libraryTarget；
        // commonjs2 module.exports = __webpack_exports__ 不依赖其他值
        // commonjs exports[libray] = __webpack_exports__  依赖 library
        // window window[libray] = __webpack_exports__;
        // amd  define([library], [], () => {})
        // this、global 用的较少

        // 设置 libraryExport
        // 这里的 export 实际上就是 entry 文件对外导出的模块。
        // 一般 entry 都是 export default 此时 libraryExport 设置为default即可
        // export[libraryExport] 的值给到 librayTarget
        libraryExport: 'ssdefault'
        // entry 入口对应文件向外导出了命名空间为 ssdefault（export { ssdefault }） 可以设置为 ‘ssdefault’ 

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