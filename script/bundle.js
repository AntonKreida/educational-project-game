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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>First game</title>\\r\\n  </head>\\r\\n  <body class=\\\"body js-body\\\">\\r\\n    <div class=\\\"top center js-top\\\">\\r\\n      <!--Main-->\\r\\n      <main class=\\\"main js-main\\\"></main>\\r\\n  </body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://first_game/./src/index.html?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://first_game/./src/style/main.scss?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-card.js":
/*!*******************************************************!*\
  !*** ./src/scripts/app/controller/controller-card.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_model_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model-card */ \"./src/scripts/app/model/model-card.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/window */ \"./src/scripts/app/model/window.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_window__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controller_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller-modal */ \"./src/scripts/app/controller/controller-modal.js\");\n\r\n\r\n\r\n\r\n\r\nconst controllerCard = {\r\n  hasFlipCard: false,\r\n  firstCard: null,\r\n  secondCard: null,\r\n  count: 0,\r\n\r\n  onFlipCard: (event) => {\r\n    const target = event.target.closest('.js-card');\r\n\r\n    if (!target.classList.contains('js-card')) {\r\n      return;\r\n    }\r\n\r\n    target.classList.add('flip');\r\n\r\n    if (!controllerCard.hasFlipCard) {\r\n      controllerCard.hasFlipCard = true;\r\n      controllerCard.firstCard = target;\r\n      return;\r\n    }\r\n\r\n    controllerCard.secondCard = target;\r\n    controllerCard.hasFlipCard = false;\r\n\r\n    controllerCard.checkMatchCard(controllerCard.firstCard, controllerCard.secondCard);\r\n  },\r\n\r\n  checkMatchCard: (firstCard, secondCard) => {\r\n    if (firstCard.dataset.card === secondCard.dataset.card) {\r\n      controllerCard.count += 1;\r\n      if (controllerCard.count === (0,_model_model_card__WEBPACK_IMPORTED_MODULE_0__.getPatternCards)()) {\r\n        window.globalStateApp.status = 'end';\r\n        window.globalStateApp.result.status = 'win';\r\n        controllerCard.count = 0;\r\n        _controller_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkStatusGameResult();\r\n      }\r\n      return;\r\n    }\r\n\r\n    controllerCard.offFlipCard(controllerCard.firstCard, controllerCard.secondCard);\r\n  },\r\n\r\n  offFlipCard: () => {\r\n    setTimeout(() => {\r\n      window.globalStateApp.status = 'end';\r\n      window.globalStateApp.result.status = 'lose';\r\n      controllerCard.count = 0;\r\n      _controller_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkStatusGameResult();\r\n    }, 500);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerCard);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-card.js?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-form.js":
/*!*******************************************************!*\
  !*** ./src/scripts/app/controller/controller-form.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_model_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model-card */ \"./src/scripts/app/model/model-card.js\");\n/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/model-page */ \"./src/scripts/app/model/model-page.js\");\n/* harmony import */ var _view_game_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/game-page */ \"./src/scripts/app/view/game-page.js\");\n/* harmony import */ var _controller_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller-timer */ \"./src/scripts/app/controller/controller-timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst controllerForm = {\r\n  validateForm: (form) => {\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      const { target } = event;\r\n      const { elements } = target;\r\n\r\n      if (!target.checkValidity) {\r\n        return;\r\n      }\r\n\r\n      const inputs = Array.from(elements).filter((element) => element.name);\r\n\r\n      inputs.forEach((input) => {\r\n        if (input.checked) {\r\n          window.globalStateApp.lavel = input.value;\r\n          window.globalStateApp.status = 'ready';\r\n        }\r\n      });\r\n\r\n      _view_game_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTemplate(_model_model_card__WEBPACK_IMPORTED_MODULE_0__.getCards, _model_model_page__WEBPACK_IMPORTED_MODULE_1__.getMarkupField);\r\n      _controller_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkStatusGame();\r\n    });\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerForm);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-form.js?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-modal.js":
