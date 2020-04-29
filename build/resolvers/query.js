"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var queryObject = {
  AllCountries: function AllCountries(_parent, _args, _ref) {
    var dataSources = _ref.dataSources;
    return dataSources.ncapi.getCountries();
  },
  CountryByID: function CountryByID(_, _ref2, _ref3) {
    var id = _ref2.id;
    var dataSources = _ref3.dataSources;
    return dataSources.ncapi.getCountrybyID(id);
  },
  CountryByIDs: function CountryByIDs(_, _ref4, _ref5) {
    var ids = _ref4.ids;
    var dataSources = _ref5.dataSources;
    // no reseaon to return promise.all since get country by id is not returning promises
    return ids.map(function (id) {
      return dataSources.ncapi.getCountrybyID(id);
    });
  },
  CountryByName: function CountryByName(_, _ref6, _ref7) {
    var name = _ref6.name;
    var dataSources = _ref7.dataSources;
    return dataSources.ncapi.getCountryByName(name);
  },
  CountryByNames: function CountryByNames(_, _ref8, _ref9) {
    var names = _ref8.names;
    var dataSources = _ref9.dataSources;
    return names.map(function (name) {
      return dataSources.ncapi.getCountryByName(name);
    });
  },
  CountryByDate: function () {
    var _CountryByDate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref10, _ref11) {
      var name, date, dataSources, countryObject;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref10.name, date = _ref10.date;
              dataSources = _ref11.dataSources;
              _context.next = 4;
              return dataSources.ncapi.getCountryByName(name);

            case 4:
              countryObject = _context.sent;
              return _context.abrupt("return", _objectSpread({
                daterequested: date
              }, countryObject));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function CountryByDate(_x, _x2, _x3) {
      return _CountryByDate.apply(this, arguments);
    }

    return CountryByDate;
  }(),
  AllStates: function AllStates(_parent, _args, _ref12) {
    var dataSources = _ref12.dataSources;
    return dataSources.ncapi.getStates();
  },
  StateByName: function StateByName(_parent, _ref13, _ref14) {
    var name = _ref13.name;
    var dataSources = _ref14.dataSources;
    console.log(name);
    return dataSources.ncapi.getStatebyName(name);
  },
  StateByNames: function StateByNames(_parent, _ref15, _ref16) {
    var names = _ref15.names;
    var dataSources = _ref16.dataSources;
    // console.log(name)
    return names.map(function (name) {
      return dataSources.ncapi.getStatebyName(name);
    });
  },
  StateByDate: function () {
    var _StateByDate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref17, _ref18) {
      var name, date, dataSources, stateObject;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = _ref17.name, date = _ref17.date;
              dataSources = _ref18.dataSources;
              _context2.next = 4;
              return dataSources.ncapi.getStatebyName(name);

            case 4:
              stateObject = _context2.sent;
              return _context2.abrupt("return", _objectSpread({
                daterequested: date
              }, stateObject));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function StateByDate(_x4, _x5, _x6) {
      return _StateByDate.apply(this, arguments);
    }

    return StateByDate;
  }(),
  AllCounties: function AllCounties(_parent, _args, _ref19) {
    var dataSources = _ref19.dataSources;
    return dataSources.ncapi.getCounties();
  },
  CountyByName: function () {
    var _CountyByName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_parent, _ref20, _ref21) {
      var name, state, dataSources, countyByName;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              name = _ref20.name, state = _ref20.state;
              dataSources = _ref21.dataSources;
              _context3.next = 4;
              return dataSources.ncapi.getCountyByName(name, state);

            case 4:
              countyByName = _context3.sent;

              if (!(countyByName.length > 1)) {
                _context3.next = 7;
                break;
              }

              throw new Error("".concat(state, ",").concat(name, " returns ambiguous query"));

            case 7:
              return _context3.abrupt("return", countyByName[0]);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function CountyByName(_x7, _x8, _x9) {
      return _CountyByName.apply(this, arguments);
    }

    return CountyByName;
  }(),
  CountyByNames: function () {
    var _CountyByNames = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_parent, _ref22, _ref23) {
      var names, states, dataSources, results;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              names = _ref22.names, states = _ref22.states;
              dataSources = _ref23.dataSources;

              if (!(names.length != states.length)) {
                _context5.next = 4;
                break;
              }

              throw new Error("".concat(states, ",").concat(names, "  must be same length"));

            case 4:
              results = names.map( /*#__PURE__*/function () {
                var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, index) {
                  var state, countyByName;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          state = states[index];
                          _context4.next = 3;
                          return dataSources.ncapi.getCountyByName(name, state);

                        case 3:
                          countyByName = _context4.sent;

                          if (!(countyByName.length > 1)) {
                            _context4.next = 6;
                            break;
                          }

                          throw new Error("".concat(state, ",").concat(name, " returns ambiguous query"));

                        case 6:
                          if (countyByName[0] === undefined) {
                            console.error("".concat(state, ",").concat(name, " returns nothing")); // throw new Error(`${state},${name} returns nothing`);
                          }

                          return _context4.abrupt("return", countyByName[0]);

                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x13, _x14) {
                  return _ref24.apply(this, arguments);
                };
              }());
              _context5.next = 7;
              return Promise.all(results);

            case 7:
              return _context5.abrupt("return", _context5.sent);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function CountyByNames(_x10, _x11, _x12) {
      return _CountyByNames.apply(this, arguments);
    }

    return CountyByNames;
  }(),
  CountyByDate: function () {
    var _CountyByDate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_, _ref25, _ref26) {
      var name, state, date, dataSources, countyByName;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              name = _ref25.name, state = _ref25.state, date = _ref25.date;
              dataSources = _ref26.dataSources;
              _context6.next = 4;
              return dataSources.ncapi.getCountyByName(name, state);

            case 4:
              countyByName = _context6.sent;

              if (!(countyByName.length > 1)) {
                _context6.next = 7;
                break;
              }

              throw new Error("".concat(state, ",").concat(name, " returns ambiguous query"));

            case 7:
              return _context6.abrupt("return", _objectSpread({
                daterequested: date
              }, countyByName[0]));

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function CountyByDate(_x15, _x16, _x17) {
      return _CountyByDate.apply(this, arguments);
    }

    return CountyByDate;
  }()
};
var _default = queryObject;
exports["default"] = _default;
//# sourceMappingURL=query.js.map