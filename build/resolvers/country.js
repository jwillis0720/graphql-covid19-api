"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var countryObject = {
  timeline: function () {
    var _timeline = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(country, _, _ref) {
      var dataSources, countryInfo, daterequested, timeLine, miliseconds;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataSources = _ref.dataSources;
              countryInfo = country.countryInfo;
              daterequested = country.daterequested;
              _context.next = 5;
              return dataSources.ncapi.getTimeLinebyCountry(countryInfo);

            case 5:
              timeLine = _context.sent;

              if (!(daterequested === undefined)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", timeLine);

            case 10:
              miliseconds = daterequested.getTime();
              return _context.abrupt("return", timeLine.filter(function (key) {
                return key.date === miliseconds;
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function timeline(_x, _x2, _x3) {
      return _timeline.apply(this, arguments);
    }

    return timeline;
  }(),
  state: function () {
    var _state = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(country, _, _ref2) {
      var dataSources, statesArray;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dataSources = _ref2.dataSources;
              _context2.next = 3;
              return dataSources.ncapi.getStates();

            case 3:
              statesArray = _context2.sent;
              return _context2.abrupt("return", statesArray.filter(function (state) {
                console.log(state.parentcountry);
                return state.parentcountry === country.country;
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function state(_x4, _x5, _x6) {
      return _state.apply(this, arguments);
    }

    return state;
  }()
};
var _default = countryObject;
exports["default"] = _default;
//# sourceMappingURL=country.js.map