/*!********************************************************!*\
  !*** ./src/scripts/app/controller/controller-modal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model-page */ \"./src/scripts/app/model/model-page.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/window */ \"./src/scripts/app/model/window.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_window__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _view_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/modal */ \"./src/scripts/app/view/modal.js\");\n/* harmony import */ var _controller_return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller-return */ \"./src/scripts/app/controller/controller-return.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst controllerModal = {\r\n  checkStatusGameResult: () => {\r\n    const body = document.querySelector('.js-body');\r\n    body.classList.add('no-scroll');\r\n    const timeEnd = document.querySelector('.js-time');\r\n    window.globalStateApp.result.resultTimeGame = timeEnd.textContent;\r\n    const { resultTimeGame, status } = window.globalStateApp.result;\r\n    if (status === 'win' || status === 'lose') {\r\n      _view_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderModal((0,_model_model_page__WEBPACK_IMPORTED_MODULE_0__.getModalWindow)(), resultTimeGame);\r\n\r\n      _controller_return__WEBPACK_IMPORTED_MODULE_3__[\"default\"].returnIndexPage();\r\n    }\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerModal);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-modal.js?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-restart.js":
/*!**********************************************************!*\
  !*** ./src/scripts/app/controller/controller-restart.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_model_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/model-card */ \"./src/scripts/app/model/model-card.js\");\n/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/model-page */ \"./src/scripts/app/model/model-page.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/window */ \"./src/scripts/app/model/window.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_model_window__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _view_game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/game-page */ \"./src/scripts/app/view/game-page.js\");\n/* harmony import */ var _controller_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller-timer */ \"./src/scripts/app/controller/controller-timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst controllerRestartGame = {\r\n  onButtonRestartGame: () => {\r\n    _view_game_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTemplate(_model_model_card__WEBPACK_IMPORTED_MODULE_0__.getCards, _model_model_page__WEBPACK_IMPORTED_MODULE_1__.getMarkupField);\r\n    window.globalStateApp.status = 'ready';\r\n    _controller_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"].checkStatusGame();\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerRestartGame);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-restart.js?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-return.js":
/*!*********************************************************!*\
  !*** ./src/scripts/app/controller/controller-return.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/window */ \"./src/scripts/app/model/window.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_window__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/index-page */ \"./src/scripts/app/view/index-page.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/view */ \"./src/scripts/app/view/view.js\");\n\r\n\r\n\r\n\r\nconst controllerReturn = {\r\n  returnIndexPage: () => {\r\n    const body = document.querySelector('.js-body');\r\n    const modal = document.querySelector('.js-modal');\r\n    const button = modal.querySelector('.js-button');\r\n\r\n    button.addEventListener('click', () => {\r\n      body.removeChild(modal);\r\n      window.globalStateApp.status = 'lobby';\r\n      _view_index_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTemplate();\r\n      _view_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lobbyForm();\r\n    });\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerReturn);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-return.js?");

/***/ }),

