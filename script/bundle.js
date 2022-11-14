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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>First game</title>\\r\\n  </head>\\r\\n  <body class=\\\"body\\\">\\r\\n    <div class=\\\"top center js-top\\\">\\r\\n      <!--Main-->\\r\\n      <main class=\\\"main js-main\\\">\\r\\n        <div class=\\\"main__inner js-main-inner\\\">\\r\\n          <h1 class=\\\"main__title title\\\">Выбери сложность</h1>\\r\\n\\r\\n          <form\\r\\n            class=\\\"main__form form js-form\\\"\\r\\n            action=\\\"./scripts/app/controller/controller-form.js\\\"\\r\\n            method=\\\"GET\\\"\\r\\n            novalidate\\r\\n          >\\r\\n            <div class=\\\"form__control\\\">\\r\\n\\r\\n              <input\\r\\n                class=\\\"form__input input js-input\\\"\\r\\n                type=\\\"radio\\\"\\r\\n                id=\\\"lavel-one\\\"\\r\\n                name=\\\"lavel\\\"\\r\\n                value=\\\"easy\\\"\\r\\n                required\\r\\n              >\\r\\n              <label class=\\\"form__label label js-label\\\" for=\\\"lavel-one\\\">1</label>\\r\\n\\r\\n              <input\\r\\n                class=\\\"form__input input js-input\\\"\\r\\n                type=\\\"radio\\\"\\r\\n                id=\\\"lavel-two\\\"\\r\\n                name=\\\"lavel\\\"\\r\\n                value=\\\"normal\\\"\\r\\n                required\\r\\n              >\\r\\n              <label class=\\\"form__label label js-label\\\" for=\\\"lavel-two\\\">2</label>\\r\\n\\r\\n              <input\\r\\n                class=\\\"form__input input js-input\\\"\\r\\n                type=\\\"radio\\\"\\r\\n                id=\\\"lavel-three\\\"\\r\\n                name=\\\"lavel\\\"\\r\\n                value=\\\"hard\\\"\\r\\n                required\\r\\n              >\\r\\n              <label class=\\\"form__label label js-label\\\" for=\\\"lavel-three\\\">3</label>\\r\\n\\r\\n            </div>\\r\\n            <button class=\\\"form__button button js-button\\\" type=\\\"submit\\\" disabled>Старт</button>\\r\\n          </form>\\r\\n        </div>\\r\\n      </main>\\r\\n      <!--/Main-->\\r\\n    </div>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://first_game/./src/index.html?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://first_game/./src/style/main.scss?");

/***/ }),

