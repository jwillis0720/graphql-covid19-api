"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var countyInfoObject = {
  population: function () {
    var _population = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countyInfo, _, _ref) {
      var dataSources, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataSources = _ref.dataSources;
              _context.next = 3;
              return dataSources.csv.getCountyInfo(countyInfo);

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response[0]["pop"]);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function population(_x, _x2, _x3) {
      return _population.apply(this, arguments);
    }

    return population;
  }(),
  FIPS: function () {
    var _FIPS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(countyInfo, _, _ref2) {
      var dataSources, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dataSources = _ref2.dataSources;
              _context2.next = 3;
              return dataSources.csv.getCountyInfo(countyInfo);

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response[0]["FIPS"]);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function FIPS(_x4, _x5, _x6) {
      return _FIPS.apply(this, arguments);
    }

    return FIPS;
  }(),
  landarea: function () {
    var _landarea = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(countyInfo, _, _ref3) {
      var dataSources, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dataSources = _ref3.dataSources;
              _context3.next = 3;
              return dataSources.csv.getCountyInfo(countyInfo);

            case 3:
              response = _context3.sent;
              return _context3.abrupt("return", response[0]["LandAreami2"]);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function landarea(_x7, _x8, _x9) {
      return _landarea.apply(this, arguments);
    }

    return landarea;
  }()
};
var _default = countyInfoObject;
exports["default"] = _default;
//# sourceMappingURL=countyinfo.js.map