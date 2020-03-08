webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('https://xkeith.tech:3000');

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var list = data.map(function (val, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, val);
  });

  var handleMessage = function handleMessage(e) {
    e.preventDefault();
    setMessage(e.target.value);
  };

  var handleSend = function handleSend() {
    if (message !== '') {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.which === 13) {
      handleSend();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    socket.on('chat message', function (msg) {
      console.log(data);
      setData([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [msg]));
    }); // must remove the socket when unmounted

    return function () {
      socket.off('chat message');
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4068916935" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4068916935" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4068916935" + " " + "chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4068916935" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, list)), __jsx("div", {
    className: "jsx-4068916935" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("input", {
    value: message,
    onChange: handleMessage,
    onKeyDown: handleKeyDown,
    className: "jsx-4068916935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("button", {
    onClick: handleSend,
    className: "jsx-4068916935",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "SEND")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3073289150",
    __self: this
  }, "body.jsx-4068916935{margin:0px;}.container.jsx-4068916935{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;}.main.jsx-4068916935{box-sizing:border-box;margin:auto;border:1px black solid;border-radius:10px;height:90vh;width:70%;}.chat.jsx-4068916935{width:100%;height:93%;border-radius:10px 10px 0 0;background-color:pink;overflow:auto;}.input.jsx-4068916935{width:100%;height:7%;border-radius:0 0 10px 10px;border:1px burlywood solid;}input.jsx-4068916935{width:70%;height:80%;}button.jsx-4068916935{width:25%;height:80%;margin-left:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94eHhtcmcvRG93bmxvYWRzL0NvZGUvR2l0L2dhYnJpZWwtY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RGtCLEFBR3NCLEFBR0UsQUFJUyxBQVFYLEFBT0EsQUFNRCxBQUlBLFVBSEMsQUFJQSxDQWhDYixBQWVhLEFBT0QsVUFDa0IsQUFNOUIsQUFJbUIsQ0ExQkwsQUFTZ0IsWUFSTCxJQTBCekIsV0FWNkIsQ0FQTCxPQVJILGVBU0wsRUFmUSxFQU9WLEFBZWQsVUFOQSxFQVJZLFFBUFosRUFRQSIsImZpbGUiOiIvVXNlcnMveHh4bXJnL0Rvd25sb2Fkcy9Db2RlL0dpdC9nYWJyaWVsLWNoYXQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8veGtlaXRoLnRlY2g6MzAwMCcpXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9Pnt2YWx9PC9saT4pXG5cbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgY29uc3QgaGFuZGxlU2VuZCA9ICgpID0+IHtcbiAgICBpZiAobWVzc2FnZSAhPT0gJycpIHtcbiAgICAgIHNvY2tldC5lbWl0KCdjaGF0IG1lc3NhZ2UnLCBtZXNzYWdlKVxuICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgaGFuZGxlU2VuZCgpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ2NoYXQgbWVzc2FnZScsIG1zZyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgc2V0RGF0YShbLi4uZGF0YSwgbXNnXSlcbiAgICB9KVxuICAgIC8vIG11c3QgcmVtb3ZlIHRoZSBzb2NrZXQgd2hlbiB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0Lm9mZignY2hhdCBtZXNzYWdlJylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZVwiPntsaXN0fTwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VuZH0+U0VORDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MyU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA3JTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IGJ1cmx5d29vZCBzb2xpZDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2UgbGk6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJlaWdlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "289336688",
    __self: this
  }, ".message{list-style-type:none;margin:0;padding:10px;}.message li:nth-child(odd){background:beige;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94eHhtcmcvRG93bmxvYWRzL0NvZGUvR2l0L2dhYnJpZWwtY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RnlCLEFBR2dDLEFBS0osaUJBQ25CLElBTFcsU0FDSSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy94eHhtcmcvRG93bmxvYWRzL0NvZGUvR2l0L2dhYnJpZWwtY2hhdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly94a2VpdGgudGVjaDozMDAwJylcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgbGlzdCA9IGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e3ZhbH08L2xpPilcblxuICBjb25zdCBoYW5kbGVNZXNzYWdlID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuICBjb25zdCBoYW5kbGVTZW5kID0gKCkgPT4ge1xuICAgIGlmIChtZXNzYWdlICE9PSAnJykge1xuICAgICAgc29ja2V0LmVtaXQoJ2NoYXQgbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgICBzZXRNZXNzYWdlKCcnKVxuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICBoYW5kbGVTZW5kKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbignY2hhdCBtZXNzYWdlJywgbXNnID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBzZXREYXRhKFsuLi5kYXRhLCBtc2ddKVxuICAgIH0pXG4gICAgLy8gbXVzdCByZW1vdmUgdGhlIHNvY2tldCB3aGVuIHVubW91bnRlZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKCdjaGF0IG1lc3NhZ2UnKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e2xpc3R9PC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlfVxuICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kfT5TRU5EPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGF0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDkzJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDclO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggYnVybHl3b29kIHNvbGlkO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZSBsaTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmVpZ2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.86bf1d78ee86432b6dd9.hot-update.js.map