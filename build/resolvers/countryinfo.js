"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var countryInfoObject = {
  population: function () {
    var _population = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countryInfo, _, _ref) {
      var dataSources, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataSources = _ref.dataSources;
              _context.next = 3;
              return dataSources.csv.getCountryInfo(countryInfo);

            case 3:
              response = _context.sent;

              if (!(response === undefined)) {
                _context.next = 7;
                break;
              }

              console.log(countryInfo.iso3, 'has no population?');
              return _context.abrupt("return", null);

            case 7:
              return _context.abrupt("return", response['pop_est']);

            case 8:
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
  }() //Have lots of other stuff to choose from in this dataobject

};
var _default = countryInfoObject;
exports["default"] = _default;
//# sourceMappingURL=countryinfo.js.map