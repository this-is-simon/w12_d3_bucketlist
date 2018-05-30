/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MainListView = __webpack_require__(/*! ./views/main_list_view.js */ \"./client/src/views/main_list_view.js\");\nconst Countries = __webpack_require__(/*! ./models/countries.js */ \"./client/src/models/countries.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log('DOM content loaded');\n    const mainListViewContainer = document.querySelector('#main-list-view');\n    const mainListView = new MainListView(mainListViewContainer);\n    mainListView.bindEvents();\n\n    const countriesUrl = 'http://localhost:3000/api/countries'\n    const countries = new Countries(countriesUrl);\n    countries.getData();\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request.js":
/*!***************************************!*\
  !*** ./client/src/helpers/request.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\nRequest.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then((response) => response.json());\n};\n\n//TODO Do we need a put function to update onBucketList true/false?\n// Request.prototype.put = function (payload) {\n//   return fetch(this.url), {}\n// }\n\nRequest.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n    .then((response) => response.json());\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request.js?");

/***/ }),

/***/ "./client/src/models/countries.js":
/*!****************************************!*\
  !*** ./client/src/models/countries.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./client/src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst Countries = function (url) {\n  this.url = url;\n};\n\nCountries.prototype.getData = function () {\n  const request = new Request(this.url);\n  request.get()\n    .then((countries) => {\n      PubSub.publish('Countries:data-loaded', countries)\n    })\n    .catch(console.error);\n};\n\n\n\nmodule.exports = Countries;\n\n\n//# sourceURL=webpack:///./client/src/models/countries.js?");

/***/ }),

/***/ "./client/src/views/country_view.js":
/*!******************************************!*\
  !*** ./client/src/views/country_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\n\nconst CountryView = function (container){\n  this.container = container;\n};\n\nCountryView.prototype.render = function (country) {\n  const countryContainer = document.createElement('div');\n  const countryName = document.createElement('h2');\n  countryName.textContent = country.name;\n  countryContainer.appendChild(countryName);\n  this.container.appendChild(countryContainer);\n};\n\nmodule.exports = CountryView;\n\n\n//# sourceURL=webpack:///./client/src/views/country_view.js?");

/***/ }),

/***/ "./client/src/views/main_list_view.js":
/*!********************************************!*\
  !*** ./client/src/views/main_list_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Countries = __webpack_require__(/*! ../models/countries */ \"./client/src/models/countries.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./client/src/helpers/pub_sub.js\");\nconst CountryView = __webpack_require__(/*! ../views/country_view.js */ \"./client/src/views/country_view.js\");\n\nconst MainListView = function(container){\n  this.container = container;\n}\n\nMainListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Countries:data-loaded', (evt) => {\n    console.log(evt.detail);\n    this.render(evt.detail);\n  });\n};\n\nMainListView.prototype.render = function (countries) {\n  this.container.innerHTML = '';\n  const countryView = new CountryView(this.container);\n  countries.forEach((country) => countryView.render(country));\n};\n\n\nmodule.exports = MainListView;\n\n\n//# sourceURL=webpack:///./client/src/views/main_list_view.js?");

/***/ })

/******/ });