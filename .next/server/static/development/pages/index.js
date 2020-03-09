module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()('https://xkeith.tech:3000');

const Index = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const chatRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const list = data.map((val, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, val));

  const handleMessage = e => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message !== '') {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  const handleKeyDown = e => {
    if (e.which === 13) {
      handleSend();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    socket.on('chat message', msg => {
      const {
        current
      } = chatRef;
      setData([...data, msg]); // make scrollbar to the bottom

      current.scrollTop = current.scrollHeight;
    }); // must remove the socket when unmounted

    return () => {
      socket.off('chat message');
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3905675761" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3905675761" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    ref: chatRef,
    className: "jsx-3905675761" + " " + "chat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-3905675761" + " " + "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, list)), __jsx("div", {
    className: "jsx-3905675761" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "text",
    value: message,
    onChange: handleMessage,
    onKeyDown: handleKeyDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleSend,
    className: "send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "SEND")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3119147368",
    __self: undefined
  }, "body.jsx-3905675761{margin:0px;}.container.jsx-3905675761{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;}.main.jsx-3905675761{box-sizing:border-box;margin:auto;border:1px black solid;border-radius:10px;height:90vh;width:70%;}.chat.jsx-3905675761{width:100%;height:93%;border-radius:10px 10px 0 0;background-color:pink;overflow:auto;}.input.jsx-3905675761{width:100%;height:7%;border-radius:0 0 10px 10px;border:1px burlywood solid;}.text.jsx-3905675761{width:70%;height:80%;}.send.jsx-3905675761{width:25%;height:80%;margin-left:10px;background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94eHhtcmcvRG93bmxvYWRzL0NvZGUvR2l0L2dhYnJpZWwtY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBR3NCLEFBR0UsQUFJUyxBQVFYLEFBT0EsQUFNRCxBQUlBLFVBSEMsQUFJQSxDQWhDYixBQWVhLEFBT0QsVUFDa0IsQUFNOUIsQUFJbUIsQ0ExQkwsQUFTZ0IsWUFSTCxJQTBCTixXQVZVLENBUEwsS0FrQnhCLEVBMUJxQixlQVNMLEVBZlEsRUFPVixBQWVkLFVBTkEsRUFSWSxRQVBaLEVBUUEiLCJmaWxlIjoiL1VzZXJzL3h4eG1yZy9Eb3dubG9hZHMvQ29kZS9HaXQvZ2FicmllbC1jaGF0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwczovL3hrZWl0aC50ZWNoOjMwMDAnKVxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBjaGF0UmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGxpc3QgPSBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9Pnt2YWx9PC9saT4pXG5cbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgY29uc3QgaGFuZGxlU2VuZCA9ICgpID0+IHtcbiAgICBpZiAobWVzc2FnZSAhPT0gJycpIHtcbiAgICAgIHNvY2tldC5lbWl0KCdjaGF0IG1lc3NhZ2UnLCBtZXNzYWdlKVxuICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgaGFuZGxlU2VuZCgpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ2NoYXQgbWVzc2FnZScsIG1zZyA9PiB7XG4gICAgICBjb25zdCB7IGN1cnJlbnQgfSA9IGNoYXRSZWZcbiAgICAgIHNldERhdGEoWy4uLmRhdGEsIG1zZ10pXG4gICAgICAvLyBtYWtlIHNjcm9sbGJhciB0byB0aGUgYm90dG9tXG4gICAgICBjdXJyZW50LnNjcm9sbFRvcCA9IGN1cnJlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgfSlcbiAgICAvLyBtdXN0IHJlbW92ZSB0aGUgc29ja2V0IHdoZW4gdW5tb3VudGVkXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNvY2tldC5vZmYoJ2NoYXQgbWVzc2FnZScpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdFwiIHJlZj17Y2hhdFJlZn0+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZVwiPntsaXN0fTwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZXNzYWdlfVxuICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kfSBjbGFzc05hbWU9XCJzZW5kXCI+XG4gICAgICAgICAgICAgIFNFTkRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MyU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA3JTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IGJ1cmx5d29vZCBzb2xpZDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAuc2VuZCB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVzc2FnZSBsaTpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmVpZ2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "289336688",
    __self: undefined
  }, ".message{list-style-type:none;margin:0;padding:10px;}.message li:nth-child(odd){background:beige;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94eHhtcmcvRG93bmxvYWRzL0NvZGUvR2l0L2dhYnJpZWwtY2hhdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R3lCLEFBR2dDLEFBS0osaUJBQ25CLElBTFcsU0FDSSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy94eHhtcmcvRG93bmxvYWRzL0NvZGUvR2l0L2dhYnJpZWwtY2hhdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly94a2VpdGgudGVjaDozMDAwJylcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgY2hhdFJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBsaXN0ID0gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57dmFsfTwvbGk+KVxuXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIGNvbnN0IGhhbmRsZVNlbmQgPSAoKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UgIT09ICcnKSB7XG4gICAgICBzb2NrZXQuZW1pdCgnY2hhdCBtZXNzYWdlJywgbWVzc2FnZSlcbiAgICAgIHNldE1lc3NhZ2UoJycpXG4gICAgfVxuICB9XG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBpZiAoZS53aGljaCA9PT0gMTMpIHtcbiAgICAgIGhhbmRsZVNlbmQoKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Lm9uKCdjaGF0IG1lc3NhZ2UnLCBtc2cgPT4ge1xuICAgICAgY29uc3QgeyBjdXJyZW50IH0gPSBjaGF0UmVmXG4gICAgICBzZXREYXRhKFsuLi5kYXRhLCBtc2ddKVxuICAgICAgLy8gbWFrZSBzY3JvbGxiYXIgdG8gdGhlIGJvdHRvbVxuICAgICAgY3VycmVudC5zY3JvbGxUb3AgPSBjdXJyZW50LnNjcm9sbEhlaWdodFxuICAgIH0pXG4gICAgLy8gbXVzdCByZW1vdmUgdGhlIHNvY2tldCB3aGVuIHVubW91bnRlZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKCdjaGF0IG1lc3NhZ2UnKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRcIiByZWY9e2NoYXRSZWZ9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57bGlzdH08L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2VuZH0gY2xhc3NOYW1lPVwic2VuZFwiPlxuICAgICAgICAgICAgICBTRU5EXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogOTMlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNyU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBidXJseXdvb2Qgc29saWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbmQge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lc3NhZ2UgbGk6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJlaWdlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xxxmrg/Downloads/Code/Git/gabriel-chat/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map