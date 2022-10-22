/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./GitHub.png */ \"./src/GitHub.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  font-family: 'Times New Roman', Times, serif;\\n  font-size: 20px;\\n  line-height: 1.2;\\n  color: #f8fafc;\\n}\\n\\nbody {\\n  height: 100vh;\\n  margin: 0;\\n}\\n\\n#container {\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 3fr;\\n  grid-template-rows: auto 1fr auto;\\n}\\n\\n#header {\\n  background-image: linear-gradient(#0f172a, #334155);\\n  padding: 8px 32px;\\n  grid-column: 1 / 3;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n#logo {\\n  font-size: 2rem;\\n}\\n\\n#sidebar {\\n  background-color: #334155;\\n  padding: 32px;\\n}\\n\\n#sidebar > a {\\n  display: flex;\\n  align-items: center;\\n  gap: 8px;\\n}\\n\\na {\\n  cursor: pointer;\\n  font-weight: 600;\\n  text-decoration: none;\\n}\\n\\na:visited {\\n  color: inherit;\\n}\\n\\na:hover {\\n  color: #cbd5e1;\\n}\\n\\n.active {\\n  background-color: #1e293b;\\n  color: #cbd5e1;\\n  border: 1px solid #94a3b8;\\n}\\n\\n#projects {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n}\\n\\n#list {\\n  overflow: auto;\\n  min-height: 1.2rem;\\n  max-height: calc(90vh - 148px - 8.4rem);\\n  background-color: #475569;\\n  border: 2px dashed #0f172a;\\n  border-radius: 16px;\\n  padding: 4px 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 4px;\\n}\\n\\n.project {\\n  padding-left: 8px;\\n  display: flex;\\n  gap: 8px;\\n}\\n\\n.edit,\\n.remove {\\n  cursor: pointer;\\n}\\n\\n#sidebar .edit:hover,\\n#sidebar .remove:hover {\\n  color: #cbd5e1;\\n}\\n\\n#content .edit:hover,\\n#content .remove:hover {\\n  color: #334155;\\n}\\n\\nbutton {\\n  color: inherit;\\n  font-family: inherit;\\n  font-size: inherit;\\n  line-height: inherit;\\n  font-weight: 600;\\n  border-radius: 8px;\\n  padding: 8px 24px;\\n}\\n\\n#sidebar button {\\n  background-color: #0f172a;\\n  border: 1px solid #94a3b8;\\n  align-self: center;\\n}\\n\\n#sidebar button:hover {\\n  border: 1px solid #f8fafc;\\n}\\n\\n#sidebar button:active {\\n  background-color: #1e293b;\\n}\\n\\n#content button,\\n#dialog button {\\n  background-color: #94a3b8;\\n  border: 1px solid #475569;\\n}\\n\\n#content button:hover,\\n#dialog button:hover {\\n  border: 1px solid #0f172a;\\n}\\n\\n#content button:active,\\n#dialog button:active {\\n  background-color: #64748b;\\n}\\n\\n#content {\\n  overflow: auto;\\n  background-color: #cbd5e1;\\n  color: #0f172a;\\n  padding: 32px 16px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 16px;\\n}\\n\\n.heading {\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n}\\n\\ntd, th {\\n  padding: 4px 12px;\\n}\\n\\ntbody {\\n  background-color: #f8fafc;\\n  text-align: center;\\n}\\n\\ntbody tr:hover {\\n  background-color: #e2e8f0;\\n}\\n\\n.completed {\\n  background-color: #94a3b8;\\n  text-decoration: line-through;\\n}\\n\\n.completed:hover {\\n  background-color: #64748b;\\n}\\n\\n#footer {\\n  background-image: linear-gradient(#334155, #0f172a);\\n  font-size: 0.8rem;\\n  padding: 4px 0;\\n  grid-column: 1 / 3;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.2rem;\\n}\\n\\n#footer a {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.2rem;\\n}\\n\\n#footer a::after {\\n  width: 24px;\\n  height: 24px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 100% 100%;\\n  content: '';\\n}\\n\\n#dialog {\\n  position: absolute;\\n  top: 0;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #00000055;\\n  color: #0f172a;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#form {\\n  background-color: #f8fafc;\\n  box-shadow: 4px 4px 4px #0f172a;\\n  padding: 8px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 8px;\\n}\\n\\n.form-group {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 8px;\\n}\\n\\n#inputs {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 8px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nlet data = { projects: [{ title: 'Default', color: '#000000' }], tasks: [] };\n\nwindow.addEventListener('load', () => {\n  if (window.localStorage.getItem('ToDoData')) \n    data = JSON.parse(window.localStorage.getItem('ToDoData'));\n\n  loadTasks();\n  loadProjects();\n\n  const allTasksLink = document.querySelector('#all');\n  allTasksLink.addEventListener('click', e => sidebarLinkEH(e.target));\n\n  const todayTasksLink = document.querySelector('#today');\n  todayTasksLink.addEventListener('click', e => sidebarLinkEH(e.target));\n\n  const newTaskBtn = document.querySelector('#content button');\n  newTaskBtn.addEventListener('click', e => data.projects.length > 0 ? showDialog(e.target) : alert('You need to have at least one project!'));\n\n  const newProjBtn = document.querySelector('#sidebar button');\n  newProjBtn.addEventListener('click', e => showDialog(e.target));\n});\n\nfunction loadTasks (projectIndex = null) {\n  const tasks = document.querySelector('#tasks tbody');\n  tasks.innerHTML = '';\n\n  data.tasks.sort((currentTask, nextTask) => currentTask.dueDate > nextTask.dueDate ? 1: -1);\n\n  for (let i = 0; i < data.tasks.length; i++) {\n    let hide = false;\n    if ((projectIndex === -1 && (new Date(data.tasks[i].dueDate)).toDateString() !== (new Date(Date.now())).toDateString()) ||\n        (projectIndex !== -1 && projectIndex !== null && data.tasks[i].projectIndex !== projectIndex))\n      hide = true;\n\n    const task = document.createElement('tr');\n    task.classList.add('task');\n    if (data.tasks[i].completed) task.classList.add('completed');\n    if (hide) task.style.display = 'none';\n    task.style.boxShadow = `-0.2rem 0 ${data.projects[data.tasks[i].projectIndex].color}`;\n\n    const cb = document.createElement('td');\n    const checkbox = document.createElement('input');\n    checkbox.classList.add('checkbox');\n    checkbox.type = 'checkbox';\n    checkbox.checked = data.tasks[i].completed;\n    checkbox.addEventListener('click', () => {\n      if (checkbox.checked) {\n        data.tasks[i].completed = true;\n        task.classList.add('completed');\n        saveLocally();\n      }\n      else {\n        data.tasks[i].completed = false;\n        task.classList.remove('completed');\n        saveLocally();\n      }\n    });\n    cb.appendChild(checkbox);\n\n    const title = document.createElement('th');\n    title.classList.add('title');\n    title.textContent = data.tasks[i].title;\n\n    const description = document.createElement('td');\n    description.classList.add('description');\n    description.textContent = data.tasks[i].description;\n\n    const priority = document.createElement('td');\n    priority.classList.add('priority');\n    priority.textContent = data.tasks[i].priority;\n\n    switch (data.tasks[i].priority) {\n      case 'high':\n        priority.style.color = 'red';\n        break;\n      case 'medium':\n        priority.style.color = 'orange';\n        break;\n      case 'low':\n        priority.style.color = 'green';\n    }\n\n    const dueDate = document.createElement('td');\n    dueDate.classList.add('date');\n    dueDate.textContent = (new Date(data.tasks[i].dueDate).toDateString());\n\n    const buttons = document.createElement('td');\n    buttons.style = 'display: flex; gap: 8px';\n    const edit = document.createElement('span');\n    edit.className = 'material-symbols-outlined edit';\n    edit.textContent = 'edit_square';\n    edit.addEventListener('click', e => showDialog(e.target));\n    buttons.appendChild(edit);\n    const remove = document.createElement('span');\n    remove.className = 'material-symbols-outlined remove';\n    remove.textContent = 'delete';\n    remove.addEventListener('click', e => removeButtonEH(e.target));\n    buttons.appendChild(remove);\n\n    task.appendChild(cb);\n    task.appendChild(title);\n    task.appendChild(description);\n    task.appendChild(priority);\n    task.appendChild(dueDate);\n    task.appendChild(buttons);\n    \n    tasks.appendChild(task);\n  }\n}\n\nfunction loadProjects() {\n  const list = document.querySelector('#list');\n  list.innerHTML = '';\n\n  for (let i = 0; i < data.projects.length; i++) {\n    const proj = document.createElement('div');\n    proj.classList.add('project');\n    proj.style.boxShadow = `-0.2rem 0 ${data.projects[i].color}`;\n\n    const link = document.createElement('a');\n    link.textContent = data.projects[i].title;\n    link.addEventListener('click', e => sidebarLinkEH(e.target));\n    proj.appendChild(link);\n\n    const edit = document.createElement('span');\n    edit.className = 'material-symbols-outlined edit';\n    edit.textContent = 'edit_square';\n    edit.addEventListener('click', e => showDialog(e.target));\n    proj.appendChild(edit);\n\n    const remove = document.createElement('span');\n    remove.className = 'material-symbols-outlined remove';\n    remove.textContent = 'delete';\n    remove.addEventListener('click', e => removeButtonEH(e.target));\n    proj.appendChild(remove);\n\n    list.appendChild(proj);\n  }\n}\n\nfunction newTask (title, projectIndex, dueDate, priority, description) {\n  data.tasks.push({ title, projectIndex, dueDate, priority, description, completed: false });\n  saveLocally();\n}\n\nfunction newProject (title, color) {\n  data.projects.push({ title, color });\n  saveLocally();\n}\n\nfunction editTask (taskIndex, title, projectIndex, dueDate, priority, description) {\n  data.tasks[taskIndex] = { title, projectIndex, dueDate, priority, description };\n  saveLocally();\n}\n\nfunction editProject (projectIndex, title, color) {\n  data.projects[projectIndex] = { title, color };\n  saveLocally();\n}\n\nfunction removeTask (taskIndex) {\n  data.tasks.splice(taskIndex, 1);\n  document.querySelectorAll('.task')[taskIndex].remove();\n  saveLocally();\n}\n\nfunction removeProject (projectIndex) {\n  data.projects.splice(projectIndex, 1);\n  document.querySelectorAll('.project')[projectIndex].remove();\n\n  for (let i = 0; i < data.tasks.length; i++) {\n    if (data.tasks[i].projectIndex > projectIndex) {\n      data.tasks[i].projectIndex--;\n      continue;\n    }\n\n    if (data.tasks[i].projectIndex === projectIndex) {\n      removeTask(i);\n      i--;\n    }\n  }\n\n  saveLocally();\n}\n\nfunction saveLocally () {\n  window.localStorage.setItem('ToDoData', JSON.stringify(data));\n}\n\nfunction showDialog (element) {\n  let taskIndex, projectIndex;\n\n  const dialog = document.createElement('div');\n  dialog.id = 'dialog';\n  dialog.addEventListener('click', e => {\n    if (e.target === dialog) dialog.remove();\n  });\n\n  const form = document.createElement('div');\n  form.id = 'form';\n\n  const heading = document.createElement('div');\n  heading.classList.add('heading');\n  form.appendChild(heading);\n\n  const inputs = document.createElement('div');\n  inputs.id = 'inputs';\n  form.appendChild(inputs);\n\n  const titleGroup = document.createElement('div');\n  titleGroup.classList.add('form-group');\n  const titleLabel = document.createElement('label');\n  titleLabel.htmlFor = 'title';\n  titleLabel.textContent = 'Title:';\n  titleGroup.appendChild(titleLabel);\n  const title = document.createElement('input');\n  title.type = 'text';\n  title.id = 'title';\n  titleGroup.appendChild(title);\n  inputs.appendChild(titleGroup);\n\n  if (document.querySelector('#content').contains(element)) {\n    const descriptionGroup = document.createElement('div');\n    descriptionGroup.classList.add('form-group');\n    const descriptionLabel = document.createElement('label');\n    descriptionLabel.htmlFor = 'description';\n    descriptionLabel.textContent = 'Description:';\n    descriptionGroup.appendChild(descriptionLabel);\n    const description = document.createElement('input');\n    description.type = 'text';\n    description.id = 'description';\n    descriptionGroup.appendChild(description);\n    inputs.appendChild(descriptionGroup);\n\n    const projectGroup = document.createElement('div');\n    projectGroup.classList.add('form-group');\n    const projectLabel = document.createElement('label');\n    projectLabel.htmlFor = 'project';\n    projectLabel.textContent = 'Project:';\n    projectGroup.appendChild(projectLabel);\n    const project = document.createElement('select');\n    project.id = 'project';\n    for (let i = 0; i < data.projects.length; i++) {\n      const option = document.createElement('option');\n      option.text = data.projects[i].title;\n      project.add(option);\n    }\n    projectGroup.appendChild(project);\n    inputs.appendChild(projectGroup);\n\n    const priorityGroup = document.createElement('div');\n    priorityGroup.classList.add('form-group');\n    const priorityLabel = document.createElement('label');\n    priorityLabel.htmlFor = 'priority';\n    priorityLabel.textContent = 'Priority:';\n    priorityGroup.appendChild(priorityLabel);\n    const priority = document.createElement('select');\n    priority.id = 'priority';\n    const low = document.createElement('option');\n    low.text = 'low';\n    priority.add(low);\n    const medium = document.createElement('option');\n    medium.text = 'medium';\n    priority.add(medium);\n    const high = document.createElement('option');\n    high.text = 'high';\n    priority.add(high);\n    priorityGroup.appendChild(priority);\n    inputs.appendChild(priorityGroup);\n\n    const dateGroup = document.createElement('div');\n    dateGroup.classList.add('form-group');\n    const dateLabel = document.createElement('label');\n    dateLabel.htmlFor = 'date';\n    dateLabel.textContent = 'Date:';\n    dateGroup.appendChild(dateLabel);\n    const dueDate = document.createElement('input');\n    dueDate.type = 'date';\n    dueDate.id = 'date';\n    dateGroup.appendChild(dueDate);\n    inputs.appendChild(dateGroup);\n\n    if (element.nodeName === 'SPAN') {\n      taskIndex = [...element.parentNode.parentNode.parentNode.childNodes].indexOf(element.parentNode.parentNode);\n      heading.textContent = 'Edit Task';\n      title.value = data.tasks[taskIndex].title;\n      description.value = data.tasks[taskIndex].description;\n      project.selectedIndex = data.tasks[taskIndex].projectIndex;\n      priority.selectedIndex = data.tasks[taskIndex].priority === 'low' ? 0 : data.tasks[taskIndex].priority === 'medium' ? 1 : 2;\n      dueDate.value = data.tasks[taskIndex].dueDate;\n    }\n    else heading.textContent = 'New Task';\n  }\n  else {\n    const colorGroup = document.createElement('div');\n    colorGroup.classList.add('form-group');\n    const colorLabel = document.createElement('label');\n    colorLabel.htmlFor = 'color';\n    colorLabel.textContent = 'Color:';\n    colorGroup.appendChild(colorLabel);\n    const color = document.createElement('input');\n    color.type = 'color';\n    color.id = 'color';\n    colorGroup.appendChild(color);\n    inputs.appendChild(colorGroup);\n\n    if (element.nodeName === 'SPAN') {\n      projectIndex = [...element.parentNode.parentNode.childNodes].indexOf(element.parentNode);\n      heading.textContent = 'Edit Project';\n      title.value = data.projects[projectIndex].title;\n      color.value = data.projects[projectIndex].color;\n    }\n    else heading.textContent = 'New Project';\n  }\n\n  const submit = document.createElement('button');\n  submit.textContent = 'Submit';\n  form.appendChild(submit);\n\n  submit.addEventListener('click', () => {\n    if (!title.value) {\n      alert('Title is missing!');\n      return;\n    }\n\n    const activeProjectIndex = document.querySelector('#all').classList.contains('active') ? null :\n                               [...document.querySelectorAll('#projects a')].indexOf(document.querySelector('.active'));\n    \n    if (element.parentNode.id === 'content') {\n      if (!date.value) {\n        alert('Date is missing!');\n        return;\n      }\n\n      newTask(title.value, project.selectedIndex, date.value, priority.value, description.value);\n      loadTasks(activeProjectIndex);\n    }\n    else if (element.parentNode.id === 'projects') {\n      newProject(title.value, color.value);\n      loadProjects();\n    }\n    else if (element.parentNode.classList.contains('project')) {\n      editProject(projectIndex, title.value, color.value);\n      loadProjects();\n    }\n    else {\n      if (!date.value) {\n        alert('Date is missing!');\n        return;\n      }\n\n      editTask(taskIndex, title.value, project.selectedIndex, date.value, priority.value, description.value);\n      loadTasks(activeProjectIndex);\n    }\n\n    dialog.remove();\n  });\n\n  dialog.appendChild(form);\n  document.body.appendChild(dialog);\n}\n\nfunction sidebarLinkEH (element) {\n  const links = document.querySelectorAll('#sidebar a');\n  links.forEach(link => link.classList.remove('active'));\n  element.classList.add('active');\n\n  if (element.id === 'all') {\n    document.querySelector('#content .heading').textContent = 'All Tasks';\n    loadTasks();\n  }\n  else if (element.id === 'today') {\n    document.querySelector('#content .heading').textContent = 'Today';\n    loadTasks(-1);\n  }\n  else {\n    const projectIndex = [...element.parentNode.parentNode.childNodes].indexOf(element.parentNode);\n    document.querySelector('#content .heading').textContent = data.projects[projectIndex].title;\n    loadTasks(projectIndex);\n  }\n}\n\nfunction removeButtonEH (element) {\n  if (element.parentNode.className)\n    removeProject([...element.parentNode.parentNode.childNodes].indexOf(element.parentNode));\n  else\n    removeTask([...element.parentNode.parentNode.parentNode.childNodes].indexOf(element.parentNode.parentNode));\n}\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/GitHub.png":
/*!************************!*\
  !*** ./src/GitHub.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"266ca63177bca6f330a7.png\";\n\n//# sourceURL=webpack://todo/./src/GitHub.png?");

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
/******/ 			id: moduleId,
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;