module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(8);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';

var head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, props.title || ''), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(9);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./components/Steps.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Steps_Steps =
/*#__PURE__*/
function (_Component) {
  _inherits(Steps, _Component);

  function Steps() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Steps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Steps.__proto__ || Object.getPrototypeOf(Steps)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(step) {
        return function (e) {
          e.preventDefault();

          _this.props.changeStep(step);
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "getStepClassName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(step) {
        return external__classnames__default()("step", {
          "is-active": _this.props.steps[step].isActive,
          "is-completed": _this.props.steps[step].isCompleted
        });
      }
    }), _temp));
  }

  _createClass(Steps, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var steps = this.props.steps;
      return external__react__default.a.createElement("div", {
        className: "jsx-3859006602" + " " + "steps mb-4"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "3859006602",
        css: [".steps.jsx-3859006602{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".step.jsx-3859006602{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".step.jsx-3859006602:not(:first-child)::before{height:.2em;width:100%;bottom:0;left:-50%;top:1rem;content:\" \";display:block;position:absolute;background:#b5b5b5;}", ".step__marker.jsx-3859006602{width:35px;height:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;font-weight:700;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#b5b5b5;color:#fff;border:4px solid #fff;z-index:1;}", ".step.is-completed.jsx-3859006602:not(:first-child)::before{background:#f26120;}", ".step.is-completed.jsx-3859006602 .step__marker.jsx-3859006602{background:#f26120;border:4px solid #f26120;}", ".step.is-active.jsx-3859006602:not(:first-child)::before{background:#f26120;}", ".step.is-active.jsx-3859006602 .step__marker.jsx-3859006602{background:#19ddfe;border:4px solid #f26120;}", ".step__title.jsx-3859006602{font-weight:700;}"]
      }), steps.map(function (step, index) {
        return external__react__default.a.createElement("div", {
          key: step.name,
          className: "jsx-3859006602" + " " + (_this2.getStepClassName(index) || "")
        }, external__react__default.a.createElement("div", {
          className: "jsx-3859006602" + " " + "step__marker"
        }, index + 1));
      }));
    }
  }]);

  return Steps;
}(external__react_["Component"]);

/* harmony default export */ var components_Steps = (Steps_Steps); // WEBPACK FOOTER //
// ./src/components/Steps.jsx
// CONCATENATED MODULE: ./components/NavigationBottom.jsx
function NavigationBottom__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavigationBottom__typeof = function _typeof(obj) { return typeof obj; }; } else { NavigationBottom__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavigationBottom__typeof(obj); }

function NavigationBottom__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavigationBottom__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavigationBottom__createClass(Constructor, protoProps, staticProps) { if (protoProps) NavigationBottom__defineProperties(Constructor.prototype, protoProps); if (staticProps) NavigationBottom__defineProperties(Constructor, staticProps); return Constructor; }

function NavigationBottom__possibleConstructorReturn(self, call) { if (call && (NavigationBottom__typeof(call) === "object" || typeof call === "function")) { return call; } return NavigationBottom__assertThisInitialized(self); }

function NavigationBottom__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavigationBottom__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NavigationBottom_NavigationBottom =
/*#__PURE__*/
function (_Component) {
  NavigationBottom__inherits(NavigationBottom, _Component);

  function NavigationBottom() {
    NavigationBottom__classCallCheck(this, NavigationBottom);

    return NavigationBottom__possibleConstructorReturn(this, (NavigationBottom.__proto__ || Object.getPrototypeOf(NavigationBottom)).apply(this, arguments));
  }

  NavigationBottom__createClass(NavigationBottom, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          goNextStep = _props.goNextStep,
          goPrevStep = _props.goPrevStep,
          activeStep = _props.activeStep;
      return external__react__default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, activeStep !== 3 ? external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("button", {
        type: "button",
        className: "btn btn-light mr-4",
        onClick: goPrevStep,
        disabled: activeStep === 0
      }, "Previous"), external__react__default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        onClick: goNextStep
      }, "Next")) : external__react__default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: function onClick() {
          window.location.reload();
        }
      }, "Reset"));
    }
  }]);

  return NavigationBottom;
}(external__react_["Component"]);