/***/ "./src/scripts/app/class/card.js":
/*!***************************************!*\
  !*** ./src/scripts/app/class/card.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Card {\r\n  constructor(element, getListCard) {\r\n    this.element = element;\r\n    this.data = getListCard();\r\n    this.hasFlipCard = false;\r\n    this.firstCard = null;\r\n    this.secondCard = null;\r\n\r\n    this.renderCard = this.renderCard.bind(this);\r\n    this.onFlipCard = this.onFlipCard.bind(this);\r\n\r\n    this.renderCard(this.element);\r\n    this.element.addEventListener('click', this.onFlipCard);\r\n  }\r\n\r\n  renderCard(field) {\r\n    field.innerHTML = '';\r\n\r\n    this.data.forEach((item) => {\r\n      field.innerHTML += Card.template(item);\r\n    });\r\n  }\r\n\r\n  onFlipCard(event) {\r\n    const target = event.target.closest('.js-card');\r\n\r\n    if (!target.classList.contains('js-card')) {\r\n      return;\r\n    }\r\n\r\n    target.classList.add('flip');\r\n\r\n    // TODO: Тест логики условия проверки совпадения, который уйдет в controller-card связывая это с моделью\r\n    if (!this.hasFlipCard) {\r\n      this.hasFlipCard = true;\r\n      this.firstCard = target;\r\n      return;\r\n    }\r\n\r\n    this.secondCard = target;\r\n    this.hasFlipCard = false;\r\n\r\n    this.checkMatchCard();\r\n  }\r\n\r\n  checkMatchCard() {\r\n    if (this.firstCard.dataset.card === this.secondCard.dataset.card) {\r\n      return;\r\n    }\r\n\r\n    this.unFlipCard();\r\n  }\r\n\r\n  unFlipCard() {\r\n    setTimeout(() => {\r\n      this.firstCard.classList.remove('flip');\r\n      this.secondCard.classList.remove('flip');\r\n    }, 500);\r\n  }\r\n}\r\n\r\nCard.template = (card) => {\r\n  return `\r\n  <div class=\"card-wrapper\">\r\n    <div class=\"card js-card\" data-card=\"${card.suit}-${card.name}\">\r\n     <div class=\"card-front\">\r\n       <img class=\"card__img\" src=\"./images/bg_card_real.png\" alt=\"\">\r\n     </div>\r\n    <div class=\"card-back\">\r\n      <img class=\"card__img\" src=\"./images/${card.suit}-${card.name}.png\" alt=\"\">\r\n    </div>\r\n   </div>\r\n  </div>`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/class/card.js?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-form.js":
/*!*******************************************************!*\
  !*** ./src/scripts/app/controller/controller-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/template */ \"./src/scripts/app/view/template.js\");\n\r\n\r\nconst form = document.querySelector('.js-form');\r\n\r\nform.addEventListener('submit', (event) => {\r\n  event.preventDefault();\r\n\r\n  const { target } = event;\r\n  const { elements } = target;\r\n\r\n  if (!target.checkValidity) {\r\n    return;\r\n  }\r\n\r\n  const inputs = Array.from(elements).filter((element) => element.name);\r\n\r\n  inputs.forEach((input) => {\r\n    if (input.checked) {\r\n      window.globalStateApp.lavel = input.value;\r\n    }\r\n  });\r\n\r\n  (0,_view_template__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-form.js?");

/***/ }),

/***/ "./src/scripts/app/init.js":
/*!*********************************!*\
  !*** ./src/scripts/app/init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_controller_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/controller-form */ \"./src/scripts/app/controller/controller-form.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/view */ \"./src/scripts/app/view/view.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_view__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/init.js?");

/***/ }),

/***/ "./src/scripts/app/model/index.js":
/*!****************************************!*\
  !*** ./src/scripts/app/model/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCards\": () => (/* binding */ getCards),\n/* harmony export */   \"getMarkupField\": () => (/* binding */ getMarkupField)\n/* harmony export */ });\nwindow.globalStateApp = {\r\n  lavel: '',\r\n  timeGame: '',\r\n  status: {\r\n    lavelGame: '',\r\n    state: '',\r\n    result: '',\r\n  },\r\n};\r\n\r\nconst cardDeck = {\r\n  suits: ['diamonds', 'hearts', 'clubs', 'spades'],\r\n  names: ['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],\r\n};\r\n\r\nconst patternCards = {\r\n  easy: 3,\r\n  normal: 6,\r\n  hard: 9,\r\n};\r\n\r\nconst markupFields = {\r\n  easy: 'easy',\r\n  normal: 'normal',\r\n  hard: 'hard',\r\n};\r\n\r\nconst getMarkupField = () => {\r\n  const markups = Object.keys(markupFields);\r\n  const markup = markups.find((element) => element === window.globalStateApp.lavel);\r\n  const markupCards = markupFields[markup];\r\n\r\n  return markupCards;\r\n};\r\n\r\nlet cardsList = [];\r\n\r\nconst getRandomCards = (numberCards) => {\r\n  for (let i = cardsList.length; i < numberCards; i += 1) {\r\n    const randomIndexArrSuits = Math.floor(Math.random() * cardDeck.suits.length);\r\n    const randomIndexArrName = Math.floor(Math.random() * cardDeck.names.length);\r\n\r\n    const suit = cardDeck.suits[randomIndexArrSuits];\r\n    const name = cardDeck.names[randomIndexArrName];\r\n\r\n    cardsList.push({ suit, name });\r\n  }\r\n\r\n  // TODO: test function get cards for play\r\n  cardsList = cardsList.reduce((acc, item) => {\r\n    if (!acc.find((elem) => elem.name === item.name && elem.suit === item.suit)) {\r\n      acc.push(item);\r\n    }\r\n\r\n    return acc;\r\n  }, []);\r\n\r\n  if (cardsList.length < numberCards) {\r\n    getRandomCards(numberCards);\r\n  }\r\n\r\n  return cardsList;\r\n};\r\n\r\nconst getCardsForPaly = (arrListCard) => {\r\n  const cards = arrListCard;\r\n  const playCards = cards.concat(cards);\r\n\r\n  playCards.sort(() => Math.random() - 0.5);\r\n\r\n  return playCards;\r\n};\r\n\r\nconst getPlayCards = (func1, func2) => {\r\n  return () => {\r\n    const patterns = Object.keys(patternCards);\r\n    const lavel = patterns.find((element) => element === window.globalStateApp.lavel);\r\n    const numberCards = patternCards[lavel];\r\n\r\n    return func2(func1(numberCards));\r\n  };\r\n};\r\n\r\nconst getCards = getPlayCards(getRandomCards, getCardsForPaly);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/model/index.js?");

