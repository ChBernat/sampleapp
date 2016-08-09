/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(6), __webpack_require__(4), __webpack_require__(5), __webpack_require__(3), __webpack_require__(1), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_router, _navbar, _login, _logged, _dependencyLoader, _results, _login3, _logged3, _results3, _test) {
	  'use strict';

	  var _router2 = _interopRequireDefault(_router);

	  var _navbar2 = _interopRequireDefault(_navbar);

	  var _login2 = _interopRequireDefault(_login);

	  var _logged2 = _interopRequireDefault(_logged);

	  var _dependencyLoader2 = _interopRequireDefault(_dependencyLoader);

	  var _results2 = _interopRequireDefault(_results);

	  var _login4 = _interopRequireDefault(_login3);

	  var _logged4 = _interopRequireDefault(_logged3);

	  var _results4 = _interopRequireDefault(_results3);

	  var _test2 = _interopRequireDefault(_test);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  var hasher = function () {
	    var navbar = {};
	    var config = {};
	    var setConfig = function setConfig(conf) {
	      config = conf;
	    };

	    var setModules = function setModules() {
	      _dependencyLoader2.default.module([], 'navbar', navbar);
	      _dependencyLoader2.default.module([], 'logged', _logged2.default, _logged4.default);
	      _dependencyLoader2.default.module([], 'results', _results2.default, _results4.default);
	      _dependencyLoader2.default.module(['navbar'], 'login', _login2.default, _login4.default);
	    };

	    var setRoutes = function setRoutes() {
	      _router2.default.setRoute('login', 'login');
	      _router2.default.setRoute('logged', 'logged');
	      _router2.default.setRoute('results', 'results');
	    };

	    var loadDependencies = function loadDependencies() {
	      navbar = (0, _navbar2.default)(_router2.default);
	    };

	    var _init = function _init(conf) {
	      loadDependencies();
	      setConfig(conf);
	      setModules();
	      setRoutes();
	      navbar.activateButtons(_router2.default.checkRoute(localStorage.getItem('lastRoute')));
	    };

	    return {
	      init: function init(conf) {
	        return _init(config);
	      },
	      test: _test2.default
	    };
	  }();

	  window.unitHashTest = hasher.test;
	  window.onload = hasher.init;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var showResults = function showResults() {
	    var activate = function activate() {
	      var date = {};
	      var emails = JSON.parse(localStorage.getItem('emails')) ? JSON.parse(localStorage.getItem('emails')) : [];
	      emails.forEach(function (row) {
	        date = new Date(row.date);
	        document.querySelector('table').innerHTML = document.querySelector('table').innerHTML.concat('\n            <tr>\n              <td>' + row.userEmail + '</td>\n              <td>' + row.input + '</td>\n              <td>' + row.hash.slice(0, 8) + '</td>\n              <td class="text-left">                      ' + (date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? date.getSeconds() : date.getSeconds()) + '\n                                        <br>\n                                         ' + date.getFullYear() + '/' + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + '/' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '\n                  </td>\n            </tr>\n          ');
	      });
	    };
	    return {
	      activate: activate,
	      deactivate: function deactivate() {}
	    };
	  };

	  exports.default = showResults;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _dependencyLoader) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var moduler = _interopRequireWildcard(_dependencyLoader);

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }

	      newObj.default = obj;
	      return newObj;
	    }
	  }

	  function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	        arr2[i] = arr[i];
	      }

	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  }

	  var router = function () {

	    var routerAPI = {
	      routes: {},
	      setRoute: function setRoute(name, moduleName) {
	        this.routes[name] = {
	          moduleName: moduleName,
	          name: name
	        };
	      },
	      getRoute: function getRoute(routeName) {
	        return this.routes[routeName];
	      },
	      changeRoute: function changeRoute(routeName) {
	        var route = this.getRoute(routeName);
	        if (!route) return false;
	        route = this.getRoute(this.checkRoute(route.name));
	        maitainRoute(moduler.loadModule(route.moduleName));
	      },
	      checkRoute: function checkRoute(routeName) {
	        var loggedUserEmail = localStorage.getItem('loggedUserEmail');
	        var lastRoute = localStorage.getItem('lastRoute');
	        if (loggedUserEmail === null) routeName = 'login';
	        if (!!loggedUserEmail && !!lastRoute && routeName === 'login') {
	          routeName = lastRoute;
	        }
	        return routeName;
	      }
	    };

	    var deactivatePrevEv = function deactivatePrevEv() {};

	    var updateRoute = function updateRoute(routeName) {
	      window.location.href = window.location.href.split('#')[0] + '#' + routeName;
	    };

	    var maitainRoute = function maitainRoute(module) {
	      updateRoute(module.name);
	      deactivatePrevEv();
	      document.querySelector('main').innerHTML = module.template();
	      var depScripts = module.resolvedDependencies.length > 0 ? module.resolvedDependencies.map(function (el) {
	        return el.script;
	      }) : [];
	      var currentScript = module.script.apply(module, _toConsumableArray(depScripts));
	      currentScript.activate();
	      if (module.name !== 'login') {
	        localStorage.setItem('lastRoute', module.name);
	      }
	      deactivatePrevEv = currentScript.deactivate;
	    };

	    return routerAPI;
	  }();

	  exports.default = router;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_RESULT__ = function (module) {
	  'use strict';

	  var dependencyLoaderAPI = {
	    module: function module(dependencies, name, script, template) {
	      this.modules[name] = {
	        dependencies: dependencies,
	        name: name,
	        script: script,
	        template: template
	      };
	    },

	    modules: {},
	    loadModule: function loadModule(name) {
	      var _this = this;

	      var module = this.modules[name];
	      var dependency = {};
	      var dependencyList = [];
	      if (name && module) {
	        module.dependencies.forEach(function (dependencyName) {
	          dependency = _this.modules[dependencyName];
	          if (dependency) {
	            dependencyList.push(dependency);
	          }
	        });
	        module.resolvedDependencies = dependencyList;
	        return module;
	      }
	    }
	  };

	  module.exports = dependencyLoaderAPI;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var login = function login(navbar) {
	    var validateEmail = function validateEmail(email) {
	      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      return re.test(email);
	    };

	    var logUserIn = function logUserIn(e) {
	      var email = document.querySelector('input').value;
	      if (validateEmail(email)) {
	        localStorage.setItem('loggedUserEmail', email);
	        navbar.goToHasher();
	      } else {
	        $('.alert-danger').fadeIn('slow').fadeOut(1500);
	      };
	    };

	    var activate = function activate() {
	      document.querySelector('#login').addEventListener('click', logUserIn);
	    };

	    var deactivate = function deactivate() {
	      document.querySelector('#login').removeEventListener('click', logUserIn, false);
	    };

	    return {
	      activate: activate,
	      deactivate: deactivate
	    };
	  };

	  exports.default = login;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var hash = function hash() {

	    var hashPhrase = function hashPhrase(e) {

	      var emailObject = {
	        date: new Date(),
	        userEmail: localStorage.getItem('loggedUserEmail'),
	        hash: btoa(document.querySelector('.hash').value),
	        input: document.querySelector('.hash').value
	      };
	      var alertMessage = '';
	      if (emailObject.input.length > 0) {
	        var emailList = !!localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
	        emailList.unshift(emailObject);
	        localStorage.setItem('emails', JSON.stringify(emailList));
	        alertMessage = 'Success! Your hash is: ' + emailObject.hash.slice(0, 8);
	      } else {
	        alertMessage = 'Failure! Input is empty!';
	      }

	      $('.alert-hasher').html(alertMessage).slideDown().delay(1500).slideUp();
	    };

	    var activate = function activate() {
	      document.querySelector('#hash').addEventListener('click', hashPhrase);
	      $('#hash').popover();
	    };

	    var deactivate = function deactivate() {
	      document.querySelector('#hash').removeEventListener('click', hashPhrase, false);
	    };

	    return {
	      activate: activate,
	      deactivate: deactivate
	    };
	  };

	  exports.default = hash;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    var navbar = function navbar(router) {
	        var modifyUrl = function modifyUrl(url) {
	            document.querySelector('.url').innerHTML = url;
	        };

	        var goToHasher = function goToHasher() {
	            var btnLogout = document.querySelector('a.btn.btn-logout');
	            var btnHasher = document.querySelector('a.btn.btn-hasher');
	            var btnResults = document.querySelector('a.btn.btn-results');

	            if (!btnLogout.style.display) {
	                btnLogout.addEventListener('click', logOut);
	                btnLogout.style.display = 'block';
	            }

	            btnHasher.removeEventListener('click', goToHasher);
	            btnHasher.style.display = 'none';

	            btnResults.addEventListener('click', seeResults);
	            btnResults.style.display = 'block';
	            modifyUrl('logged');
	            router.changeRoute('logged');
	        };

	        var logOut = function logOut() {
	            window.EMAIL = '';
	            localStorage.removeItem('loggedUserEmail');
	            var btnResults = document.querySelector('a.btn.btn-results');
	            var btnLogout = document.querySelector('a.btn.btn-logout');

	            btnResults.removeEventListener('click', seeResults);
	            btnResults.style.display = 'none';

	            btnLogout.removeEventListener('click', logOut);
	            btnLogout.style.display = 'none';

	            modifyUrl('login');
	            router.changeRoute('login');
	        };

	        var seeResults = function seeResults() {
	            var btnHasher = document.querySelector('a.btn.btn-hasher');
	            var btnResults = document.querySelector('a.btn.btn-results');

	            btnResults.style.display = 'none';

	            btnHasher.addEventListener('click', goToHasher);
	            btnHasher.style.display = 'block';
	            modifyUrl('results');
	            router.changeRoute('results');
	        };

	        var buttons = {
	            'logged': goToHasher,
	            'login': function login() {
	                router.changeRoute('login');
	            },
	            'results': seeResults
	        };

	        var activateButtons = function activateButtons(routeName) {
	            modifyUrl(routeName);
	            buttons[routeName]();
	        };

	        return {
	            modifyUrl: modifyUrl,
	            goToHasher: goToHasher,
	            logOut: logOut,
	            activateButtons: activateButtons
	        };
	    };

	    exports.default = navbar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  exports.default = function (ctx) {
	    return _template.call(ctx, ctx);
	  };

	  function _template(styles) {
	    return "<div class=\"container container-login\" id=\"login-container\">\n  <div class=\"row\">\n    <div class=\"col-lg-5\"></div>\n    <div class=\"col-lg-6 well\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control email\" placeholder=\"Your e-mail goes here...\" />\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-success btn-login\" type=\"button\" id=\"login\">Log in</button>\n        </span>\n      </div><!-- /input-group -->\n      <div class=\"alert alert-danger\" role=\"alert\">Your e-mail address is incorrect!</div>\n    </div><!-- /.col-lg-6 -->\n  </div>\n</div>\n";
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  exports.default = function (ctx) {
	    return _template.call(ctx, ctx);
	  };

	  function _template(styles) {
	    return "<div class=\"container container-login\" id=\"hash-container\">\n  <div class=\"row\">\n    <div class=\"col-lg-5\"></div>\n    <div class=\"col-lg-6 well\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control hash\" placeholder=\"Your phrase goes here...\">\n        <span class=\"input-group-btn\">\n        <a class=\"btn btn-success btn-hash\" role=\"button\" id=\"hash\">Hash it</a>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"alert alert-warning alert-hasher\" role=\"alert\"></div>\n";
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  exports.default = function (ctx) {
	    return _template.call(ctx, ctx);
	  };

	  function _template(styles) {
	    return "<div class=\"container container-login\" id=\"login-container\">\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n    </div>\n    <div class=\"col-lg-10\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>\n              E-mail\n            </th>\n            <th>\n              User's Input\n            </th>\n            <th>\n              Hash\n            </th>\n            <th>\n              Creation date\n            </th>\n          </tr>\n        </thead>\n      </table>\n    </div>\n  </div>\n</div>\n";
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var test = function test() {
	    var objects = JSON.parse(localStorage.getItem('emails'));
	    return !objects.some(function (el) {
	      return atob(el.hash) !== el.input;
	    });
	  };

	  exports.default = test;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);