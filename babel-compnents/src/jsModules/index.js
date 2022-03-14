import { sayHi} from './es/ip'
import Hi from './es/ip'

import('./async/index').then((module) => {
    console.log(module);
});

const umd = require('./cjs/index')
import ip from './es/commonIp';
console.log('index.js',ip)
console.log(Hi)
console.log(umd);
sayHi();