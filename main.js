/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.scss */ \"./src/styles/normalize.scss\");\n/* harmony import */ var _styles_font_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/font.scss */ \"./src/styles/font.scss\");\n/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/variables.scss */ \"./src/styles/variables.scss\");\n/* harmony import */ var _styles_grid_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/grid.scss */ \"./src/styles/grid.scss\");\n/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/common.scss */ \"./src/styles/common.scss\");\n/* harmony import */ var _styles_components_buttons_buttons_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/components/buttons/buttons.scss */ \"./src/styles/components/buttons/buttons.scss\");\n/* harmony import */ var _styles_components_main_banner_main_banner_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/components/main_banner/main_banner.scss */ \"./src/styles/components/main_banner/main_banner.scss\");\n/* harmony import */ var _styles_components_socs_socs_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/components/socs/socs.scss */ \"./src/styles/components/socs/socs.scss\");\n/* harmony import */ var _styles_components_faq_faq_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/components/faq/faq.scss */ \"./src/styles/components/faq/faq.scss\");\n/* harmony import */ var _styles_components_carousel_carousel_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/components/carousel/carousel.scss */ \"./src/styles/components/carousel/carousel.scss\");\n/* harmony import */ var _styles_components_faq_block_faq_block_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/components/faq_block/faq_block.scss */ \"./src/styles/components/faq_block/faq_block.scss\");\n/* harmony import */ var _styles_components_reference_reference_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/components/reference/reference.scss */ \"./src/styles/components/reference/reference.scss\");\n/* harmony import */ var _styles_components_faq_page_faq_page_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/components/faq_page/faq_page.scss */ \"./src/styles/components/faq_page/faq_page.scss\");\n/* harmony import */ var _scripts_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/carousel */ \"./src/scripts/carousel.js\");\n/* harmony import */ var _scripts_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scripts_carousel__WEBPACK_IMPORTED_MODULE_13__);\n//styles\n\n\n\n\n //styles components\n\n\n\n\n\n\n\n\n //scripts\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/carousel.js":
/*!*********************************!*\
  !*** ./src/scripts/carousel.js ***!
  \*********************************/