/***/ "./src/scripts/app/controller/controller-timer.js":
/*!********************************************************!*\
  !*** ./src/scripts/app/controller/controller-timer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/window */ \"./src/scripts/app/model/window.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_window__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/card */ \"./src/scripts/app/view/card.js\");\n/* harmony import */ var _view_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/timer */ \"./src/scripts/app/view/timer.js\");\n/* harmony import */ var _controller_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller-card */ \"./src/scripts/app/controller/controller-card.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst controllerTimer = {\r\n  checkStatusGame: () => {\r\n    const timerMin = document.querySelector('.js-min');\r\n    const timerSec = document.querySelector('.js-sec');\r\n    const cards = document.querySelectorAll('.js-card');\r\n    const field = document.querySelector('.js-field');\r\n    const button = document.querySelector('.js-button');\r\n\r\n    if (window.globalStateApp.status === 'ready') {\r\n      _view_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onTimerRev(timerSec);\r\n      _view_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onFlipCards(cards);\r\n    }\r\n\r\n    const checkStatusStartGame = setInterval(() => {\r\n      if (window.globalStateApp.status === 'game') {\r\n        _view_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onStopwatch(timerMin, timerSec);\r\n        _view_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"].offFlipCards(cards);\r\n        button.removeAttribute('disabled');\r\n        field.addEventListener('click', _controller_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].onFlipCard);\r\n        clearInterval(checkStatusStartGame);\r\n      }\r\n    }, 1000);\r\n\r\n    const checkStatusEndGame = setInterval(() => {\r\n      if (window.globalStateApp.status === 'end') {\r\n        field.removeEventListener('click', _controller_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"].onFlipCard);\r\n        clearInterval(checkStatusEndGame);\r\n      }\r\n    }, 1000);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controllerTimer);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/controller/controller-timer.js?");

/***/ }),

/***/ "./src/scripts/app/init.js":
/*!*********************************!*\
  !*** ./src/scripts/app/init.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/window */ \"./src/scripts/app/model/window.js\");\n/* harmony import */ var _model_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_window__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/index-page */ \"./src/scripts/app/view/index-page.js\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view */ \"./src/scripts/app/view/view.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  window.globalStateApp.status = 'lobby';\r\n  _view_index_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTemplate();\r\n  _view_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lobbyForm();\r\n});\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/init.js?");

/***/ }),

/***/ "./src/scripts/app/model/model-card.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/model/model-card.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCards\": () => (/* binding */ getCards),\n/* harmony export */   \"getPatternCards\": () => (/* binding */ getPatternCards)\n/* harmony export */ });\nconst cardDeck = {\r\n  suits: ['diamonds', 'hearts', 'clubs', 'spades'],\r\n  names: ['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'],\r\n};\r\n\r\nconst patternCards = {\r\n  easy: 3,\r\n  normal: 6,\r\n  hard: 9,\r\n};\r\n\r\nlet cardsList = [];\r\n\r\nconst getPatternCards = () => {\r\n  const patterns = Object.keys(patternCards);\r\n  const pattern = patterns.find((item) => item === window.globalStateApp.lavel);\r\n  const patternGame = patternCards[pattern];\r\n\r\n  return patternGame;\r\n};\r\n\r\nconst getRandomCards = (numberCards) => {\r\n  cardsList = [];\r\n\r\n  for (let i = cardsList.length; i < numberCards; i += 1) {\r\n    const randomIndexSuits = Math.floor(Math.random() * cardDeck.suits.length);\r\n    const randomIndexNames = Math.floor(Math.random() * cardDeck.names.length);\r\n\r\n    const suit = cardDeck.suits[randomIndexSuits];\r\n    const name = cardDeck.names[randomIndexNames];\r\n\r\n    cardsList.push({ suit, name });\r\n  }\r\n\r\n  cardsList = cardsList.reduce((curObj, item) => {\r\n    if (!curObj.find((elem) => elem.name === item.name && elem.suit === item.suit)) {\r\n      curObj.push(item);\r\n    }\r\n\r\n    return curObj;\r\n  }, []);\r\n\r\n  if (cardsList.length < numberCards) {\r\n    getRandomCards(numberCards);\r\n  }\r\n\r\n  return cardsList;\r\n};\r\n\r\nconst getSortCardsDeck = (arrListCard) => {\r\n  const cards = arrListCard;\r\n  const playCards = cards.concat(cards);\r\n\r\n  playCards.sort(() => Math.random() - 0.5);\r\n\r\n  return playCards;\r\n};\r\n\r\nconst getCardsPlay = (funcPattern, funcRandom, funcSort) => {\r\n  return () => {\r\n    return funcSort(funcRandom(funcPattern()));\r\n  };\r\n};\r\n\r\nconst getCards = getCardsPlay(getPatternCards, getRandomCards, getSortCardsDeck);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/model/model-card.js?");

/***/ }),