/* harmony default export */ var components_NavigationBottom = (NavigationBottom_NavigationBottom); // WEBPACK FOOTER //
// ./src/components/NavigationBottom.jsx
// CONCATENATED MODULE: ./components/Field.jsx



var Field_Field = function Field(props) {
  var labelText = props.labelText,
      type = props.type,
      id = props.id,
      name = props.name,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      error = props.error;
  return external__react__default.a.createElement("div", {
    className: "jsx-2104446990" + " " + "form-group"
  }, external__react__default.a.createElement(style__default.a, {
    styleId: "2104446990",
    css: [".invalid-feedback.jsx-2104446990{display:block;}", ".form-control--error.jsx-2104446990{border-color:#dc3545;}"]
  }), external__react__default.a.createElement("label", {
    htmlFor: id,
    className: "jsx-2104446990"
  }, labelText), external__react__default.a.createElement("input", {
    type: type,
    id: id,
    placeholder: placeholder,
    value: value,
    name: name,
    onChange: onChange,
    autoComplete: "false",
    className: "jsx-2104446990" + " " + "form-control ".concat(error ? "form-control--error" : null)
  }), error ? external__react__default.a.createElement("div", {
    className: "jsx-2104446990" + " " + "invalid-feedback"
  }, error) : null);
};

/* harmony default export */ var components_Field = (Field_Field);
// CONCATENATED MODULE: ./components/steps/CommonData.jsx


function CommonData__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CommonData__typeof = function _typeof(obj) { return typeof obj; }; } else { CommonData__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CommonData__typeof(obj); }

function CommonData__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommonData__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommonData__createClass(Constructor, protoProps, staticProps) { if (protoProps) CommonData__defineProperties(Constructor.prototype, protoProps); if (staticProps) CommonData__defineProperties(Constructor, staticProps); return Constructor; }

function CommonData__possibleConstructorReturn(self, call) { if (call && (CommonData__typeof(call) === "object" || typeof call === "function")) { return call; } return CommonData__assertThisInitialized(self); }

function CommonData__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CommonData__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CommonData_CommonData =
/*#__PURE__*/
function (_Component) {
  CommonData__inherits(CommonData, _Component);

  function CommonData() {
    CommonData__classCallCheck(this, CommonData);

    return CommonData__possibleConstructorReturn(this, (CommonData.__proto__ || Object.getPrototypeOf(CommonData)).apply(this, arguments));
  }

  CommonData__createClass(CommonData, [{
    key: "render",
    value: function render() {
      // console.log(this.props.props.values);
      var _props = this.props,
          _props$values = _props.values,
          firstName = _props$values.firstName,
          lastName = _props$values.lastName,
          password = _props$values.password,
          repeatPassword = _props$values.repeatPassword,
          gender = _props$values.gender,
          errors = _props.errors,
          onChange = _props.onChange;
      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(style__default.a, {
        styleId: "3319108237",
        css: [".form-group__radio.jsx-3319108237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-ms-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".form-group__radio-input.jsx-3319108237+label.jsx-3319108237{margin:0 0 0 10px;}"]
      }), external__react__default.a.createElement(components_Field, {
        labelText: "First name",
        type: "text",
        id: "firstName",
        placeholder: "Enter first name",
        value: firstName,
        name: "firstName",
        onChange: onChange,
        error: errors.firstName
      }), external__react__default.a.createElement(components_Field, {
        labelText: "Last name",
        type: "text",
        id: "lastName",
        placeholder: "Enter last name",
        value: lastName,
        name: "lastName",
        onChange: onChange,
        error: errors.lastName
      }), external__react__default.a.createElement(components_Field, {
        labelText: "Password",
        type: "password",
        id: "password",
        placeholder: "Enter password",
        value: password,
        name: "password",
        onChange: onChange,
        error: errors.password
      }), external__react__default.a.createElement(components_Field, {
        labelText: "Repeat password",
        type: "password",
        id: "repeatPassword",
        placeholder: "Repeat password",
        value: repeatPassword,
        name: "repeatPassword",
        onChange: onChange,
        error: errors.repeatPassword
      }), external__react__default.a.createElement("div", {
        className: "jsx-3319108237" + " " + "form-group"
      }, external__react__default.a.createElement("div", {
        className: "jsx-3319108237"
      }, "Your sex:"), external__react__default.a.createElement("div", {
        className: "jsx-3319108237" + " " + "form-group__radio"
      }, external__react__default.a.createElement("input", {
        type: "radio",
        id: "male",
        name: "gender",
        value: "male",
        checked: gender === "male",
        onChange: onChange,
        className: "jsx-3319108237" + " " + "form-group__radio-input"
      }), external__react__default.a.createElement("label", {
        htmlFor: "male",
        className: "jsx-3319108237"
      }, "male")), external__react__default.a.createElement("div", {
        className: "jsx-3319108237" + " " + "form-group__radio"
      }, external__react__default.a.createElement("input", {
        type: "radio",
        id: "female",
        name: "gender",
        value: "female",
        checked: gender === "female",
        onChange: onChange,
        className: "jsx-3319108237" + " " + "form-group__radio-input"
      }), external__react__default.a.createElement("label", {
        htmlFor: "female",
        className: "jsx-3319108237"
      }, "female"))));
    }
  }]);

  return CommonData;
}(external__react_["Component"]);

