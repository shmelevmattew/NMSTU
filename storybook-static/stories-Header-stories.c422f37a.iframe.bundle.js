"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[512],{"./src/stories/Header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"Example/Header",component:__webpack_require__("./src/stories/Header.tsx").Y,tags:["autodocs"],parameters:{layout:"fullscreen"}};var LoggedIn={args:{user:{name:"Jane Doe"}}},LoggedOut={};LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",...LoggedIn.parameters?.docs?.source}}},LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}};let __namedExportsOrder=["LoggedIn","LoggedOut"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`,"",{version:3,sources:["webpack://./src/stories/button.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".storybook-button {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\r\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/header.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`,"",{version:3,sources:["webpack://./src/stories/header.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB",sourcesContent:[".storybook-header {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  padding: 15px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.storybook-header svg {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.storybook-header h1 {\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  margin: 6px 0 6px 10px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.storybook-header button + button {\r\n  margin-left: 10px;\r\n}\r\n\r\n.storybook-header .welcome {\r\n  color: #333;\r\n  font-size: 14px;\r\n  margin-right: 10px;\r\n}\r\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/button.css"),options={};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(stories_button.A,options),stories_button.A&&stories_button.A.locals&&stories_button.A.locals;var Button=function(_param){var _param_primary=_param.primary,_param_size=_param.size,backgroundColor=_param.backgroundColor,label=_param.label,props=_object_without_properties(_param,["primary","size","backgroundColor","label"]);return(0,jsx_runtime.jsx)("button",_object_spread_props(_object_spread({type:"button",className:["storybook-button","storybook-button--".concat(void 0===_param_size?"medium":_param_size),void 0!==_param_primary&&_param_primary?"storybook-button--primary":"storybook-button--secondary"].join(" "),style:{backgroundColor:backgroundColor}},props),{children:label}))};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/stories/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/header.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(header.A,options),header.A&&header.A.locals&&header.A.locals;var Header=function(param){var user=param.user,onLogin=param.onLogin,onLogout=param.onLogout,onCreateAccount=param.onCreateAccount;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"storybook-header",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome,"," ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogout,label:"Log out"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.$,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=stories-Header-stories.c422f37a.iframe.bundle.js.map