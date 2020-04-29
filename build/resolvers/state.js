"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var stateObject = {
  timeline: function () {
    var _timeline = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(state, _, _ref) {
      var dataSources, stateTimeLine, daterequested, stateName, stateObj, filteredStateObj, mappedObj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataSources = _ref.dataSources;
              _context.next = 3;
              return dataSources.ncapi.getTimeLinebyState(state.state);

            case 3:
              stateTimeLine = _context.sent;
              daterequested = state.daterequested;

              if (daterequested != undefined) {
                //because these are updated with local times we have to convert the datereadable bakc into a time
                stateTimeLine = stateTimeLine.filter(function (key) {
                  return new Date(key.datereadable).getTime() == daterequested.getTime();
                });
              } ///lets hamefisttedly add a stateobject to the timeline too


              stateName = state.state;
              _context.next = 9;
              return dataSources.csv.getStateInfo();

            case 9:
              stateObj = _context.sent;
              filteredStateObj = stateObj.filter(function (obj) {
                return obj.State.toLowerCase() === stateName.toLowerCase();
              });

              if (!(filteredStateObj.length > 1)) {
                _context.next = 13;
                break;
              }

              throw new Error("".concat(state, ",returns ambiguous for info query"));

            case 13:
              mappedObj = {
                lat: filteredStateObj[0].Latitude,
                lon: filteredStateObj[0].Longitude,
                population: filteredStateObj[0].pop,
                landarea: filteredStateObj[0].LandAreami2
              };
              return _context.abrupt("return", stateTimeLine.map(function (obj) {
                return _objectSpread({
                  stateinfo: mappedObj
                }, obj);
              }));

            case 15:
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
  yesterdayCases: function () {
    var _yesterdayCases = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state, _, _ref2) {
      var dataSources, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dataSources = _ref2.dataSources;
              _context2.next = 3;
              return dataSources.ncapi.getYesterday(state.state);

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.todayCases);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function yesterdayCases(_x4, _x5, _x6) {
      return _yesterdayCases.apply(this, arguments);
    }

    return yesterdayCases;
  }(),
  yesterdayDeaths: function () {
    var _yesterdayDeaths = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(state, _, _ref3) {
      var dataSources, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dataSources = _ref3.dataSources;
              _context3.next = 3;
              return dataSources.ncapi.getYesterday(state.state);

            case 3:
              response = _context3.sent;
              return _context3.abrupt("return", response.todayDeaths);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function yesterdayDeaths(_x7, _x8, _x9) {
      return _yesterdayDeaths.apply(this, arguments);
    }

    return yesterdayDeaths;
  }(),
  county: function () {
    var _county = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(state, __, _ref4) {
      var dataSources, response, filtedResponse;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dataSources = _ref4.dataSources;
              _context4.next = 3;
              return dataSources.ncapi.getCounties();

            case 3:
              response = _context4.sent;
              filtedResponse = response.filter(function (county) {
                return county.province === state.state;
              }).map(function (key) {
                return dataSources.ncapi.reduceCounty(key);
              }); // console.log(filtedResponse);

              return _context4.abrupt("return", filtedResponse);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function county(_x10, _x11, _x12) {
      return _county.apply(this, arguments);
    }

    return county;
  }(),
  info: function () {
    var _info = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(state, _, _ref5) {
      var dataSources, stateName, stateObj, filteredStateObj, mappedObj;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dataSources = _ref5.dataSources;
              stateName = state.state;
              _context5.next = 4;
              return dataSources.csv.getStateInfo();

            case 4:
              stateObj = _context5.sent;
              filteredStateObj = stateObj.filter(function (obj) {
                return obj.State.toLowerCase() === stateName.toLowerCase();
              });

              if (!(filteredStateObj.length > 1)) {
                _context5.next = 8;
                break;
              }

              throw new Error("".concat(state, ",returns ambiguous for info query"));

            case 8:
              console.log(filteredStateObj);
              mappedObj = {
                lat: filteredStateObj[0].Latitude,
                lon: filteredStateObj[0].Longitude,
                population: filteredStateObj[0].pop,
                landarea: filteredStateObj[0].LandAreami2
              };
              return _context5.abrupt("return", mappedObj);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function info(_x13, _x14, _x15) {
      return _info.apply(this, arguments);
    }

    return info;
  }()
};
var _default = stateObject;
exports["default"] = _default;
//# sourceMappingURL=state.js.map