/* harmony default export */ var steps_CommonData = (CommonData_CommonData);
// CONCATENATED MODULE: ./data/countries.js
/* harmony default export */ var countries = ([{
  id: 1,
  name: "Ukraine"
}, {
  id: 2,
  name: "Germany"
}, {
  id: 3,
  name: "France"
}, {
  id: 4,
  name: "Spain"
}, {
  id: 5,
  name: "USA"
}]);
// CONCATENATED MODULE: ./data/cities.js
/* harmony default export */ var cities = ({
  "1": {
    country: 1,
    name: "Kyiv"
  },
  "2": {
    country: 1,
    name: "Lviv"
  },
  "3": {
    country: 1,
    name: "Odessa"
  },
  "4": {
    country: 1,
    name: "Dnipro"
  },
  "5": {
    country: 1,
    name: "Kharkiv"
  },
  "6": {
    country: 2,
    name: "Berlin"
  },
  "7": {
    country: 2,
    name: "Dortmund"
  },
  "8": {
    country: 2,
    name: "Drezden"
  },
  "9": {
    country: 2,
    name: "Hamburg"
  },
  "10": {
    country: 2,
    name: "Koln"
  },
  "11": {
    country: 3,
    name: "Paris"
  },
  "12": {
    country: 3,
    name: "Lyon"
  },
  "13": {
    country: 3,
    name: "Toulouse"
  },
  "14": {
    country: 3,
    name: "Marseille"
  },
  "15": {
    country: 3,
    name: "Bordeaux"
  },
  "16": {
    country: 4,
    name: "Madrid"
  },
  "17": {
    country: 4,
    name: "Barcelona"
  },
  "18": {
    country: 4,
    name: "Sevilla"
  },
  "19": {
    country: 4,
    name: "Bilbo"
  },
  "20": {
    country: 4,
    name: "Malaga"
  },
  "21": {
    country: 5,
    name: "Washington"
  },
  "22": {
    country: 5,
    name: "San-Francisco"
  },
  "23": {
    country: 5,
    name: "New-York"
  },
  "24": {
    country: 5,
    name: "Las-Vegas"
  },
  "25": {
    country: 5,
    name: "Miami"
  }
});
// CONCATENATED MODULE: ./components/steps/Contacts.jsx


function Contacts__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Contacts__typeof = function _typeof(obj) { return typeof obj; }; } else { Contacts__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Contacts__typeof(obj); }

function Contacts__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Contacts__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Contacts__createClass(Constructor, protoProps, staticProps) { if (protoProps) Contacts__defineProperties(Constructor.prototype, protoProps); if (staticProps) Contacts__defineProperties(Constructor, staticProps); return Constructor; }

function Contacts__possibleConstructorReturn(self, call) { if (call && (Contacts__typeof(call) === "object" || typeof call === "function")) { return call; } return Contacts__assertThisInitialized(self); }

