"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireWildcard(require("./Card.styled"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Card = function Card(props) {
  var color = props.color,
      bgColor = props.bgColor,
      children = props.children,
      cardTitle = props.cardTitle,
      width = props.width,
      alignText = props.alignText,
      alignCard = props.alignCard,
      imgUrl = props.imgUrl,
      subTitle = props.subTitle,
      imgPos = props.imgPos,
      cardMenu = props.cardMenu,
      border = props.border,
      boxShadow = props.boxShadow;

  if (imgPos === "middle") {
    return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor,
      border: border
    }, props), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement(_Card.default.Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react.default.createElement(_Card.StyledCardRight, null, cardMenu), /*#__PURE__*/_react.default.createElement(_Card.default.Subtitle, {
      as: "h6",
      className: "text-muted"
    }, subTitle)), /*#__PURE__*/_react.default.createElement("img", {
      src: imgUrl
    }), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement(_Card.default.Text, null, children)));
  } else if (imgPos === "top") {
    return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react.default.createElement("img", {
      src: imgUrl
    }), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement(_Card.default.Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react.default.createElement(_Card.StyledCardRight, null, cardMenu), /*#__PURE__*/_react.default.createElement(_Card.default.Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react.default.createElement(_Card.default.Text, null, children)));
  } else if (imgPos === "bottom") {
    return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement(_Card.default.Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react.default.createElement(_Card.StyledCardRight, null, cardMenu), /*#__PURE__*/_react.default.createElement(_Card.default.Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react.default.createElement(_Card.default.Text, null, children)), /*#__PURE__*/_react.default.createElement("img", {
      src: imgUrl
    }));
  } else if (imgPos === "bg") {
    return /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react.default.createElement("img", {
      src: imgUrl
    }), /*#__PURE__*/_react.default.createElement(_Card.default.ImgOverlay, null, /*#__PURE__*/_react.default.createElement(_Card.default.Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react.default.createElement(_Card.StyledCardRight, null, cardMenu), /*#__PURE__*/_react.default.createElement(_Card.default.Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react.default.createElement(_Card.default.Text, null, children)));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Card.default, _extends({
      imgUrl: imgUrl,
      color: color,
      bgColor: bgColor
    }, props), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement(_Card.default.Title, {
      as: "h5"
    }, cardTitle), /*#__PURE__*/_react.default.createElement(_Card.StyledCardRight, null, cardMenu), /*#__PURE__*/_react.default.createElement(_Card.default.Subtitle, {
      as: "h6"
    }, subTitle), /*#__PURE__*/_react.default.createElement(_Card.default.Text, null, children)), /*#__PURE__*/_react.default.createElement("img", {
      src: imgUrl
    })));
  }
};

var _default = Card;
exports.default = _default;