/***/ "./src/scripts/app/model/model-page.js":
/*!*********************************************!*\
  !*** ./src/scripts/app/model/model-page.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMarkupField\": () => (/* binding */ getMarkupField),\n/* harmony export */   \"getModalWindow\": () => (/* binding */ getModalWindow)\n/* harmony export */ });\nconst markupFields = {\r\n  easy: 'easy',\r\n  normal: 'normal',\r\n  hard: 'hard',\r\n};\r\n\r\nconst modalsList = {\r\n  win: 'modalWin',\r\n  lose: 'modalLose',\r\n};\r\n\r\nconst getMarkupField = () => {\r\n  const markups = Object.keys(markupFields);\r\n  const markup = markups.find((element) => element === window.globalStateApp.lavel);\r\n  const markupCards = markupFields[markup];\r\n\r\n  return markupCards;\r\n};\r\n\r\nconst getModalWindow = () => {\r\n  const modals = Object.keys(modalsList);\r\n  const modal = modals.find((element) => element === window.globalStateApp.result.status);\r\n  const modalResult = modalsList[modal];\r\n\r\n  return modalResult;\r\n};\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/model/model-page.js?");

/***/ }),

/***/ "./src/scripts/app/model/window.js":
/*!*****************************************!*\
  !*** ./src/scripts/app/model/window.js ***!
  \*****************************************/
/***/ (() => {

eval("window.globalStateApp = {\r\n  status: 'lobby',\r\n  lavel: '',\r\n  result: {\r\n    status: '',\r\n    resultTimeGame: '',\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/model/window.js?");

/***/ }),

/***/ "./src/scripts/app/view/card.js":
/*!**************************************!*\
  !*** ./src/scripts/app/view/card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst viewCard = {\r\n  templateCard: (card) => {\r\n    const { suit, name } = card;\r\n    const template = `\r\n        <div class=\"card-wrapper\">\r\n        <div class=\"card js-card\" data-card=\"${suit}-${name}\">\r\n         <div class=\"card-front\">\r\n           <img class=\"card__img\" src=\"./images/bg_card_real.png\" alt=\"\">\r\n         </div>\r\n        <div class=\"card-back\">\r\n          <img class=\"card__img\" src=\"./images/${suit}-${name}.png\" alt=\"\">\r\n        </div>\r\n       </div>\r\n      </div>`;\r\n\r\n    return template;\r\n  },\r\n\r\n  renderCard: (field, cardList) => {\r\n    field.innerHTML = '';\r\n    const cards = cardList();\r\n\r\n    cards.forEach((card) => {\r\n      field.innerHTML += viewCard.templateCard(card);\r\n    });\r\n  },\r\n\r\n  onFlipCards: (cards) => {\r\n    cards.forEach((card) => {\r\n      card.classList.add('flip');\r\n    });\r\n  },\r\n\r\n  offFlipCards: (cards) => {\r\n    cards.forEach((card) => {\r\n      card.classList.remove('flip');\r\n    });\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewCard);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/card.js?");

/***/ }),