function Contacts__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Contacts__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Contacts_Contacts =
/*#__PURE__*/
function (_Component) {
  Contacts__inherits(Contacts, _Component);

  function Contacts() {
    var _ref;

    var _temp, _this;

    Contacts__classCallCheck(this, Contacts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Contacts__possibleConstructorReturn(_this, (_temp = _this = Contacts__possibleConstructorReturn(this, (_ref = Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Contacts__assertThisInitialized(_this), "addPassiveEventListener", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(items) {
        items.addEventListener('touchstart', handler, {
          passive: true
        });
      }
    }), Object.defineProperty(Contacts__assertThisInitialized(_this), "getOptionItems", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(items) {
        return items.map(function (item) {
          return external__react__default.a.createElement("option", {
            key: item.id,
            value: item.id
          }, item.name);
        });
      }
    }), Object.defineProperty(Contacts__assertThisInitialized(_this), "getCitiesList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(country) {
        var citiesList = [];

        for (var key in cities) {
          if (cities[key].country === Number(country)) {
            citiesList.push({
              id: key,
              name: cities[key].name
            });
          }
        }

        return citiesList;
      }
    }), _temp));
  }

  Contacts__createClass(Contacts, [{
    key: "render",
    value: function render() {
      // console.log(this.props.props);
      var _props = this.props,
          _props$values = _props.values,
          email = _props$values.email,
          phone = _props$values.phone,
          country = _props$values.country,
          city = _props$values.city,
          errors = _props.errors,
          onChange = _props.onChange,
          getOptionItems = this.getOptionItems,
          getCitiesList = this.getCitiesList;
      var citiesList = getCitiesList(country);
      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(style__default.a, {
        styleId: "223867293",
        css: [".invalid-feedback.jsx-223867293{display:block;}", ".form-control--error.jsx-223867293{border-color:#dc3545;}"]
      }), external__react__default.a.createElement(components_Field, {
        labelText: "E-mail:",
        type: "text",
        id: "email",
        placeholder: "Enter your e-mail",
        value: email,
        name: "email",
        onChange: onChange,
        error: errors.email
      }), external__react__default.a.createElement(components_Field, {
        labelText: "Phone number:",
        type: "text",
        id: "phone",
        placeholder: "Enter your phone number",
        value: phone,
        name: "phone",
        onChange: onChange,
        error: errors.phone
      }), external__react__default.a.createElement("div", {
        className: "jsx-223867293" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        htmlFor: "country",
        className: "jsx-223867293"
      }, "Country:"), external__react__default.a.createElement("select", {
        id: "country",
        name: "country",
        value: country,
        onChange: onChange,
        className: "jsx-223867293" + " " + "form-control ".concat(errors.country ? "form-control--error" : null)
      }, external__react__default.a.createElement("option", {
        value: "",
        className: "jsx-223867293"
      }, "Select country"), getOptionItems(countries)), errors.country ? external__react__default.a.createElement("div", {
        className: "jsx-223867293" + " " + "invalid-feedback"
      }, errors.country) : null), external__react__default.a.createElement("div", {
        className: "jsx-223867293" + " " + "form-group"
      }, external__react__default.a.createElement("label", {
        htmlFor: "country",
        className: "jsx-223867293"
      }, "City:"), external__react__default.a.createElement("select", {
        id: "city",
        name: "city",
        value: city,
        onChange: onChange,
        className: "jsx-223867293" + " " + "form-control ".concat(errors.city ? "form-control--error" : null)
      }, external__react__default.a.createElement("option", {
        value: "",
        className: "jsx-223867293"
      }, "Select city"), getOptionItems(citiesList)), errors.city ? external__react__default.a.createElement("div", {
        className: "jsx-223867293" + " " + "invalid-feedback"
      }, errors.city) : null));
    }
  }]);

  return Contacts;
}(external__react_["Component"]);

/* harmony default export */ var steps_Contacts = (Contacts_Contacts);
// CONCATENATED MODULE: ./components/steps/Avatar.jsx


function Avatar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Avatar__typeof = function _typeof(obj) { return typeof obj; }; } else { Avatar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Avatar__typeof(obj); }

