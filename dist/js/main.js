/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/calculation/calculation.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/calculation/calculation.js ***!
  \*******************************************************/
/***/ (function() {

$(document).ready(function () {
  $('.options-calculation__select1').select2();
});
$(document).ready(function () {
  $('.options-calculation__select2').select2();
});
$(document).ready(function () {
  $('.options-calculation__select3').select2();
});
var defaultValue = 'S²';
var input = document.querySelector(".options-calculation__input-range input");
var value = document.querySelector(".options-calculation__value");
value.innerHTML = defaultValue;
input.addEventListener("input", function () {
  value.value = input.value + 'м²';
});
var swiper = new Swiper(".tabs-calculation__swiper", {
  pagination: {
    el: ".tabs-calculation__pag",
    clickable: true
  },
  allowTouchMove: false,
  effect: 'fade',
  autoHeight: true
});

/***/ }),

/***/ "./src/blocks/modules/examples/examples.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/examples/examples.js ***!
  \*************************************************/
/***/ (function() {

var swiper = new Swiper(".examples__swiper", {
  navigation: {
    prevEl: ".examples__arrow-prev",
    nextEl: ".examples__arrow-next"
  },
  pagination: {
    el: ".examples__pagination",
    clickable: true
  },
  spaceBetween: 40
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

$(document).ready(function () {
  $(document).on('click', '.top-header__burger', function (event) {
    $('.top-header').toggleClass('js-top-header-active');
    $('.bottom-header').toggleClass('js-bottom-header-active');
    $('body').toggleClass('overflow-hidden');
  });
});
$(document).ready(function () {
  $('.header-item-click').on('click', function () {
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 700,
      easing: "linear"
    });
    return false;
  });
});

/***/ }),

/***/ "./src/blocks/modules/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/hero/hero.js ***!
  \*****************************************/
/***/ (function() {

$(document).ready(function () {
  $(document).on('click', '.hero__btn', function (event) {
    $('.popap-hero, .popap-hero-back').addClass('_active');
    $('body').addClass('overflow-hidden');
  });
  $(document).on('click', '.popap-hero-back, .popap-hero__close', function (event) {
    $('.popap-hero, .popap-hero-back').removeClass('_active');
    $('body').removeClass('overflow-hidden');
  });
});

/***/ }),

/***/ "./src/blocks/modules/need/need.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/need/need.js ***!
  \*****************************************/
/***/ (function() {

var swiper = new Swiper(".header-need-swiper", {
  slidesPerView: "auto",
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".content-need-swiper", {
  thumbs: {
    swiper: swiper
  },
  effect: 'fade',
  autoHeight: true,
  allowTouchMove: false
});

function playClipinstruction(media) {
  media.play();
}

function stopClipinstruction(media) {
  media.pause();
}

var need_player = document.getElementById("content-need__player");
var need_img = document.querySelector('.content-need__img');
var need_pause = document.querySelector('.content-need__pause');
var need__play = document.querySelector('.content-need__play-btn');
need_img.addEventListener("click", function (e) {
  playClipinstruction(need_player);
  this.classList.add('hide');
  need__play.classList.add('hide');
});
need_pause.addEventListener("click", function (e) {
  stopClipinstruction(need_player);
  need_img.classList.remove('hide');
  need__play.classList.remove('hide');
});

/***/ }),

/***/ "./src/blocks/modules/news/news.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/news/news.js ***!
  \*****************************************/
/***/ (function() {

var swiper = new Swiper(".news__swiper", {
  navigation: {
    prevEl: ".news__arrow-prev",
    nextEl: ".news__arrow-next"
  },
  slidesPerView: 1,
  breakpoints: {
    769: {
      slidesPerView: '2.5'
    },
    992: {
      slidesPerView: '3'
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/question/question.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/question/question.js ***!
  \*************************************************/
/***/ (function() {

$(document).ready(function () {
  $('input[type="file"].form-question__file-input').change(function () {
    var question_file = $("input[type='file'].form-question__file-input").val();
    $('.js-form-question__file-span').text(question_file);
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/hero/hero */ "./src/blocks/modules/hero/hero.js");
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_hero__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_calculation_calculation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/calculation/calculation */ "./src/blocks/modules/calculation/calculation.js");
/* harmony import */ var _modules_calculation_calculation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_calculation_calculation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_need_need__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/need/need */ "./src/blocks/modules/need/need.js");
/* harmony import */ var _modules_need_need__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_need_need__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_examples_examples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/examples/examples */ "./src/blocks/modules/examples/examples.js");
/* harmony import */ var _modules_examples_examples__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_examples_examples__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_question_question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/question/question */ "./src/blocks/modules/question/question.js");
/* harmony import */ var _modules_question_question__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_question_question__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/news/news */ "./src/blocks/modules/news/news.js");
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_news_news__WEBPACK_IMPORTED_MODULE_7__);









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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=main.js.map