/***/ }),

/***/ "./src/scripts/app/view/template.js":
/*!******************************************!*\
  !*** ./src/scripts/app/view/template.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/card.js */ \"./src/scripts/app/class/card.js\");\n/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/index */ \"./src/scripts/app/model/index.js\");\n\r\n\r\n\r\nconst templateMainControl = (mainInner) => {\r\n  mainInner.innerHTML = `\r\n    <div class=\"main__control control\">\r\n       <div class=\"timer\">\r\n        <div class=\"timer__text\">\r\n         <p class=\"text\">min</p>\r\n         <p class=\"text\">sec</p>\r\n        </div>\r\n        <div class=\"timer__time time\">\r\n         <span class=\"js-time\">00.00</span>\r\n        </div>\r\n       </div>\r\n  \r\n      <button class=\"button\">Начать заново</button>\r\n    </div>`;\r\n};\r\n\r\nconst templateGamePages = () => {\r\n  const main = document.querySelector('.js-main');\r\n  main.classList.add('main-page');\r\n\r\n  const mainInner = document.querySelector('.js-main-inner');\r\n  mainInner.innerHTML = '';\r\n  mainInner.classList.add('main__inner-game-page');\r\n  templateMainControl(mainInner);\r\n\r\n  const mainField = document.createElement('div');\r\n  mainField.classList.add('main__field', 'field', `${(0,_model_index__WEBPACK_IMPORTED_MODULE_1__.getMarkupField)()}`);\r\n  mainInner.appendChild(mainField);\r\n\r\n  // eslint-disable-next-line no-unused-vars\r\n  const card = new _class_card_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mainField, _model_index__WEBPACK_IMPORTED_MODULE_1__.getCards);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templateGamePages);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/template.js?");

/***/ }),

/***/ "./src/scripts/app/view/view.js":
/*!**************************************!*\
  !*** ./src/scripts/app/view/view.js ***!
  \**************************************/
/***/ (() => {

eval("const form = document.querySelector('.js-form');\r\n\r\nform.addEventListener('click', (event) => {\r\n  const { target } = event;\r\n\r\n  const label = event.target.closest('.js-label');\r\n  const button = document.querySelector('.js-button');\r\n  const listLabels = document.querySelectorAll('.js-label');\r\n\r\n  if (target !== label) {\r\n    return;\r\n  }\r\n\r\n  listLabels.forEach((element) => {\r\n    element.classList.remove('active');\r\n  });\r\n\r\n  label.classList.add('active');\r\n  button.removeAttribute('disabled');\r\n});\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/view.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _app_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/init */ \"./src/scripts/app/init.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;