function Avatar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Avatar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Avatar__createClass(Constructor, protoProps, staticProps) { if (protoProps) Avatar__defineProperties(Constructor.prototype, protoProps); if (staticProps) Avatar__defineProperties(Constructor, staticProps); return Constructor; }

function Avatar__possibleConstructorReturn(self, call) { if (call && (Avatar__typeof(call) === "object" || typeof call === "function")) { return call; } return Avatar__assertThisInitialized(self); }

function Avatar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Avatar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Avatar_Avatar =
/*#__PURE__*/
function (_Component) {
  Avatar__inherits(Avatar, _Component);

  function Avatar() {
    var _ref;

    var _temp, _this;

    Avatar__classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Avatar__possibleConstructorReturn(_this, (_temp = _this = Avatar__possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Avatar__assertThisInitialized(_this), "onChangeAvatar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            avatarName = _this$props.values.avatarName;
        var reader = new FileReader();

        reader.onload = function (event) {
          onChange({
            target: {
              name: "avatar",
              value: event.target.result
            }
          });
        };

        onChange({
          target: {
            name: "avatarName",
            value: event.target.files[0].name
          }
        });
        reader.readAsDataURL(event.target.files[0]);
      }
    }), _temp));
  }

  Avatar__createClass(Avatar, [{
    key: "render",
    value: function render() {
      // console.log(this.props.values);
      var _props = this.props,
          _props$values = _props.values,
          avatar = _props$values.avatar,
          avatarName = _props$values.avatarName,
          errors = _props.errors,
          onChangeAvatar = this.onChangeAvatar;
      var defaultIconSrc = '../static/default-avatar.png';
      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(style__default.a, {
        styleId: "4129569253",
        css: [".user-icon.jsx-4129569253{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".user-icon.jsx-4129569253 img.jsx-4129569253{max-width:100%;}", ".invalid-feedback.jsx-4129569253{display:block;}", ".custom-file-label--error.jsx-4129569253{border-color:#dc3545;}"]
      }), external__react__default.a.createElement("div", {
        className: "jsx-4129569253" + " " + "mb-4 user-icon"
      }, external__react__default.a.createElement("img", {
        src: avatar ? avatar : defaultIconSrc,
        alt: "user_icon",
        className: "jsx-4129569253"
      })), external__react__default.a.createElement("div", {
        className: "jsx-4129569253" + " " + "mb-4"
      }, external__react__default.a.createElement("div", {
        className: "jsx-4129569253" + " " + "custom-file"
      }, external__react__default.a.createElement("input", {
        type: "file",
        id: "avatar",
        name: "avatar",
        onChange: onChangeAvatar,
        className: "jsx-4129569253" + " " + "custom-file-input"
      }), external__react__default.a.createElement("label", {
        htmlFor: "avatar",
        className: "jsx-4129569253" + " " + "custom-file-label  ".concat(errors.avatar ? "custom-file-label--error" : null)
      }, avatarName ? avatarName : 'Choose avatar')), errors.avatar ? external__react__default.a.createElement("div", {
        className: "jsx-4129569253" + " " + "invalid-feedback"
      }, errors.avatar) : null));
    }
  }]);

  return Avatar;
}(external__react_["Component"]);

/* harmony default export */ var steps_Avatar = (Avatar_Avatar);
// CONCATENATED MODULE: ./components/steps/Result.jsx
function Result__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Result__typeof = function _typeof(obj) { return typeof obj; }; } else { Result__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Result__typeof(obj); }

function Result__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Result__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Result__createClass(Constructor, protoProps, staticProps) { if (protoProps) Result__defineProperties(Constructor.prototype, protoProps); if (staticProps) Result__defineProperties(Constructor, staticProps); return Constructor; }

function Result__possibleConstructorReturn(self, call) { if (call && (Result__typeof(call) === "object" || typeof call === "function")) { return call; } return Result__assertThisInitialized(self); }

