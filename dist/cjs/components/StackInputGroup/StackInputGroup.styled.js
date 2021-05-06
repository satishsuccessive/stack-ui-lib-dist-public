"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledInputGroup = _styledComponents.default.div.withConfig({
  displayName: "StackInputGroupstyled__StyledInputGroup",
  componentId: "sc-12qmlt8-0"
})(["", " ", " ", ""], function (props) {
  return props.bg ? (0, _styledComponents.css)(["background:", " !important;border:1px solid ", ";"], variable.gray700, props.bg) : props.color === "secondary" ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";"], variable.gray600, variable.gray600) : props.color === "success";
}, function (props) {
  return props.disabled ? (0, _styledComponents.css)(["  cursor:not-allowed;& label{cursor:not-allowed !important;}& input{cursor:not-allowed !important;}"]) : (0, _styledComponents.css)([""]);
}, function (props) {
  return props.isError ? (0, _styledComponents.css)(["  & input{box-shadow:rgb(181,39,29) 0px 1px 0px 0px inset;background:rgb(248,217,215);}& .input-group-text{box-shadow:rgb(181,39,29) 0px 1px 0px 0px inset;background:rgb(248,217,215);}& p{padding:5px 8px;color:#d00f0f;}& input::focus{border-color:#eb0d0d;outline:0;box-shadow:0 0 0 0.2rem #ff2f0040;}"]) : (0, _styledComponents.css)([""]);
});

var _default = StyledInputGroup;
exports.default = _default;