/***/ (function() {

eval("/*\n * PureJSCarousel\n * Author: Vadym Shymko\n * Author URI: https://vadymshymko.github.io\n */\n(function () {\n  \"use strict\";\n\n  window.PureJSCarousel = function (settings) {\n    this.carousel = document.querySelector(settings.carousel);\n    this.slides = this.carousel.querySelectorAll(settings.slide);\n    this.btnNext = this.carousel.querySelector(settings.btnNext) || null;\n    this.btnPrev = this.carousel.querySelector(settings.btnPrev) || null;\n    this.activeIndex = settings.activeIndex || 0;\n    this.oneByOne = settings.oneByOne || false;\n    this.speed = settings.speed || 400;\n    this.delay = settings.delay || 0;\n    this.effect = settings.effect || \"linear\";\n    this.infinite = settings.infinite || false;\n    this.autoplay = settings.autoplay || false;\n    this.autoplayDelay = settings.autoplayDelay || 400;\n    this.autoplayDirection = settings.autoplayDirection || \"next\";\n    this.autoplayTimer = null;\n    this.minPos = null;\n    this.slidesToShow = null;\n    this.maxIndex = null;\n    this.isEnabled = null;\n    this.build();\n  };\n\n  PureJSCarousel.prototype.build = function () {\n    var _ = this,\n        dotsLength,\n        i,\n        windowResizeTimeout,\n        windowWidth = window.innerWidth,\n        windowHeight = window.innerHeight;\n\n    _.minPos = _.carousel.offsetWidth - _.slides.length * _.slides[0].offsetWidth;\n    _.slidesToShow = Math.round(_.carousel.offsetWidth / _.slides[0].offsetWidth);\n    _.maxIndex = 0;\n    _.isEnabled = 1;\n    _.carousel.className += \" purejscarousel\"; //create slides container\n\n    _.slidesContainer = document.createElement(\"div\");\n\n    _.carousel.insertBefore(_.slidesContainer, _.slides[0]);\n\n    _.slidesContainer.className += \" purejscarousel-slides-container\";\n\n    if (_.infinite === true) {\n      _.currentXPos = -(_.slides[0].offsetWidth * _.slides.length);\n      _.slidesContainer.style.transform = \"translateX(\" + _.currentXPos + \"px)\";\n      _.slidesContainer.style.width = _.slides[0].offsetWidth * _.slides.length * 3 + \"px\";\n    } else {\n      _.currentXPos = 0;\n      _.slidesContainer.style.transform = \"translateX(0px)\";\n      _.slidesContainer.style.width = _.slides[0].offsetWidth * _.slides.length + \"px\";\n    }\n\n    if (\"ontouchstart\" in window || navigator.maxTouchPoints) {\n      _.slidesContainer.addEventListener(\"touchstart\", function (event) {\n        this.setAttribute(\"data-start-touch-x\", event.targetTouches[0].pageX);\n        this.setAttribute(\"data-start-margin\", parseInt(_.currentXPos));\n      });\n\n      _.slidesContainer.addEventListener(\"touchmove\", function (event) {\n        this.setAttribute(\"data-active-touch-x\", event.targetTouches[0].pageX);\n        _.currentXPos = parseInt(this.getAttribute(\"data-start-margin\")) + (parseInt(this.getAttribute(\"data-active-touch-x\")) - parseInt(this.getAttribute(\"data-start-touch-x\")));\n        this.style.transform = \"translateX(\" + _.currentXPos + \"px)\";\n      });\n\n      _.slidesContainer.addEventListener(\"touchend\", function () {\n        var direction = parseInt(this.getAttribute(\"data-active-touch-x\")) - parseInt(this.getAttribute(\"data-start-touch-x\")) > 0 ? \"prev\" : \"next\",\n            blockWidth = _.oneByOne === true ? _.slides[0].offsetWidth : _.carousel.offsetWidth;\n\n        if (Math.abs(parseInt(this.getAttribute(\"data-active-touch-x\")) - parseInt(this.getAttribute(\"data-start-touch-x\"))) >= blockWidth / 2) {\n          if (_.infinite === true) {\n            direction === \"next\" ? _.goToNextSlide() : _.goToPrevSlide();\n          } else {\n            if (direction === \"next\" && _.activeIndex < _.maxIndex || direction === \"prev\" && _.activeIndex > 0) {\n              direction === \"next\" ? _.goToNextSlide() : _.goToPrevSlide();\n            } else {\n              if (_.slidesContainer.style.transition !== \"undefined\") {\n                _.slidesContainer.style.transition = \"transform \" + _.speed + \"ms\" + \" \" + _.effect + \" \" + _.delay + \"ms\";\n              }\n\n              _.currentXPos = parseInt(this.getAttribute(\"data-start-margin\"));\n              _.slidesContainer.style.transform = \"translateX(\" + _.currentXPos + \"px)\";\n\n              if (_.slidesContainer.style.transition === \"undefined\") {\n                if (_.slidesContainer.style.transition !== \"undefined\") {\n                  _.slidesContainer.style.transition = null;\n                }\n              } else {\n                setTimeout(function () {\n                  if (_.slidesContainer.style.transition !== \"undefined\") {\n                    _.slidesContainer.style.transition = null;\n                  }\n                }, _.speed + _.delay);\n              }\n            }\n          }\n        } else {\n          if (_.slidesContainer.style.transition !== \"undefined\") {\n            _.slidesContainer.style.transition = \"transform \" + _.speed + \"ms\" + \" \" + _.effect + \" \" + _.delay + \"ms\";\n          }\n\n          _.currentXPos = parseInt(this.getAttribute(\"data-start-margin\"));\n          _.slidesContainer.style.transform = \"translateX(\" + _.currentXPos + \"px)\";\n\n          if (_.slidesContainer.style.transition === \"undefined\") {\n            if (_.slidesContainer.style.transition !== \"undefined\") {\n              _.slidesContainer.style.transition = null;\n            }\n          } else {\n            setTimeout(function () {\n              if (_.slidesContainer.style.transition !== \"undefined\") {\n                _.slidesContainer.style.transition = null;\n              }\n            }, _.speed + _.delay);\n          }\n        }\n      });\n    } //create slides dots\n\n\n    _.dotsContainer = document.createElement(\"div\");\n\n    _.carousel.insertBefore(_.dotsContainer, _.slides[0]);\n\n    _.dotsContainer.className += \" purejscarousel-dots-container\";\n    _.dots = [];\n\n    if (_.oneByOne === true) {\n      if (_.infinite === true) {\n        dotsLength = _.slides.length;\n      } else {\n        dotsLength = (_.slidesContainer.offsetWidth - _.carousel.offsetWidth) / _.slides[0].offsetWidth + 1;\n      }\n    } else {\n      if (_.infinite === true) {\n        dotsLength = Math.ceil(_.slidesContainer.offsetWidth / _.carousel.offsetWidth / 3);\n      } else {\n        dotsLength = Math.ceil(_.slidesContainer.offsetWidth / _.carousel.offsetWidth);\n      }\n    }\n\n    for (i = 0; i < dotsLength; i++) {\n      var dot = document.createElement(\"button\");\n      dot.className = \"purejscarousel-dot\" + (i === 0 ? \" active\" : \"\");\n      dot.setAttribute(\"data-index\", i);\n      dot.setAttribute(\"type\", \"button\");\n      addDotEventListener(dot, _);\n\n      _.dots.push(dot);\n\n      _.dotsContainer.appendChild(dot);\n    }\n\n    _.maxIndex = dotsLength - 1; //create carousel btn-prev\n\n    if (!_.btnPrev) {\n      _.btnPrev = document.createElement(\"button\");\n\n      _.btnPrev.setAttribute(\"class\", \"\");\n\n      _.btnPrev.setAttribute(\"type\", \"button\");\n\n      _.btnPrev.setAttribute(\"data-is-native\", 0);\n\n      _.carousel.insertBefore(_.btnPrev, _.slides[0]);\n    } else {\n      _.btnPrev.setAttribute(\"data-is-native\", 1);\n    }\n\n    _.btnPrev.className += \" purejscarousel-btn purejscarousel-btn-prev\";\n\n    if (window.addEventListener) {\n      _.btnPrev.addEventListener(\"click\", function () {\n        _.goToPrevSlide();\n      });\n    } else if (window.attachEvent) {\n      _.btnPrev.attachEvent(\"onclick\", function () {\n        _.goToPrevSlide();\n      });\n    } else {\n      _.btnPrev.onclick = function () {\n        _.goToPrevSlide();\n      };\n    }\n\n    if (_.activeIndex === 0) {\n      _.btnPrev.disabled = true;\n    } //create carousel btn-next\n\n\n    if (!_.btnNext) {\n      _.btnNext = document.createElement(\"button\");\n\n      _.btnNext.setAttribute(\"class\", \"\");\n\n      _.btnNext.setAttribute(\"type\", \"button\");\n\n      _.btnNext.setAttribute(\"data-is-native\", 0);\n\n      _.carousel.insertBefore(_.btnNext, _.slides[0]);\n    } else {\n      _.btnNext.setAttribute(\"data-is-native\", 1);\n    }\n\n    _.btnNext.className += \" purejscarousel-btn purejscarousel-btn-next\";\n\n    if (window.addEventListener) {\n      _.btnNext.addEventListener(\"click\", function () {\n        _.goToNextSlide();\n      });\n    } else if (window.attachEvent) {\n      _.btnNext.attachEvent(\"onclick\", function () {\n        _.goToNextSlide();\n      });\n    } else {\n      _.btnNext.onclick = function () {\n        _.goToNextSlide();\n      };\n    }\n\n    if (_.activeIndex === _.maxIndex) {\n      _.btnNext.disabled = true;\n    } //build slides\n\n\n    for (i = 0; i < _.slides.length; i++) {\n      _.slides[i].className += \" purejscarousel-slide\";\n\n      _.slidesContainer.appendChild(_.slides[i]);\n    }\n\n    if (_.infinite === true) {\n      for (i = 0; i < _.slides.length; i++) {\n        var slideClone = _.slides[i].cloneNode(true);\n\n        slideClone.className += \" purejscarousel-slide-clone\";\n\n        _.slidesContainer.appendChild(slideClone);\n      }\n\n      for (i = 0; i < _.slides.length; i++) {\n        var slideClone = _.slides[i].cloneNode(true);\n\n        slideClone.className += \" purejscarousel-slide-clone\";\n\n        _.slidesContainer.insertBefore(slideClone, _.slidesContainer.querySelectorAll(\".purejscarousel-slide\")[i]);\n      }\n    }\n\n    if (window.addEventListener) {\n      window.addEventListener(\"resize\", windowResize);\n    } else if (window.attachEvent) {\n      window.attachEvent(\"onresize\", windowResize);\n    } else {\n      window.onresize = windowResize;\n    }\n\n    _.autoplayTimer = _.autoplay === true ? _.autoplayDirection === \"next\" ? setTimeout(function () {\n      _.goToNextSlide();\n    }, _.autoplayDelay) : setTimeout(function () {\n      _.goToPrevSlide();\n    }, _.autoplayDelay) : null;\n\n    function addDotEventListener(d, c) {\n      if (window.addEventListener) {\n        d.addEventListener(\"click\", function () {\n          c.goToSlide(parseInt(this.getAttribute(\"data-index\")));\n        });\n      } else if (window.attachEvent) {\n        d.attachEvent(\"onclick\", function () {\n          c.goToSlide(parseInt(this.getAttribute(\"data-index\")));\n        });\n      } else {\n        d.onclick = function () {\n          c.goToSlide(parseInt(this.getAttribute(\"data-index\")));\n        };\n      }\n    }\n\n    function windowResize() {\n      if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {\n        clearTimeout(windowResizeTimeout);\n        windowResizeTimeout = setTimeout(function () {\n          _.destroy();\n\n          _.build();\n        }, 400);\n      }\n    }\n  };\n\n  PureJSCarousel.prototype.enableControl = function () {\n    var i;\n    this.btnNext.disabled = false;\n    this.btnPrev.disabled = false;\n\n    for (i = 0; i < this.dots.length; i++) {\n      this.dots[i].disabled = false;\n    }\n\n    this.dots[this.activeIndex].disabled = true;\n\n    if (this.infinite === false) {\n      if (this.activeIndex === this.maxIndex) {\n        this.btnNext.disabled = true;\n      }\n\n      if (this.activeIndex === 0) {\n        this.btnPrev.disabled = true;\n      }\n    }\n\n    if (\"ontouchstart\" in window || navigator.maxTouchPoints) {\n      this.slidesContainer.disabled = false;\n    }\n  };\n\n  PureJSCarousel.prototype.disableControl = function () {\n    var i;\n    this.btnNext.disabled = true;\n    this.btnPrev.disabled = true;\n\n    for (i = 0; i < this.dots.length; i++) {\n      this.dots[i].disabled = true;\n    }\n\n    if (\"ontouchstart\" in window || navigator.maxTouchPoints) {\n      this.slidesContainer.disabled = true;\n    }\n  };\n\n  PureJSCarousel.prototype.goToNextSlide = function () {\n    var newActiveIndex;\n\n    if (this.btnNext.disabled === false) {\n      if (this.infinite === true) {\n        newActiveIndex = this.activeIndex + 1 > this.maxIndex ? 0 : this.activeIndex + 1;\n      } else {\n        newActiveIndex = this.activeIndex + 1;\n      }\n\n      this.goToSlide(newActiveIndex, \"next\", \"dirBtn\");\n    }\n  };\n\n  PureJSCarousel.prototype.goToPrevSlide = function () {\n    var newActiveIndex;\n\n    if (this.btnPrev.disabled === false) {\n      if (this.infinite === true) {\n        newActiveIndex = this.activeIndex - 1 < 0 ? this.maxIndex : this.activeIndex - 1;\n      } else {\n        newActiveIndex = this.activeIndex - 1;\n      }\n\n      this.goToSlide(newActiveIndex, \"prev\", \"dirBtn\");\n    }\n  };\n\n  PureJSCarousel.prototype.goToSlide = function (n, dir, trigger) {\n    var _ = this,\n        direction = dir ? dir : n > this.activeIndex ? \"next\" : \"prev\",\n        slidesContainerWidth = this.slidesContainer.offsetWidth / (this.infinite === true ? 3 : 1),\n        blockWidth = this.oneByOne === true ? this.slides[0].offsetWidth : this.carousel.offsetWidth,\n        currentPos = this.infinite === true ? -slidesContainerWidth : Math.max(-blockWidth * this.activeIndex, this.minPos),\n        scrollWidth = trigger === \"dirBtn\" ? blockWidth : Math.abs(blockWidth * (this.activeIndex - n)),\n        slidesCount,\n        newPos;\n\n    if (this.oneByOne === false && (direction === \"next\" && n === this.maxIndex || direction === \"prev\" && this.activeIndex === this.maxIndex)) {\n      scrollWidth = scrollWidth + slidesContainerWidth - (this.maxIndex + 1) * blockWidth;\n    }\n\n    slidesCount = scrollWidth / this.slides[0].offsetWidth;\n\n    if (this.infinite === true) {\n      newPos = direction === \"next\" ? currentPos - scrollWidth : currentPos + scrollWidth;\n    } else {\n      newPos = direction === \"next\" ? Math.max(this.minPos, currentPos - scrollWidth) : Math.min(0, currentPos + scrollWidth);\n    }\n\n    this.disableControl();\n\n    if (\"transition\" in document.body.style) {\n      this.slidesContainer.style.transition = \"transform \" + this.speed + \"ms\" + \" \" + this.effect + \" \" + this.delay + \"ms\";\n    }\n\n    _.currentXPos = newPos;\n    this.slidesContainer.style.transform = \"translateX(\" + _.currentXPos + \"px)\";\n\n    if (\"transition\" in document.body.style) {\n      this.slidesContainer.addEventListener(\"transitionend\", scrollEnd);\n    } else {\n      scrollEnd();\n    }\n\n    function scrollEnd() {\n      var i;\n\n      if (\"transition\" in document.body.style) {\n        _.slidesContainer.style.transition = null;\n\n        _.slidesContainer.removeEventListener(\"transitionend\", scrollEnd);\n      }\n\n      _.dots[_.activeIndex].className = _.dots[_.activeIndex].className.replace(\" active\", \"\");\n      _.activeIndex = n;\n      _.dots[_.activeIndex].className += \" active\";\n\n      if (_.infinite === true) {\n        for (i = 0; i < slidesCount; i++) {\n          if (direction === \"next\") {\n            _.slidesContainer.appendChild(_.slidesContainer.children[0]);\n          } else {\n            _.slidesContainer.insertBefore(_.slidesContainer.lastElementChild, _.slidesContainer.children[0]);\n          }\n        }\n\n        _.currentXPos = -(_.slidesContainer.offsetWidth / 3);\n        _.slidesContainer.style.transform = \"translateX(\" + _.currentXPos + \"px)\";\n      }\n\n      _.enableControl();\n\n      _.autoplayTimer = _.autoplay === true ? _.autoplayDirection === \"next\" ? setTimeout(function () {\n        _.goToNextSlide();\n      }, _.autoplayDelay) : setTimeout(function () {\n        _.goToPrevSlide();\n      }, _.autoplayDelay) : null;\n    }\n  };\n\n  PureJSCarousel.prototype.startAutoplay = function () {\n    _.enableControl();\n\n    _.autoplayTimer = _.autoplay === true ? _.autoplayDirection === \"next\" ? setTimeout(function () {\n      _.goToNextSlide();\n    }, _.autoplayDelay) : setTimeout(function () {\n      _.goToPrevSlide();\n    }, _.autoplayDelay) : null;\n  };\n\n  PureJSCarousel.prototype.stopAutoplay = function () {\n    if (_.autoplay === true) {\n      clearTimeout(_.autoplayTimer);\n      _.autoplayTimer = null;\n    }\n  };\n\n  PureJSCarousel.prototype.destroy = function () {\n    var slideClones, i;\n\n    if (this.isEnabled === 1) {\n      this.isEnabled = 0;\n      this.carousel.className = this.carousel.className.replace(\" purejscarousel\", \"\");\n      this.carousel.removeChild(this.dotsContainer);\n\n      if (this.btnNext.getAttribute(\"data-is-native\").toString() === \"1\") {\n        this.btnNext.className = this.btnNext.className.replace(\" purejscarousel-btn purejscarousel-btn-next\", \"\");\n      } else {\n        this.carousel.removeChild(this.btnNext);\n        this.btnNext = null;\n      }\n\n      if (this.btnPrev.getAttribute(\"data-is-native\").toString() === \"1\") {\n        this.btnPrev.className = this.btnPrev.className.replace(\" purejscarousel-btn purejscarousel-btn-prev\", \"\");\n      } else {\n        this.carousel.removeChild(this.btnPrev);\n        this.btnPrev = null;\n      }\n\n      if (this.infinite === true) {\n        slideClones = this.carousel.querySelectorAll(\".purejscarousel-slide-clone\");\n\n        for (i = 0; i < slideClones.length; i++) {\n          slideClones[i].parentNode.removeChild(slideClones[i]);\n        }\n      }\n\n      for (i = 0; i < this.slides.length; i++) {\n        this.slides[i].className = this.slides[i].className.replace(\" pure-js-carousel-slide\", \"\");\n        this.carousel.insertBefore(this.slides[i], this.slidesContainer);\n      }\n\n      this.carousel.removeChild(this.slidesContainer);\n      this.minPos = null;\n      this.slidesToShow = null;\n      this.maxIndex = null;\n      this.isEnabled = null;\n\n      if (this.autoplay === true) {\n        clearTimeout(this.autoplayTimer);\n        this.autoplayTimer = null;\n      }\n    }\n  };\n})();\n\nvar yourVariable = new PureJSCarousel({\n  carousel: '.carousel',\n  slide: '.carousel-slide'\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/carousel.js?");

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/common.scss?");

/***/ }),

