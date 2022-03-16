const sayHi = () => 'sayHi'

// umd模式如果没有library，会导致将入口起点返回的所有属性，直接赋值给 root 对象
/**
 * 在这个例子中，你需要 library 属性来命名你的模块：

output: {
  library: "MyLibrary",
  libraryTarget: "umd"
}
最终输出如下：

(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["MyLibrary"] = factory();
  else
    root["MyLibrary"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
  return _entry_return_; // 此模块返回值，是入口 chunk 返回的值
});



注意，省略 library 会导致将入口起点返回的所有属性，直接赋值给 root 对象，就像对象分配章节。例如：

output: {
  libraryTarget: "umd"
}
输出结果如下：

(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(typeof self !== 'undefined' ? self : this, function() {
  return _entry_return_; // 此模块返回值，是入口 chunk 返回的值
});
 */