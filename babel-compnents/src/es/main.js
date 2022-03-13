/******/ (() => { // webpackBootstrap
  /**
   * 用于放置对应路径下文件夹具体的代码，同时给对应文件的 module.exports 赋值
   * function filePath1 (module){
   *    function someAction (){
   *        // .... 
   *    }
   *    var __WEBPACK_DEFAULT_EXPORT__ = { someAction }
   *    module.export = {
   *        default:() => __WEBPACK_DEFAULT_EXPORT__,
   *        someAction: () => someAction()
   *    }
   * }
   * function filePath2 (module){ 
   *    //...
   * }
   * var __webpack_modules__ = {
   *    filePath1,
   *    filePath2,
   *    ... 
   * }
   * **/
  
  /**
   * 赋值后会形成 __webpack_module_cache__ 对象 
   * __webpack_require__ = function (filePath) {
   *    if(!__webpack_module_cache__[filePath]) {
   *        var module = {}
   *        __webpack_module_cache__[filePath] = __webpack_modules__.filePath(module)
   *     }
   * }
   * {
   *  'filePath1': { deault: {sayHi},sayHi:()},
   *  ...
   * }
   * **/ 


  /**
   * 异步加载
   *  __webpack_require__.e 是一个Promise.all 
   * 它通过执行 __webpack_require__.f内所有方法，来获取各个方法的promise状态，所有promise.all 完成后说明异步文件加载完成。
   * 暂时只有__webpack_require__.f.j 方法，它主要是为了给 promises 队列中添加 promise 状态，同时调用 __webpack_require__.l 来加载对应异步文件js
   * 
   * promise 状态通过__webpack_require__.l（文件加载、过期 reject）、webpackJsonpCallback（执行已加载的异步文件 resolve）来修改
   * script 的onload、onerror、timeout 会触发 promise reject；
   * 同时拦截 chunkLoadingGlobal 的 push 方法，当异步模块加载后执行会 push 异步数据 到 chunkLoadingGlobal 中，触发 webpackJsonpCallback 里的 promise resolve。
   * 其数据最终被放到到了 __webpack_module__ 中
   * 这时 __webpack_require__.e 执行完毕 触发 __webpack_require__ 就可以获取到这个异步模块了！而后执行异步方法
   * 
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cjs/index.js":
/*!**************************!*\
  !*** ./src/cjs/index.js ***!
  \**************************/
/***/ ((module) => {

  let a = {
    foo:'bar'
}
setTimeout(()=>{
    console.log(a)
})
module.exports = a;

/***/ }),

/***/ "./src/es/commonIp.js":
/*!****************************!*\
  !*** ./src/es/commonIp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({a:1});

/***/ }),

/***/ "./src/es/ip.js":
/*!**********************!*\
  !*** ./src/es/ip.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sayHi": () => (/* binding */ sayHi)
/* harmony export */ });
/* harmony import */ var _commonIp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonIp */ "./src/es/commonIp.js");

console.log('ip.js',_commonIp__WEBPACK_IMPORTED_MODULE_0__["default"])
const sayHi = ()=>{
    console.log("Hi")
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ sayHi });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// 用于缓存导出数据的module
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
  /******/ 	// The require function
  // webpack的require方法，可以让 umd 和 es 都被存储在 __webpack_module_cache__ 中
  // 如果没有缓存就会去加载 __webpack_modules__ 对应文件放到缓存中
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
            // 用于把文件夹对应导出的数据给到对应文件的 module.export
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
            // f内可以有多种方法，暂时只有一个j，他会给promises列表添加很多promise
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "babel-compnents:";
  /******/ 		// loadScript function to load a script via script tag
            //	__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
              //  获取script
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
              // 一旦加载完成无论成功失败都会把script去除，同时执行 inProgress[url] 完成方法
              //  inProgress[url] 的done 为 promise 状态中 reject 的方法
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
  debugger;
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
                //  由于外部函数需要等待promises内的所有内容执行完才会执行后续代码
                //    0 所以当文件已经加载就无需等待
                //    [resolve,reject,promise]如果在加载中就把等待的loading状态给到他去等待。
                //    新安装的chunck就需要生成第一个promsie，给异步文件一个加载状态。
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
  /******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
                            // reject  
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
  debugger;
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		// 异步模块加载后会放到 self["webpackChunkbabel_compnents"]中 
/******/ 		var chunkLoadingGlobal = self["webpackChunkbabel_compnents"] = self["webpackChunkbabel_compnents"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
            // 拦截push方法，让 chunkLoadingGlobal push 方法会触发 webpackJsonpCallback 
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/jsModules/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _es_ip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../es/ip */ "./src/es/ip.js");
/* harmony import */ var _es_commonIp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../es/commonIp */ "./src/es/commonIp.js");

__webpack_require__.e(/*! import() */ "src_async_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ../async/index */ "./src/async/index.js")).then((module) => {

  console.log(module);
});

const umd = __webpack_require__(/*! ../cjs/index */ "./src/cjs/index.js")
;
console.log('index.js',_es_commonIp__WEBPACK_IMPORTED_MODULE_1__["default"])
console.log(_es_ip__WEBPACK_IMPORTED_MODULE_0__["default"])
console.log(umd);
(0,_es_ip__WEBPACK_IMPORTED_MODULE_0__.sayHi)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map