/***/ "./src/styles/components/buttons/buttons.scss":
/*!****************************************************!*\
  !*** ./src/styles/components/buttons/buttons.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/buttons/buttons.scss?");

/***/ }),

/***/ "./src/styles/components/carousel/carousel.scss":
/*!******************************************************!*\
  !*** ./src/styles/components/carousel/carousel.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/carousel/carousel.scss?");

/***/ }),

/***/ "./src/styles/components/faq/faq.scss":
/*!********************************************!*\
  !*** ./src/styles/components/faq/faq.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/faq/faq.scss?");

/***/ }),

/***/ "./src/styles/components/faq_block/faq_block.scss":
/*!********************************************************!*\
  !*** ./src/styles/components/faq_block/faq_block.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/faq_block/faq_block.scss?");

/***/ }),

/***/ "./src/styles/components/faq_page/faq_page.scss":
/*!******************************************************!*\
  !*** ./src/styles/components/faq_page/faq_page.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/faq_page/faq_page.scss?");

/***/ }),

/***/ "./src/styles/components/main_banner/main_banner.scss":
/*!************************************************************!*\
  !*** ./src/styles/components/main_banner/main_banner.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/main_banner/main_banner.scss?");

/***/ }),

/***/ "./src/styles/components/reference/reference.scss":
/*!********************************************************!*\
  !*** ./src/styles/components/reference/reference.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/reference/reference.scss?");

/***/ }),

/***/ "./src/styles/components/socs/socs.scss":
/*!**********************************************!*\
  !*** ./src/styles/components/socs/socs.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/components/socs/socs.scss?");

/***/ }),

/***/ "./src/styles/font.scss":
/*!******************************!*\
  !*** ./src/styles/font.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/font.scss?");

/***/ }),

/***/ "./src/styles/grid.scss":
/*!******************************!*\
  !*** ./src/styles/grid.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/grid.scss?");

/***/ }),

/***/ "./src/styles/normalize.scss":
/*!***********************************!*\
  !*** ./src/styles/normalize.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/normalize.scss?");

/***/ }),

/***/ "./src/styles/variables.scss":
/*!***********************************!*\
  !*** ./src/styles/variables.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/variables.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;