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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/admin.js":
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_compare_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/compare-images */ "./src/blocks/compare-images/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var name = _blocks_compare_images__WEBPACK_IMPORTED_MODULE_1__["name"],
    settings = _blocks_compare_images__WEBPACK_IMPORTED_MODULE_1__["settings"];
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, settings);
var styles = _blocks_compare_images__WEBPACK_IMPORTED_MODULE_1__["styles"] || [];
styles.forEach(function (style) {
  return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockStyle"])(name, style);
});

/***/ }),

/***/ "./src/blocks/compare-images/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/compare-images/block.json ***!
  \**********************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hrb/before-after-images\",\"category\":\"common\",\"attributes\":{\"align\":{\"type\":\"string\"},\"beforeId\":{\"type\":\"number\"},\"beforeUrl\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\".wp-block-hrb-before-after-images__before-image img\",\"attribute\":\"src\"},\"beforeAlt\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\".wp-block-hrb-before-after-images__before-image img\",\"attribute\":\"alt\",\"default\":\"\"},\"afterId\":{\"type\":\"number\"},\"afterUrl\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\".wp-block-hrb-before-after-images__after-image img\",\"attribute\":\"src\"},\"afterAlt\":{\"type\":\"string\",\"source\":\"attribute\",\"selector\":\".wp-block-hrb-before-after-images__after-image img\",\"attribute\":\"alt\",\"default\":\"\"},\"dividerLocation\":{\"type\":\"number\",\"default\":50},\"caption\":{\"type\":\"string\",\"source\":\"html\",\"selector\":\"figcaption\"},\"isVertical\":{\"type\":\"boolean\",\"default\":false},\"sizeSlug\":{\"type\":\"string\"}}}");

/***/ }),

/***/ "./src/blocks/compare-images/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/compare-images/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/compare-images/inspector.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar */ "./src/blocks/compare-images/toolbar.js");


/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies.
 */


/**
 * Internal dependencies.
 */




var EditBlock = function EditBlock(props) {
  var _props$attributes = props.attributes,
      beforeId = _props$attributes.beforeId,
      beforeUrl = _props$attributes.beforeUrl,
      afterId = _props$attributes.afterId,
      afterUrl = _props$attributes.afterUrl,
      isVertical = _props$attributes.isVertical,
      caption = _props$attributes.caption,
      dividerLocation = _props$attributes.dividerLocation,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wp-block-hrb-before-after-images"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__comparison-wrapper', "wp-block-hrb-before-after-images__comparison-wrapper--".concat(isVertical ? 'vertically' : 'horizontally'), {
      'wp-block-hrb-before-after-images__comparison-wrapper--is-image-missing': !beforeId || !afterId
    })
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__before-image', "wp-block-hrb-before-after-images__before-image--".concat(isVertical ? 'vertical' : 'horizontal'))
  }, !beforeId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    allowedTypes: ['image'],
    multiple: false,
    onSelect: function onSelect(image) {
      return setAttributes({
        beforeId: image.id,
        beforeUrl: image.url,
        beforeAlt: image.alt
      });
    },
    value: {
      id: beforeId
    },
    labels: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Before Image', 'text', 'hrb-before-after-images'),
      instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Select an image…', 'text', 'hrb-before-after-images')
    }
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Before Image', 'text', 'hrb-before-after-images'),
    src: beforeUrl
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__after-image', "wp-block-hrb-before-after-images__after-image--".concat(isVertical ? 'vertical' : 'horizontal')),
    style: {
      height: isVertical && beforeId && afterId ? "".concat(100 - dividerLocation, "%") : undefined,
      width: !isVertical && beforeId && afterId ? "".concat(100 - dividerLocation, "%") : undefined
    }
  }, !afterId ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
    allowedTypes: ['image'],
    multiple: false,
    onSelect: function onSelect(image) {
      return setAttributes({
        afterId: image.id,
        afterUrl: image.url,
        afterAlt: image.alt
      });
    },
    value: {
      id: afterId
    },
    labels: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('After Image', 'text', 'hrb-before-after-images'),
      instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Select an image…', 'text', 'hrb-before-after-images')
    }
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('After Image', 'text', 'hrb-before-after-images'),
    src: afterUrl
  })), !!beforeId && !!afterId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__divider', "wp-block-hrb-before-after-images__divider--".concat(isVertical ? 'horizontal' : 'vertical')),
    style: {
      top: isVertical ? "calc(".concat(dividerLocation, "% - 0.5em)") : 0,
      left: !isVertical ? "calc(".concat(dividerLocation, "% - 0.5em)") : 0
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__handler', "wp-block-hrb-before-after-images__handler--".concat(isVertical ? 'horizontal' : 'vertical')),
    style: {
      top: isVertical ? "calc(".concat(dividerLocation, "% - 0.5em)") : undefined,
      left: !isVertical ? "calc(".concat(dividerLocation, "% - 0.5em)") : undefined
    }
  })))), !!beforeId && !!afterId && (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].isEmpty(caption) || isSelected) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "wp-block-hrb-before-after-images__caption",
    tagName: "figcaption",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Write caption…', 'user', 'hrb-before-after-images'),
    value: caption,
    onChange: function onChange(value) {
      return setAttributes({
        caption: value
      });
    },
    inlineToolbar: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditBlock);

