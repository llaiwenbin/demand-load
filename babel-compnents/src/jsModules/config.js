const path = require('path');
const config = {
    entry: './src/jsModules/index.js',,
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