function Result__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Result__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Result_Result =
/*#__PURE__*/
function (_Component) {
  Result__inherits(Result, _Component);

  function Result() {
    Result__classCallCheck(this, Result);

    return Result__possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
  }

  Result__createClass(Result, [{
    key: "render",
    value: function render() {
      var _props$values = this.props.values,
          firstName = _props$values.firstName,
          lastName = _props$values.lastName,
          gender = _props$values.gender,
          phone = _props$values.phone,
          email = _props$values.email,
          country = _props$values.country,
          city = _props$values.city,
          avatar = _props$values.avatar;
      var countryName = countries.find(function (item) {
        return item.id === Number(country);
      }).name;
      var cityName = cities[city].name;
      return external__react__default.a.createElement("div", {
        className: "container-fluid"
      }, external__react__default.a.createElement("div", {
        className: "row mb-4"
      }, external__react__default.a.createElement("div", {
        className: "col-4"
      }, external__react__default.a.createElement("img", {
        width: "100%",
        src: avatar,
        alt: "user_icon"
      })), external__react__default.a.createElement("div", {
        className: "col-8 d-flex align-items-center"
      }, external__react__default.a.createElement("h4", null, firstName, " ", lastName))), external__react__default.a.createElement("div", {
        className: "row mb-4"
      }, external__react__default.a.createElement("div", {
        className: "col-12"
      }, external__react__default.a.createElement("p", null, external__react__default.a.createElement("strong", null, "Email:"), " ", email), external__react__default.a.createElement("p", null, external__react__default.a.createElement("strong", null, "Mobile:"), " ", phone), external__react__default.a.createElement("p", null, external__react__default.a.createElement("strong", null, "Location:"), " ", countryName, ", ", cityName))));
    }
  }]);

  return Result;
}(external__react_["Component"]);

/* harmony default export */ var steps_Result = (Result_Result);
// CONCATENATED MODULE: ./components/validate.js
var validate = function validate(values, step) {
  var errors = {};

  switch (step) {
    case 0:
      if (!values.firstName) {
        errors.firstName = "required";
      }

      if (values.firstName && values.firstName.length < 2) {
        errors.firstName = "Single letter it`s not your name, bro!";
      }

      if (!values.lastName) {
        errors.lastName = "required";
      }

      if (values.lastName && values.lastName.length < 2) {
        errors.lastName = "Single letter it`s not your surname, bro!";
      }

      if (!values.password) {
        errors.password = "required";
      }

      if (values.password && values.password.length < 5) {
        errors.password = "It`s too simple password, bro!";
      }

      if (values.repeatPassword != values.password) {
        errors.repeatPassword = "Must be equal password, bro!";
      }

      break;

    case 1:
      if (!values.email) {
        errors.email = "required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid e-mail address, bro!";
      }

      if (!values.phone) {
        errors.phone = "required";
      } else if (!/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(values.phone)) {
        errors.phone = "Invalid phone number, bro!";
      }

      if (!values.country) {
        errors.country = "Select your country, bro!";
      }

      if (!values.city) {
        errors.city = "Select your city, bro!";
      }

      break;

    case 2:
      if (!values.avatar) {
        errors.avatar = "Download your photo, bro!";
      }

      break;

    default:
      break;
  }

  return errors;
};

/* harmony default export */ var components_validate = (validate);
// CONCATENATED MODULE: ./components/App.jsx


