webpackHotUpdate("static/development/pages/new.js",{

/***/ "./components/chat.js":
/*!****************************!*\
  !*** ./components/chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BottomAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/components/chat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable quotes */



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    paper: {
      paddingBottom: 50,
      overflow: 'auto',
      backgroundColor: '#e0f7fa'
    },
    list: {
      marginBottom: theme.spacing(2)
    }
  };
});
function BottomAppBar(props) {
  var classes = useStyles();
  var messages = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: classes.chat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, messages.map(function (_ref, index) {
    var message = _ref.message,
        name = _ref.name,
        avatar = _ref.avatar;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemAvatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      alt: "Profile Picture",
      src: avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: message,
      secondary: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })));
  })))));
}

/***/ })

})
//# sourceMappingURL=new.js.e2e3c167539af3007815.hot-update.js.map