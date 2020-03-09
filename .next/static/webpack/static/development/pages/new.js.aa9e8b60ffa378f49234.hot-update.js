webpackHotUpdate("static/development/pages/new.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/new.js":
/*!**********************!*\
  !*** ./pages/new.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/chat */ "./components/chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  send: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  root: {
    height: '100vh',
    overflow: 'hidden',
    padding: 0
  },
  chat: {
    backgroundColor: '#e0f7fa',
    height: '100vh',
    overflow: 'auto'
  },
  input: {
    width: '75%'
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'linear-gradient(45deg, #e0f7fa 30%, #0097a7 90%)'
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}); // hoc to control app bar hidden

function HideOnScroll(props) {
  var target = props.target,
      children = props.children;
  var trigger = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useScrollTrigger"])({
    target: target || undefined
  });

  if (target) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
      appear: false,
      direction: "down",
      "in": !trigger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, children);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, children);
}

function Layout(props) {
  var classes = useStyles();
  var chat = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      trigger = _useState[0],
      setTrigger = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTrigger(chat.current);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch('/api/getName').then(function (res) {
      console.log(res.json());
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: classes.root,
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    elevation: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: classes.chat,
    ref: chat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(HideOnScroll, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    target: trigger
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Gabriel Chat")))), __jsx(_components_chat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "sticky",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classes.input,
    label: "Say something...",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fab"], {
    color: "secondary",
    "aria-label": "add",
    className: classes.fabButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "end",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))))))));
}

/***/ })

})
//# sourceMappingURL=new.js.aa9e8b60ffa378f49234.hot-update.js.map