function App__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App__typeof = function _typeof(obj) { return typeof obj; }; } else { App__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App__typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function App__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App__createClass(Constructor, protoProps, staticProps) { if (protoProps) App__defineProperties(Constructor.prototype, protoProps); if (staticProps) App__defineProperties(Constructor, staticProps); return Constructor; }

function App__possibleConstructorReturn(self, call) { if (call && (App__typeof(call) === "object" || typeof call === "function")) { return call; } return App__assertThisInitialized(self); }

function App__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function App__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var App_App =
/*#__PURE__*/
function (_Component) {
  App__inherits(App, _Component);

  function App(props) {
    var _this;

    App__classCallCheck(this, App);

    _this = App__possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    Object.defineProperty(App__assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        // console.log(event.target.name, event.target.value);
        var newValues = _objectSpread({}, _this.state.values, _defineProperty({}, event.target.name, event.target.value));

        var newErrors = _objectSpread({}, _this.state.errors, _defineProperty({}, event.target.name, false));

        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            values: newValues,
            errors: newErrors
          });
        });
      }
    });
    Object.defineProperty(App__assertThisInitialized(_this), "goNextStep", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var errors = components_validate(_this.state.values, _this.state.activeStep);

        if (Object.keys(errors).length === 0) {
          var newSteps = _toConsumableArray(_this.state.steps);

          var newActiveStes = _this.state.activeStep + 1;
          newSteps[_this.state.activeStep].isActive = false;
          newSteps[newActiveStes].isActive = true;
          newSteps[_this.state.activeStep].isCompleted = true;

          _this.setState({
            activeStep: newActiveStes,
            steps: newSteps
          });
        } else {
          _this.setState({
            errors: errors
          });
        }
      }
    });
    Object.defineProperty(App__assertThisInitialized(_this), "goPrevStep", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var newSteps = _toConsumableArray(_this.state.steps);

        var newActiveStes = _this.state.activeStep - 1;
        newSteps[_this.state.activeStep].isActive = false;
        newSteps[newActiveStes].isActive = true;

        _this.setState({
          activeStep: newActiveStes,
          steps: newSteps
        });
      }
    });
    _this.state = {
      activeStep: 0,
      steps: [{
        name: "Step 1",
        isActive: true,
        isCompleted: false
      }, {
        name: "Step 2",
        isActive: false,
        isCompleted: false
      }, {
        name: "Step 3",
        isActive: false,
        isCompleted: false
      }, {
        name: "Step 4",
        isActive: false,
        isCompleted: false
      }],
      values: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        country: '',
        city: '',
        gender: 'male',
        email: '',
        phone: '',
        avatar: '',
        avatarName: ''
      },
      errors: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false,
        email: false,
        phone: false,
        country: false,
        city: false,
        avatar: false
      }
    };
    return _this;
  }

  App__createClass(App, [{
    key: "render",
    value: function render() {
      // console.log(this.state);
      var onChange = this.onChange,
          onChangeAvatar = this.onChangeAvatar,
          onSubmit = this.onSubmit,
          _state = this.state,
          steps = _state.steps,
          values = _state.values,
          errors = _state.errors,
          activeStep = _state.activeStep;
      return external__react__default.a.createElement("div", {
        className: "jsx-2429876208" + " " + "form-container card"
      }, external__react__default.a.createElement(style__default.a, {
        styleId: "2429876208",
        css: [".form-container.jsx-2429876208{position:absolute;left:50%;min-width:450px;margin-top:20px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".form-group.jsx-2429876208{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".form-group__radio.jsx-2429876208{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-ms-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".form-group__radio-input.jsx-2429876208+label.jsx-2429876208{margin:0 0 0 10px;}", ".btn-primary.jsx-2429876208{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}"]
      }), external__react__default.a.createElement("form", {
        action: "",
        className: "jsx-2429876208" + " " + "form card-body"
      }, external__react__default.a.createElement(components_Steps, {
        steps: steps,
        activeStep: activeStep
      }), steps[0].isActive && external__react__default.a.createElement(steps_CommonData, {
        onChange: onChange,
        values: values,
        errors: errors
      }), steps[1].isActive && external__react__default.a.createElement(steps_Contacts, {
        onChange: onChange,
        values: values,
        errors: errors
      }), steps[2].isActive && external__react__default.a.createElement(steps_Avatar, {
        onChange: onChange,
        values: values,
        errors: errors
      }), steps[3].isActive && external__react__default.a.createElement(steps_Result, {
        values: values
      }), external__react__default.a.createElement(components_NavigationBottom, {
        activeStep: activeStep,
        goNextStep: this.goNextStep,
        goPrevStep: this.goPrevStep
      })));
    }
  }]);

  return App;
}(external__react_["Component"]);

/* harmony default export */ var components_App = (App_App);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(10);
var bootstrap_min_default = /*#__PURE__*/__webpack_require__.n(bootstrap_min);

// CONCATENATED MODULE: ./pages/index.js




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(head, {
    title: "Forms on React.js"
  }), external__react__default.a.createElement(components_App, null));
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);