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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "./src/public.js":
/*!***********************!*\
  !*** ./src/public.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_compare_images_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/compare-images/styles/style.scss */ "./src/blocks/compare-images/styles/style.scss");
/* harmony import */ var _blocks_compare_images_styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_compare_images_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function init() {
  fixSliders();
  document.addEventListener('mouseup', function () {
    return dragEnd();
  });
  document.addEventListener('touchend', function () {
    return dragEnd();
  });
  addDragListeners('horizontal');
  addDragListeners('vertical');
} //end init()


_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return init();
});

function fixSliders() {
  var blocks = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll(".wp-block-hrb-before-after-images__comparison-wrapper"));

  blocks.forEach(function (block) {
    var position = block.getAttribute('data-position');
    var direction = block.getAttribute('data-direction');
    dragStart(direction, block);

    if ('horizontal' === direction) {
      dragHorizontally(position);
    } else {
      dragVertically(position);
    } //end if


    dragEnd();
  });
} //end fixSliders()


function addDragListeners(direction) {
  var blocks = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll(".wp-block-hrb-before-after-images__comparison-wrapper--".concat(direction, "ly")));

  blocks.forEach(function (block) {
    var handler = block.querySelector('.wp-block-hrb-before-after-images__handler');

    if (!handler) {
      return;
    } //end if


    handler.addEventListener('mousedown', function () {
      return dragStart(direction, block);
    });
    handler.addEventListener('touchstart', function () {
      return dragStart(direction, block);
    });
    block.addEventListener('mousemove', function (ev) {
      return maybeDrag(ev, block);
    });
    block.addEventListener('touchmove', function (ev) {
      return maybeDrag(ev, block);
    });
  });
} //end addDragListeners()


var dragging = {
  isDragging: false
};

function dragStart(direction, block) {
  var handler = block.querySelector('.wp-block-hrb-before-after-images__handler');
  var divider = block.querySelector('.wp-block-hrb-before-after-images__divider');
  var afterImage = block.querySelector('.wp-block-hrb-before-after-images__after-image');
  dragging = {
    afterImage: afterImage,
    block: block,
    direction: direction,
    divider: divider,
    handler: handler,
    isDragging: true
  };
} //end dragStart()


function dragEnd() {
  dragging = {
    isDragging: false
  };
} //end dragEnd()


function maybeDrag(ev, block) {
  if (!dragging.isDragging) {
    return;
  } //end if


  if (block !== dragging.block) {
    return;
  } //end if


  var rect = block.getBoundingClientRect();
  var clientX = undefined !== ev.clientX ? ev.clientX : ev.targetTouches[0].clientX;
  var clientY = undefined !== ev.clientY ? ev.clientY : ev.targetTouches[0].clientY;
  var x = (clientX - rect.left) / rect.width;
  var y = (clientY - rect.top) / rect.height;

  if ('horizontal' === dragging.direction) {
    var position = Math.max(0, Math.min(1, x)) * 100;
    dragHorizontally(position.toFixed(2));
  } else {
    var _position = Math.max(0, Math.min(1, y)) * 100;

    dragVertically(_position.toFixed(2));
  } //end if

} //end maybeDrag()


function dragHorizontally(position) {
  dragging.afterImage.style.width = "".concat(100 - position, "%");
  dragging.divider.style.left = "calc(".concat(position, "% - 1.15em)");
  dragging.handler.style.left = "calc(".concat(position, "% - 1.15em)");
} //end dragHorizontally()


function dragVertically(position) {
  dragging.afterImage.style.height = "".concat(100 - position, "%");
  dragging.divider.style.top = "calc(".concat(position, "% - 1.15em)");
  dragging.handler.style.top = "calc(".concat(position, "% - 1.15em)");
} //end dragVertically()

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ })

/******/ });
//# sourceMappingURL=public.js.map