/***/ }),

/***/ "./src/blocks/compare-images/index.js":
/*!********************************************!*\
  !*** ./src/blocks/compare-images/index.js ***!
  \********************************************/
/*! exports provided: name, settings, styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/compare-images/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/compare-images/styles/editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/compare-images/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/compare-images/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit */ "./src/blocks/compare-images/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save */ "./src/blocks/compare-images/save.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






var name = _block_json__WEBPACK_IMPORTED_MODULE_6__.name;

var settings = _objectSpread({}, _block_json__WEBPACK_IMPORTED_MODULE_6__, {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Compare Images', 'text', 'hrb-before-after-images'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Compare two images side by side using a slider.', 'user', 'hrb-before-after-images'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
    icon: "image-flip-horizontal"
  }),
  category: 'common',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Image', 'text', 'hrb-before-after-images'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Before', 'text', 'hrb-before-after-images'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('After', 'text', 'hrb-before-after-images'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Slider', 'text', 'hrb-before-after-images')],
  supports: {
    align: true,
    className: true,
    html: false
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var align = attributes.align,
        width = attributes.width;

    if ('left' === align || 'center' === align || 'right' === align || 'wide' === align || 'full' === align) {
      return {
        'data-align': align,
        'data-resized': !!width
      };
    } //end if

  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_7__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_8__["default"]
});
var styles = [];

/***/ }),

/***/ "./src/blocks/compare-images/inspector.js":
/*!************************************************!*\
  !*** ./src/blocks/compare-images/inspector.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies.
 */