/***/ "./src/scripts/app/view/game-page.js":
/*!*******************************************!*\
  !*** ./src/scripts/app/view/game-page.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controller_controller_restart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller-restart */ \"./src/scripts/app/controller/controller-restart.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/scripts/app/view/card.js\");\n\r\n\r\n\r\n\r\nconst templateMainControl = (mainInner) => {\r\n  const mainControl = document.createElement('div');\r\n  mainControl.classList.add('main__control', 'control');\r\n  mainInner.appendChild(mainControl);\r\n\r\n  const timerContainer = document.createElement('div');\r\n  timerContainer.classList.add('timer');\r\n  mainControl.appendChild(timerContainer);\r\n\r\n  const timerText = document.createElement('div');\r\n  timerText.classList.add('timer__text');\r\n  timerContainer.appendChild(timerText);\r\n\r\n  const textMin = document.createElement('p');\r\n  const textSec = document.createElement('p');\r\n  textMin.classList.add('text');\r\n  textSec.classList.add('text');\r\n  textMin.textContent = 'min';\r\n  textSec.textContent = 'sec';\r\n  timerText.appendChild(textMin);\r\n  timerText.appendChild(textSec);\r\n\r\n  const timer = document.createElement('div');\r\n  timer.classList.add('timer__time', 'time');\r\n  timerContainer.appendChild(timer);\r\n\r\n  const content = document.createElement('p');\r\n  content.classList.add('js-time');\r\n  timer.append(content);\r\n\r\n  const spanMin = document.createElement('span');\r\n  spanMin.classList.add('js-min');\r\n  spanMin.textContent = '00';\r\n  content.append(spanMin);\r\n\r\n  content.append('.');\r\n\r\n  const spanSec = document.createElement('span');\r\n  spanSec.classList.add('js-sec');\r\n  spanSec.textContent = '00';\r\n  content.append(spanSec);\r\n\r\n  const button = document.createElement('button');\r\n  button.classList.add('button', 'js-button');\r\n  button.setAttribute('disabled', 'disabled');\r\n  button.textContent = 'Начать заново';\r\n  button.addEventListener('click', _controller_controller_restart__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onButtonRestartGame);\r\n  mainControl.appendChild(button);\r\n};\r\n\r\nconst templateGamePages = {\r\n  template: (funcListCard, funcMarkup) => {\r\n    const main = document.querySelector('.js-main');\r\n    main.classList.add('main-page');\r\n\r\n    const mainInner = document.querySelector('.js-main-inner');\r\n    mainInner.innerHTML = '';\r\n    mainInner.classList.add('main__inner', 'main__inner-game-page');\r\n    templateMainControl(mainInner);\r\n\r\n    const mainField = document.createElement('div');\r\n    mainField.classList.add('main__field', 'field', `${funcMarkup()}`, 'js-field');\r\n    mainInner.appendChild(mainField);\r\n\r\n    _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCard(mainField, funcListCard);\r\n  },\r\n\r\n  getTemplate: (funcListCard, funcMarkup) => {\r\n    return templateGamePages.template(funcListCard, funcMarkup);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templateGamePages);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/game-page.js?");

/***/ }),

