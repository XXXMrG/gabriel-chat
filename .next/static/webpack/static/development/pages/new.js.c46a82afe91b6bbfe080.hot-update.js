webpackHotUpdate("static/development/pages/new.js",{

/***/ "./pages/new.js":
/*!**********************!*\
  !*** ./pages/new.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat */ "./components/chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
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
});

function HideOnScroll(props) {
  var children = props.children,
      window = props.window; // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  var trigger = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useScrollTrigger"])({
    target: window ? window() : undefined
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
    appear: false,
    direction: "down",
    "in": !trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, children);
}

function Layout(props) {
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.root,
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    elevation: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: classes.chat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
    appear: false,
    direction: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Scroll to Hide App Bar")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_components_chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "sticky",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    className: classes.input,
    label: "Say something...",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Fab"], {
    color: "secondary",
    "aria-label": "add",
    className: classes.fabButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "end",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))))))));
}

/***/ })

})
//# sourceMappingURL=new.js.c46a82afe91b6bbfe080.hot-update.js.map