var Inspector = function Inspector(_ref) {
  var _ref$attributes = _ref.attributes,
      afterAlt = _ref$attributes.afterAlt,
      beforeAlt = _ref$attributes.beforeAlt,
      dividerLocation = _ref$attributes.dividerLocation,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    initialOpen: true,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Settings', 'text', 'hrb-before-after-images')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Divider Location', 'text', 'hrb-before-after-images'),
    initialPosition: dividerLocation,
    value: dividerLocation,
    onChange: function onChange(value) {
      return setAttributes({
        dividerLocation: value
      });
    },
    min: 1,
    max: 99
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextareaControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Before Image - Alt Text (Alternative Text)', 'text', 'hrb-before-after-images'),
    value: beforeAlt,
    onChange: function onChange(value) {
      return setAttributes({
        beforeAlt: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextareaControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('After Image - Alt Text (Alternative Text)', 'text', 'hrb-before-after-images'),
    value: afterAlt,
    onChange: function onChange(value) {
      return setAttributes({
        afterAlt: value
      });
    },
    help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ExternalLink"], {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Describe the purpose of the images', 'user', 'hrb-before-after-images')), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Leave empty if they’re purely decorative.', 'user', 'hrb-before-after-images'))
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/compare-images/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/compare-images/save.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/**
 * WordPress dependencies.
 */

/**
 * External dependencies.
 */



var SaveBlock = function SaveBlock(_ref) {
  var _ref$attributes = _ref.attributes,
      afterAlt = _ref$attributes.afterAlt,
      afterId = _ref$attributes.afterId,
      afterUrl = _ref$attributes.afterUrl,
      align = _ref$attributes.align,
      beforeAlt = _ref$attributes.beforeAlt,
      beforeId = _ref$attributes.beforeId,
      beforeUrl = _ref$attributes.beforeUrl,
      caption = _ref$attributes.caption,
      isVertical = _ref$attributes.isVertical,
      dividerLocation = _ref$attributes.dividerLocation,
      className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("figure", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "align".concat(align), align))
  }, !!beforeId && !afterId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "wp-image-".concat(beforeId),
    src: beforeUrl,
    alt: beforeAlt
  }), !beforeId && !!afterId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "wp-image-".concat(afterId),
    src: afterUrl,
    alt: afterAlt
  }), !!beforeId && !!afterId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__comparison-wrapper', "wp-block-hrb-before-after-images__comparison-wrapper--".concat(isVertical ? 'vertically' : 'horizontally'), {
      'wp-block-hrb-before-after-images__comparison-wrapper--is-image-missing': !beforeId || !afterId
    }),
    "data-position": dividerLocation,
    "data-direction": isVertical ? 'vertical' : 'horizontal'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__before-image', "wp-block-hrb-before-after-images__before-image--".concat(isVertical ? 'vertical' : 'horizontal'))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "wp-image-".concat(beforeId),
    src: beforeUrl,
    alt: beforeAlt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__after-image', "wp-block-hrb-before-after-images__after-image--".concat(isVertical ? 'vertical' : 'horizontal')),
    style: {
      height: isVertical ? "".concat(100 - dividerLocation, "%") : undefined,
      width: !isVertical ? "".concat(100 - dividerLocation, "%") : undefined
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "wp-image-".concat(afterId),
    src: afterUrl,
    alt: afterAlt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__divider', "wp-block-hrb-before-after-images__divider--".concat(isVertical ? 'horizontal' : 'vertical'))
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wp-block-hrb-before-after-images__handler', "wp-block-hrb-before-after-images__handler--".concat(isVertical ? 'horizontal' : 'vertical'))
  })), !!beforeId && !!afterId && !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].isEmpty(caption) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "figcaption",
    className: "wp-block-hrb-before-after-images__caption",
    value: caption
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveBlock);

/***/ }),

/***/ "./src/blocks/compare-images/styles/editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/compare-images/styles/editor.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/blocks/compare-images/styles/style.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/compare-images/styles/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/blocks/compare-images/toolbar.js":
/*!**********************************************!*\
  !*** ./src/blocks/compare-images/toolbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */



var MediaUploadButton = function MediaUploadButton(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      label = _ref.label,
      _onSelect = _ref.onSelect,
      value = _ref.value;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: function onSelect(media) {
      return _onSelect(media);
    },
    allowedTypes: ['image'],
    multiple: false,
    value: value,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        className: className,
        onClick: open,
        icon: icon,
        label: label
      });
    }
  }));
};

var ToolbarControls = function ToolbarControls(_ref3) {
  var _ref3$attributes = _ref3.attributes,
      isVertical = _ref3$attributes.isVertical,
      beforeId = _ref3$attributes.beforeId,
      afterId = _ref3$attributes.afterId,
      setAttributes = _ref3.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Vertical Comparison', 'text', 'hrb-before-after-images-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('components-icon-button', 'components-toolbar__control', {
      'is-active': isVertical
    }),
    onClick: function onClick() {
      return setAttributes({
        isVertical: !isVertical
      });
    },
    icon: "image-flip-vertical",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Vertical Comparison', 'text', 'hrb-before-after-images')
  }), !!beforeId && !!afterId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadButton, {
    className: "edit-before-image",
    value: beforeId,
    onSelect: function onSelect(image) {
      return setAttributes({
        beforeId: image.id,
        beforeUrl: image.url,
        beforeAlt: image.alt
      });
    },
    icon: "edit",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Change before image…', 'command', 'hrb-before-after-images')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadButton, {
    value: afterId,
    onSelect: function onSelect(image) {
      return setAttributes({
        afterId: image.id,
        afterUrl: image.url,
        afterAlt: image.alt
      });
    },
    icon: "edit",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('Change after image…', 'command', 'hrb-before-after-images')
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ToolbarControls);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map