/***/ "./src/scripts/app/view/index-page.js":
/*!********************************************!*\
  !*** ./src/scripts/app/view/index-page.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst viewIndex = {\r\n  template: () => {\r\n    const mainInner = document.createElement('div');\r\n    mainInner.classList.add('main__inner', 'js-main-inner');\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('main__title', 'title');\r\n    title.textContent = 'Выбери сложность';\r\n    mainInner.appendChild(title);\r\n\r\n    const form = document.createElement('form');\r\n    form.classList.add('main__form', 'form', 'js-form');\r\n    form.setAttribute('action', '/');\r\n    form.setAttribute('method', 'GET');\r\n    form.setAttribute('novalidate', 'novalidate');\r\n    mainInner.appendChild(form);\r\n\r\n    const control = document.createElement('div');\r\n    control.classList.add('form__control');\r\n    form.appendChild(control);\r\n\r\n    const inputOne = document.createElement('input');\r\n    inputOne.classList.add('form__input', 'input', 'js-input');\r\n    inputOne.setAttribute('type', 'radio');\r\n    inputOne.setAttribute('id', 'lavel-one');\r\n    inputOne.setAttribute('name', 'lavel');\r\n    inputOne.setAttribute('value', 'easy');\r\n    inputOne.setAttribute('required', '');\r\n    control.appendChild(inputOne);\r\n\r\n    const labelOne = document.createElement('label');\r\n    labelOne.classList.add('form__label', 'label', 'js-label');\r\n    labelOne.setAttribute('for', 'lavel-one');\r\n    labelOne.textContent = '1';\r\n    control.appendChild(labelOne);\r\n\r\n    const inputTwo = document.createElement('input');\r\n    inputTwo.classList.add('form__input', 'input', 'js-input');\r\n    inputTwo.setAttribute('type', 'radio');\r\n    inputTwo.setAttribute('id', 'lavel-two');\r\n    inputTwo.setAttribute('name', 'lavel');\r\n    inputTwo.setAttribute('value', 'normal');\r\n    inputTwo.setAttribute('required', '');\r\n    control.appendChild(inputTwo);\r\n\r\n    const labelTwo = document.createElement('label');\r\n    labelTwo.classList.add('form__label', 'label', 'js-label');\r\n    labelTwo.setAttribute('for', 'lavel-two');\r\n    labelTwo.textContent = '2';\r\n    control.appendChild(labelTwo);\r\n\r\n    const inputThree = document.createElement('input');\r\n    inputThree.classList.add('form__input', 'input', 'js-input');\r\n    inputThree.setAttribute('type', 'radio');\r\n    inputThree.setAttribute('id', 'lavel-three');\r\n    inputThree.setAttribute('name', 'lavel');\r\n    inputThree.setAttribute('value', 'hard');\r\n    inputThree.setAttribute('required', '');\r\n    control.appendChild(inputThree);\r\n\r\n    const labelThere = document.createElement('label');\r\n    labelThere.classList.add('form__label', 'label', 'js-label');\r\n    labelThere.setAttribute('for', 'lavel-three');\r\n    labelThere.textContent = '3';\r\n    control.appendChild(labelThere);\r\n\r\n    const button = document.createElement('button');\r\n    button.classList.add('form__button', 'button', 'js-button');\r\n    button.setAttribute('type', 'submit');\r\n    button.setAttribute('disabled', '');\r\n    button.textContent = 'Старт';\r\n\r\n    form.appendChild(button);\r\n\r\n    return mainInner;\r\n  },\r\n\r\n  getTemplate: () => {\r\n    const main = document.querySelector('.js-main');\r\n    main.classList.remove('main-page');\r\n    main.innerHTML = '';\r\n    main.appendChild(viewIndex.template());\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewIndex);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/index-page.js?");

/***/ }),

/***/ "./src/scripts/app/view/modal.js":
/*!***************************************!*\
  !*** ./src/scripts/app/view/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst viewModel = {\r\n  modalWin: (timeResult) => {\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('modal', 'js-modal');\r\n\r\n    const modalInner = document.createElement('div');\r\n    modalInner.classList.add('modal__inner');\r\n    modal.appendChild(modalInner);\r\n\r\n    const img = document.createElement('img');\r\n    img.classList.add('modal__img');\r\n    img.setAttribute('src', './images/modal__win.png');\r\n    img.setAttribute('alt', '');\r\n    modalInner.appendChild(img);\r\n\r\n    const modalContent = document.createElement('div');\r\n    modalContent.classList.add('modal__content');\r\n    modalInner.appendChild(modalContent);\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('modal__title', 'title');\r\n    title.textContent = 'Вы выиграли!';\r\n    modalContent.appendChild(title);\r\n\r\n    const text = document.createElement('p');\r\n    text.classList.add('modal__text', 'js-text-result');\r\n    text.textContent = 'Затраченное время:';\r\n    modalContent.appendChild(text);\r\n\r\n    const br = document.createElement('br');\r\n    text.appendChild(br);\r\n\r\n    const span = document.createElement('span');\r\n    span.classList.add('modal__time', 'js-time-result');\r\n    span.textContent = `${timeResult}`;\r\n    text.append(span);\r\n\r\n    const button = document.createElement('button');\r\n    button.classList.add('button', 'js-button');\r\n    button.textContent = 'Начать заново';\r\n    modalContent.appendChild(button);\r\n\r\n    return modal;\r\n  },\r\n\r\n  modalLose: (timeResult) => {\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('modal', 'js-modal');\r\n\r\n    const modalInner = document.createElement('div');\r\n    modalInner.classList.add('modal__inner');\r\n    modal.appendChild(modalInner);\r\n\r\n    const img = document.createElement('img');\r\n    img.classList.add('modal__img');\r\n    img.setAttribute('src', './images/modal__lose.png');\r\n    img.setAttribute('alt', '');\r\n    modalInner.appendChild(img);\r\n\r\n    const modalContent = document.createElement('div');\r\n    modalContent.classList.add('modal__content');\r\n    modalInner.appendChild(modalContent);\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add('modal__title', 'title');\r\n    title.textContent = 'Вы проиграли!';\r\n    modalContent.appendChild(title);\r\n\r\n    const text = document.createElement('p');\r\n    text.classList.add('modal__text', 'js-text-result');\r\n    text.textContent = 'Затраченное время:';\r\n    modalContent.appendChild(text);\r\n\r\n    const br = document.createElement('br');\r\n    text.appendChild(br);\r\n\r\n    const span = document.createElement('span');\r\n    span.classList.add('modal__time', 'js-time-result');\r\n    span.textContent = `${timeResult}`;\r\n    text.append(span);\r\n\r\n    const button = document.createElement('button');\r\n    button.classList.add('button', 'js-button');\r\n    button.textContent = 'Начать заново';\r\n    modalContent.appendChild(button);\r\n\r\n    return modal;\r\n  },\r\n\r\n  renderModal: (modal, timeResult) => {\r\n    const body = document.querySelector('.js-body');\r\n    const modalWindow = viewModel[`${modal}`](timeResult);\r\n\r\n    body.appendChild(modalWindow);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewModel);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/modal.js?");

/***/ }),

