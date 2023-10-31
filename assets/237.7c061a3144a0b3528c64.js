"use strict";
(self["webpackChunkstandalone_react_ts"] = self["webpackChunkstandalone_react_ts"] || []).push([[237],{

/***/ 444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1{font-weight:500;color:#fff;font-size:3vw}.ts-div{display:flex;color:#fff;align-items:center;gap:1rem;text-align:center}.ts-div p{margin:0}.ts{width:1.5rem}img{max-width:100%;height:auto;will-change:filter;transition:filter .3s}.react:hover{filter:drop-shadow(0 0 2em rgba(128, 192, 210, 0.6666666667))}.webpack:hover{filter:drop-shadow(0 0 2em rgba(225, 238, 242, 0.6666666667))}.react-div{display:flex;gap:1rem;align-items:center;justify-content:center}.react-div .logo{width:8rem;height:auto}.apps,button{padding:5px 10px;background-color:#444654;border-radius:5px}.buttons{display:flex;align-items:center;margin-top:2rem;gap:.5rem}.buttons :nth-of-type(1),.buttons :nth-of-type(3){cursor:pointer}.buttons :nth-of-type(1):hover,.buttons :nth-of-type(3):hover{background-color:#67686f}button{border:none;color:#fff}.yellow{color:#ffff01}.red{color:#fd3535}.footer{display:flex;justify-content:space-between;align-items:center;position:absolute;bottom:1%;left:1%;right:1%;color:#fff}.footer .github{display:flex;align-items:center;gap:.5rem}.footer .github p{margin:0}.footer .git{filter:drop-shadow(0 0 2em #fcfcfc)}.footer .gitlogo{width:6rem;height:100%;display:flex;align-items:center}.footer .gitlogo img{width:100%;height:auto}.version{font-weight:400}@media(prefers-reduced-motion: no-preference){.react{animation:React-Spins infinite 10s linear}}@keyframes React-Spins{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media screen and (max-width: 1084px){h1{font-size:2.5rem}.react-div{text-align:center;justify-content:center;align-items:center}.buttons{width:100%}}@media screen and (max-width: 730px){.react-div h1{font-size:2rem}}@media screen and (max-width: 630px){.react-div{flex-direction:column;transition:all .5s;text-align:center}}@media screen and (max-width: 498px){.buttons{justify-content:center;align-items:center}}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(787);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/esbuild-loader/dist/index.cjs??ruleSet[1].rules[2].use[3]!./src/assets/css/app.css
var app = __webpack_require__(444);
;// CONCATENATED MODULE: ./src/assets/css/app.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(app/* default */.Z, options);




       /* harmony default export */ const css_app = (app/* default */.Z && app/* default */.Z.locals ? app/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/start.tsx
/* provided dependency */ var React = __webpack_require__(243);
const o=React.lazy(()=>__webpack_require__.e(/* import() */ 138).then(__webpack_require__.bind(__webpack_require__, 138)));function a(){return (0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(o,{})})}


/***/ })

}]);