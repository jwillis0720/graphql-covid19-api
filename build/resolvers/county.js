"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var countyObject = {
  state: function () {
    var _state = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(county, _, _ref) {
      var dataSources;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataSources = _ref.dataSources;
              _context.next = 3;
              return dataSources.ncapi.getStatebyName(county.statename);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function state(_x, _x2, _x3) {
      return _state.apply(this, arguments);
    }

    return state;
  }(),
  timeline: function () {
    var _timeline = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(county, _, _ref2) {
      var dataSources, countyTimeLine, daterequested;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dataSources = _ref2.dataSources;
              _context2.next = 3;
              return dataSources.ncapi.getCountyTimeLineByState(county);

            case 3:
              countyTimeLine = _context2.sent;
              daterequested = county.daterequested; // console.log(countyTimeLine);

              if (!(daterequested === undefined)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", countyTimeLine);

            case 7:
              return _context2.abrupt("return", countyTimeLine.filter(function (key) {
                return new Date(key.datereadable).getTime() == daterequested.getTime();
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function timeline(_x4, _x5, _x6) {
      return _timeline.apply(this, arguments);
    }

    return timeline;
  }()
};
var _default = countyObject;
exports["default"] = _default;
//# sourceMappingURL=county.js.map