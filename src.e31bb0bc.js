// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\icons\\logo.png":[["logo.7812a4cb.png","images/icons/logo.png"],"images/icons/logo.png"],"./..\\images\\icons\\burger.svg":[["burger.1450467a.svg","images/icons/burger.svg"],"images/icons/burger.svg"],"./..\\images\\icons\\close.svg":[["close.50bf71c2.svg","images/icons/close.svg"],"images/icons/close.svg"],"./..\\images\\icons\\vector.svg":[["vector.a6c0e849.svg","images/icons/vector.svg"],"images/icons/vector.svg"],"./..\\images\\hero\\mobile\\mobile_icecream_1x.png":[["mobile_icecream_1x.6859684d.png","images/hero/mobile/mobile_icecream_1x.png"],"images/hero/mobile/mobile_icecream_1x.png"],"./..\\images\\hero\\mobile\\mobile_ellips_1x.png":[["mobile_ellips_1x.6484d375.png","images/hero/mobile/mobile_ellips_1x.png"],"images/hero/mobile/mobile_ellips_1x.png"],"./..\\images\\hero\\mobile\\mobile_icecream_2x.png":[["mobile_icecream_2x.e441fce4.png","images/hero/mobile/mobile_icecream_2x.png"],"images/hero/mobile/mobile_icecream_2x.png"],"./..\\images\\hero\\mobile\\mobile_ellips_2x.png":[["mobile_ellips_2x.ac4dbcaf.png","images/hero/mobile/mobile_ellips_2x.png"],"images/hero/mobile/mobile_ellips_2x.png"],"./..\\images\\hero\\mobile\\mobile_icecream_3x.png":[["mobile_icecream_3x.aff149a2.png","images/hero/mobile/mobile_icecream_3x.png"],"images/hero/mobile/mobile_icecream_3x.png"],"./..\\images\\hero\\mobile\\mobile_ellips_3x.png":[["mobile_ellips_3x.11061e10.png","images/hero/mobile/mobile_ellips_3x.png"],"images/hero/mobile/mobile_ellips_3x.png"],"./..\\images\\hero\\tablet\\tablet_icecream_1x.png":[["tablet_icecream_1x.0488f87d.png","images/hero/tablet/tablet_icecream_1x.png"],"images/hero/tablet/tablet_icecream_1x.png"],"./..\\images\\hero\\tablet\\tablet_girl_1x.png":[["tablet_girl_1x.e97ee4d1.png","images/hero/tablet/tablet_girl_1x.png"],"images/hero/tablet/tablet_girl_1x.png"],"./..\\images\\hero\\tablet\\tablet_ellips_1x.png":[["tablet_ellips_1x.79cc1bc1.png","images/hero/tablet/tablet_ellips_1x.png"],"images/hero/tablet/tablet_ellips_1x.png"],"./..\\images\\hero\\tablet\\tablet_icecream_2x.png":[["tablet_icecream_2x.e35e860a.png","images/hero/tablet/tablet_icecream_2x.png"],"images/hero/tablet/tablet_icecream_2x.png"],"./..\\images\\hero\\tablet\\tablet_girl_2x.png":[["tablet_girl_2x.b96db42b.png","images/hero/tablet/tablet_girl_2x.png"],"images/hero/tablet/tablet_girl_2x.png"],"./..\\images\\hero\\tablet\\tablet_ellips_2x.png":[["tablet_ellips_2x.f2bde92b.png","images/hero/tablet/tablet_ellips_2x.png"],"images/hero/tablet/tablet_ellips_2x.png"],"./..\\images\\hero\\tablet\\tablet_icecream_3x.png":[["tablet_icecream_3x.59ae705c.png","images/hero/tablet/tablet_icecream_3x.png"],"images/hero/tablet/tablet_icecream_3x.png"],"./..\\images\\hero\\tablet\\tablet_girl_3x.png":[["tablet_girl_3x.8c6dcf2d.png","images/hero/tablet/tablet_girl_3x.png"],"images/hero/tablet/tablet_girl_3x.png"],"./..\\images\\hero\\tablet\\tablet_ellips_3x.png":[["tablet_ellips_3x.27fa5188.png","images/hero/tablet/tablet_ellips_3x.png"],"images/hero/tablet/tablet_ellips_3x.png"],"./..\\images\\hero\\desktop\\desktop_icecream_1x.png":[["desktop_icecream_1x.30c70a1d.png","images/hero/desktop/desktop_icecream_1x.png"],"images/hero/desktop/desktop_icecream_1x.png"],"./..\\images\\hero\\desktop\\desktop_girl_1x.png":[["desktop_girl_1x.8ac3cf24.png","images/hero/desktop/desktop_girl_1x.png"],"images/hero/desktop/desktop_girl_1x.png"],"./..\\images\\hero\\desktop\\desktop_ellips_1x.png":[["desktop_ellips_1x.452fa7d0.png","images/hero/desktop/desktop_ellips_1x.png"],"images/hero/desktop/desktop_ellips_1x.png"],"./..\\images\\hero\\desktop\\desktop_icecream_2x.png":[["desktop_icecream_2x.58db77d4.png","images/hero/desktop/desktop_icecream_2x.png"],"images/hero/desktop/desktop_icecream_2x.png"],"./..\\images\\hero\\desktop\\desktop_girl_2x.png":[["desktop_girl_2x.45501d92.png","images/hero/desktop/desktop_girl_2x.png"],"images/hero/desktop/desktop_girl_2x.png"],"./..\\images\\hero\\desktop\\desktop_ellips_2x.png":[["desktop_ellips_2x.f50672ef.png","images/hero/desktop/desktop_ellips_2x.png"],"images/hero/desktop/desktop_ellips_2x.png"],"./..\\images\\hero\\desktop\\desktop_icecream_3x.png":[["desktop_icecream_3x.e1a3d72a.png","images/hero/desktop/desktop_icecream_3x.png"],"images/hero/desktop/desktop_icecream_3x.png"],"./..\\images\\hero\\desktop\\desktop_girl_3x.png":[["desktop_girl_3x.6c116247.png","images/hero/desktop/desktop_girl_3x.png"],"images/hero/desktop/desktop_girl_3x.png"],"./..\\images\\hero\\desktop\\desktop_ellips_3x.png":[["desktop_ellips_3x.166c9309.png","images/hero/desktop/desktop_ellips_3x.png"],"images/hero/desktop/desktop_ellips_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product1_1x.png":[["mobile_product1_1x.b5366f41.png","images/products/mobile/mobile_product1_1x.png"],"images/products/mobile/mobile_product1_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product1_2x.png":[["mobile_product1_2x.c5c66006.png","images/products/mobile/mobile_product1_2x.png"],"images/products/mobile/mobile_product1_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product1_3x.png":[["mobile_product1_3x.a54d62a2.png","images/products/mobile/mobile_product1_3x.png"],"images/products/mobile/mobile_product1_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product2_1x.png":[["mobile_product2_1x.567f2641.png","images/products/mobile/mobile_product2_1x.png"],"images/products/mobile/mobile_product2_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product2_2x.png":[["mobile_product2_2x.159aa489.png","images/products/mobile/mobile_product2_2x.png"],"images/products/mobile/mobile_product2_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product2_3x.png":[["mobile_product2_3x.da9f6395.png","images/products/mobile/mobile_product2_3x.png"],"images/products/mobile/mobile_product2_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product3_1x.png":[["mobile_product3_1x.22d12ff1.png","images/products/mobile/mobile_product3_1x.png"],"images/products/mobile/mobile_product3_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product3_2x.png":[["mobile_product3_2x.fcf3a33b.png","images/products/mobile/mobile_product3_2x.png"],"images/products/mobile/mobile_product3_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\mobile\\mobile_product3_3x.png":[["mobile_product3_3x.31c15cc2.png","images/products/mobile/mobile_product3_3x.png"],"images/products/mobile/mobile_product3_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product1_1x.png":[["tablet_product1_1x.99ee5ca8.png","images/products/tablet/tablet_product1_1x.png"],"images/products/tablet/tablet_product1_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product1_2x.png":[["tablet_product1_2x.a5b5f21b.png","images/products/tablet/tablet_product1_2x.png"],"images/products/tablet/tablet_product1_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product1_3x.png":[["tablet_product1_3x.58259151.png","images/products/tablet/tablet_product1_3x.png"],"images/products/tablet/tablet_product1_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product2_1x.png":[["tablet_product2_1x.287568fd.png","images/products/tablet/tablet_product2_1x.png"],"images/products/tablet/tablet_product2_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product2_2x.png":[["tablet_product2_2x.9be0f6c8.png","images/products/tablet/tablet_product2_2x.png"],"images/products/tablet/tablet_product2_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product2_3x.png":[["tablet_product2_3x.132f4abd.png","images/products/tablet/tablet_product2_3x.png"],"images/products/tablet/tablet_product2_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product3_1x.png":[["tablet_product3_1x.3e656db0.png","images/products/tablet/tablet_product3_1x.png"],"images/products/tablet/tablet_product3_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product3_2x.png":[["tablet_product3_2x.995f81da.png","images/products/tablet/tablet_product3_2x.png"],"images/products/tablet/tablet_product3_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\tablet\\tablet_product3_3x.png":[["tablet_product3_3x.6ea859f8.png","images/products/tablet/tablet_product3_3x.png"],"images/products/tablet/tablet_product3_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product1_1x.png":[["desktop_product1_1x.d25b57a7.png","images/products/desktop/desktop_product1_1x.png"],"images/products/desktop/desktop_product1_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product1_2x.png":[["desktop_product1_2x.88c90fef.png","images/products/desktop/desktop_product1_2x.png"],"images/products/desktop/desktop_product1_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product1_3x.png":[["desktop_product1_3x.239e5405.png","images/products/desktop/desktop_product1_3x.png"],"images/products/desktop/desktop_product1_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product2_1x.png":[["desktop_product2_1x.c2e7673f.png","images/products/desktop/desktop_product2_1x.png"],"images/products/desktop/desktop_product2_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product2_2x.png":[["desktop_product2_2x.a3101cc2.png","images/products/desktop/desktop_product2_2x.png"],"images/products/desktop/desktop_product2_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product2_3x.png":[["desktop_product2_3x.950ffd71.png","images/products/desktop/desktop_product2_3x.png"],"images/products/desktop/desktop_product2_3x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product3_1x.png":[["desktop_product3_1x.ceb6e1ad.png","images/products/desktop/desktop_product3_1x.png"],"images/products/desktop/desktop_product3_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product3_2x.png":[["desktop_product3_2x.7610001c.png","images/products/desktop/desktop_product3_2x.png"],"images/products/desktop/desktop_product3_2x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\products\\desktop\\desktop_product3_3x.png":[["desktop_product3_3x.cd14d3e7.png","images/products/desktop/desktop_product3_3x.png"],"images/products/desktop/desktop_product3_3x.png"],"./..\\images\\desktop_background_milk_1x.png":[["desktop_background_milk_1x.e83514bf.png","images/desktop_background_milk_1x.png"],"images/desktop_background_milk_1x.png"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\icons\\quotes.svg":[["quotes.a2cb9615.svg","images/icons/quotes.svg"],"images/icons/quotes.svg"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\icons\\home.svg":[["home.6770a1b9.svg","images/icons/home.svg"],"images/icons/home.svg"],"C:\\Users\\Petr II\\Documents\\GitHub\\parcel-project-template\\src\\images\\icons\\group_dots.svg":[["group_dots.591859b0.svg","images/icons/group_dots.svg"],"images/icons/group_dots.svg"],"./..\\images\\desktop_background_pink_1x.png":[["desktop_background_pink_1x.c623a2cf.png","images/desktop_background_pink_1x.png"],"images/desktop_background_pink_1x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55024" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map