/***/ "./src/scripts/app/view/timer.js":
/*!***************************************!*\
  !*** ./src/scripts/app/view/timer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst viewTimer = {\r\n  onTimerRev: (secTimer, distant = 5) => {\r\n    secTimer.innerHTML = `0${distant}`;\r\n\r\n    const timerRev = setInterval(() => {\r\n      distant -= 1;\r\n      secTimer.innerHTML = `0${distant}`;\r\n\r\n      if (distant <= 0) {\r\n        clearInterval(timerRev);\r\n        window.globalStateApp.status = 'game';\r\n      }\r\n    }, 1000);\r\n  },\r\n\r\n  onStopwatch(minTimer, secTimer) {\r\n    let time = 0;\r\n    const stopwatch = setInterval(() => {\r\n      if (window.globalStateApp.status === 'end') {\r\n        clearInterval(stopwatch);\r\n        return;\r\n      }\r\n\r\n      time += 1;\r\n      const secondVal = Math.floor(time) - Math.floor(time / 60) * 60;\r\n      const minuteVal = Math.floor(time / 60);\r\n      secTimer.textContent = secondVal < 10 ? `0${secondVal}` : `${secondVal}`;\r\n      minTimer.textContent = minuteVal < 10 ? `0${minuteVal}` : `${minuteVal}`;\r\n    }, 1000);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewTimer);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/timer.js?");

/***/ }),

/***/ "./src/scripts/app/view/view.js":
/*!**************************************!*\
  !*** ./src/scripts/app/view/view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controller_controller_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/controller-form */ \"./src/scripts/app/controller/controller-form.js\");\n\r\n\r\nconst viewHandlersPage = {\r\n  lobbyForm: () => {\r\n    const form = document.querySelector('.js-form');\r\n\r\n    form.addEventListener('click', (event) => {\r\n      const { target } = event;\r\n      const label = event.target.closest('.js-label');\r\n      const labelList = document.querySelectorAll('.js-label');\r\n      const button = document.querySelector('.js-button');\r\n\r\n      if (!target.classList.contains('js-label')) {\r\n        return;\r\n      }\r\n\r\n      labelList.forEach((element) => {\r\n        element.classList.remove('active');\r\n      });\r\n\r\n      label.classList.add('active');\r\n      button.removeAttribute('disabled');\r\n    });\r\n\r\n    _controller_controller_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validateForm(form);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewHandlersPage);\r\n\n\n//# sourceURL=webpack://first_game/./src/scripts/app/view/view.js?");

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