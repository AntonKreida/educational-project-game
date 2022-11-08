/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>First game</title>\\r\\n  </head>\\r\\n  <body class=\\\"body\\\">\\r\\n    <div class=\\\"top center js-top\\\">\\r\\n      <!--Main-->\\r\\n      <main class=\\\"main\\\">\\r\\n        <div class=\\\"main__inner\\\">\\r\\n          <h1 class=\\\"main__title title\\\">Выбери сложность</h1>\\r\\n          <form\\r\\n            class=\\\"main__form form js-form\\\"\\r\\n            action=\\\"/\\\"\\r\\n            method=\\\"GET\\\"\\r\\n            novalidate\\r\\n          >\\r\\n            <div class=\\\"form__control\\\">\\r\\n              <input\\r\\n                class=\\\"form__input input js-input\\\"\\r\\n                type=\\\"radio\\\"\\r\\n                id=\\\"lavel-one\\\"\\r\\n                name=\\\"lavel\\\"\\r\\n                value=\\\"1\\\"\\r\\n                required\\r\\n              >\\r\\n              <label class=\\\"form__label label js-label\\\" for=\\\"lavel-one\\\">1</label>\\r\\n              <input\\r\\n                class=\\\"form__input input js-input\\\"\\r\\n                type=\\\"radio\\\"\\r\\n                id=\\\"lavel-two\\\"\\r\\n                name=\\\"lavel\\\"\\r\\n                value=\\\"2\\\"\\r\\n                required\\r\\n              >\\r\\n              <label class=\\\"form__label label js-label\\\" for=\\\"lavel-two\\\">2</label>\\r\\n              <input\\r\\n                class=\\\"form__input input js-input\\\"\\r\\n                type=\\\"radio\\\"\\r\\n                id=\\\"lavel-three\\\"\\r\\n                name=\\\"lavel\\\"\\r\\n                value=\\\"3\\\"\\r\\n                required\\r\\n              >\\r\\n              <label class=\\\"form__label label js-label\\\" for=\\\"lavel-three\\\">3</label>\\r\\n            </div>\\r\\n            <button class=\\\"form__button button js-button\\\" type=\\\"submit\\\" disabled>Старт</button>\\r\\n          </form>\\r\\n        </div>\\r\\n      </main>\\r\\n      <!--/Main-->\\r\\n    </div>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://first_game/./src/index.html?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://first_game/./src/style/main.scss?");

/***/ }),

/***/ "./src/scripts/app/global/index.js":
/*!*****************************************!*\
  !*** ./src/scripts/app/global/index.js ***!
  \*****************************************/
/***/ (() => {

eval("window.globalStateApp = {\r\n  lavel: '',\r\n  timeGame: '',\r\n  status: {\r\n    lavelGame: '',\r\n    state: '',\r\n    result: '',\r\n  },\r\n  generationCard: '',\r\n  selectedCard: '',\r\n  renderPlayField: (container) => {\r\n    container.innerHTML = '';\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/global/index.js?");

/***/ }),

/***/ "./src/scripts/app/handlers/index.js":
/*!*******************************************!*\
  !*** ./src/scripts/app/handlers/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handlers = {\r\n  onSubmitForm: (event) => {\r\n    event.preventDefault();\r\n\r\n    const { target } = event;\r\n    const inputs = target.querySelectorAll('.js-input');\r\n\r\n    if (!target.checkValidity()) {\r\n      return;\r\n    }\r\n\r\n    inputs.forEach((input) => {\r\n      if (!input.checked) {\r\n        return;\r\n      }\r\n\r\n      window.globalStateApp.lavel = input.value;\r\n      window.location.href = './game-pages.html';\r\n    });\r\n  },\r\n\r\n  onClickLabel: (event) => {\r\n    const { target } = event;\r\n    const labels = document.querySelectorAll('.js-label');\r\n    const button = document.querySelector('.js-button');\r\n\r\n    if (!target.closest('.js-label')) {\r\n      return;\r\n    }\r\n\r\n    labels.forEach((label) => {\r\n      label.classList.remove('active');\r\n    });\r\n\r\n    target.classList.add('active');\r\n    button.removeAttribute('disabled');\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/handlers/index.js?");

/***/ }),

/***/ "./src/scripts/app/init.js":
/*!*********************************!*\
  !*** ./src/scripts/app/init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/index.js */ \"./src/scripts/app/global/index.js\");\n/* harmony import */ var _global_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_index_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handlers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/index.js */ \"./src/scripts/app/handlers/index.js\");\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  const form = document.querySelector('.js-form');\r\n\r\n  form.addEventListener('click', _handlers_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onClickLabel);\r\n  form.addEventListener('submit', _handlers_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onSubmitForm);\r\n});\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/init.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_bg_card_real_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/bg_card_real.png */ \"./src/assets/images/bg_card_real.png\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/init */ \"./src/scripts/app/init.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/index.js?");

/***/ }),

/***/ "./src/assets/images/bg_card_real.png":
/*!********************************************!*\
  !*** ./src/assets/images/bg_card_real.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/aa603cdeeb1804dea96c.png\";\n\n//# sourceURL=webpack://first_game/./src/assets/images/bg_card_real.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;