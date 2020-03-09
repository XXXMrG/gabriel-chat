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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chat */ "./components/chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/new.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_9___default()('https://xkeith.tech:3000');
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
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
  var trigger = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useScrollTrigger"])({
    target: target || undefined
  });

  if (target) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Slide"], {
      appear: false,
      direction: "down",
      "in": !trigger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, children);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, children);
}

var fetchData = function fetchData(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

function Layout(props) {
  var classes = useStyles();
  var chat = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      trigger = _useState3[0],
      setTrigger = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      userName = _useState4[0],
      setName = _useState4[1];

  var handleMessage = function handleMessage(e) {
    e.preventDefault();
    setMessage(e.target.value);
  };

  var handleSend = function handleSend() {
    if (message !== '') {
      var messageObject = {
        name: userName,
        message: message
      };
      socket.emit('chat message', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(messageObject));
      setMessage('');
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.which === 13) {
      handleSend();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    socket.on('chat message', function (msg) {
      var _JSON$parse = JSON.parse(msg),
          name = _JSON$parse.name,
          message = _JSON$parse.message;

      var current = chat.current;
      setData([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data), [{
        name: name,
        message: message,
        avatar: "https://api.adorable.io/avatars/285/".concat(name, ".png")
      }])); // make scrollbar to the bottom

      current.scrollTop = current.scrollHeight;
    }); // must remove the socket when unmounted

    return function () {
      socket.off('chat message');
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setTrigger(chat.current);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchData('/api/getName').then(function (res) {
      setName(res.name);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CssBaseline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: classes.root,
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    elevation: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: classes.chat,
    ref: chat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(HideOnScroll, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    target: trigger
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AppBar"], {
    position: "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Gabriel Chat")))), __jsx(_components_chat__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["AppBar"], {
    position: "sticky",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    className: classes.input,
    label: "Say something...",
    color: "secondary",
    value: message,
    onChange: handleMessage,
    onKeyDown: handleKeyDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Fab"], {
    color: "secondary",
    "aria-label": "add",
    className: classes.fabButton,
    onClick: handleSend,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), __jsx("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
    edge: "end",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }))))))));
}

/***/ })

})
//# sourceMappingURL=new.js.8943619639adff7d4fd2.hot-update.js.map