"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledImage = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var variable = _interopRequireWildcard(require("../../variable"));

var _Image = _interopRequireDefault(require("react-bootstrap/Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledImage = (0, _styledComponents.default)(_Image.default).withConfig({
  displayName: "Imagestyled__StyledImage",
  componentId: "xl0s2m-0"
})(["", " ", " ", ""], function (props) {
  return props.width ? (0, _styledComponents.css)(["width:", ";"], props.width) : (0, _styledComponents.css)(["width:auto;"]);
}, function (props) {
  return props.height ? (0, _styledComponents.css)(["height:", ";"], props.height) : (0, _styledComponents.css)(["height:auto;"]);
}, function (props) {
  return props.filter ? (0, _styledComponents.css)(["filter:", ";"], props.filter) : (0, _styledComponents.css)(["filter:none;"]);
});
exports.StyledImage = StyledImage;