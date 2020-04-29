"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSVAPI = exports.NovelCovidAPI = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-len */

/* eslint-disable require-jsdoc */
//? doesn't suport ES6
var _require = require("apollo-datasource-rest"),
    RESTDataSource = _require.RESTDataSource;

var CSVAPI = /*#__PURE__*/function (_RESTDataSource) {
  _inherits(CSVAPI, _RESTDataSource);

  var _super = _createSuper(CSVAPI);

  function CSVAPI() {
    var _this;

    _classCallCheck(this, CSVAPI);

    _this = _super.call(this); // need to put this on a CDN

    _this.baseURL = "https://raw.githubusercontent.com/jwillis0720/covid19api/graphql/graphql-server/locationInfo/";
    return _this;
  }

  _createClass(CSVAPI, [{
    key: "getCountryInfo",
    value: function () {
      var _getCountryInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(countryInfo) {
        var response, JSONResponse, iso3, iso2, filteredResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.get("CountryInfo.json");

              case 2:
                response = _context.sent;
                JSONResponse = JSON.parse(response);
                iso3 = countryInfo.iso3;
                iso2 = countryInfo.iso2;
                filteredResponse = JSONResponse.filter(function (key) {
                  // console.log(key.iso_a3);
                  return key["iso_a3"] === iso3;
                });

                if (!(filteredResponse.length > 1)) {
                  _context.next = 9;
                  break;
                }

                throw new Error("".concat(countryInfo, ",returns ambiguous for info query"));

              case 9:
                return _context.abrupt("return", filteredResponse[0]);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCountryInfo(_x) {
        return _getCountryInfo.apply(this, arguments);
      }

      return getCountryInfo;
    }()
  }, {
    key: "getStateInfo",
    value: function () {
      var _getStateInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.get("StateInfoPop.json");

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", JSON.parse(response));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getStateInfo() {
        return _getStateInfo.apply(this, arguments);
      }

      return getStateInfo;
    }()
  }, {
    key: "getCountyInfo",
    value: function () {
      var _getCountyInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(countyInfo) {
        var response, responseJSON, filtedResponse;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.get("CountyInfo.json");

              case 2:
                response = _context3.sent;
                responseJSON = JSON.parse(response);
                filtedResponse = [];
                filtedResponse = responseJSON.filter(function (key) {
                  return countyInfo.statename.toLowerCase() == key.State.toLowerCase();
                }).filter(function (key) {
                  return countyInfo.name.toLowerCase() == key.County.toLowerCase();
                });

                if (!(filtedResponse.length > 1)) {
                  _context3.next = 8;
                  break;
                }

                throw new Error("".concat(countyInfo, ",returns ambiguous for info query"));

              case 8:
                return _context3.abrupt("return", filtedResponse);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCountyInfo(_x2) {
        return _getCountyInfo.apply(this, arguments);
      }

      return getCountyInfo;
    }()
  }]);

  return CSVAPI;
}(RESTDataSource);

exports.CSVAPI = CSVAPI;

var NovelCovidAPI = /*#__PURE__*/function (_RESTDataSource2) {
  _inherits(NovelCovidAPI, _RESTDataSource2);

  var _super2 = _createSuper(NovelCovidAPI);

  function NovelCovidAPI() {
    var _this2;

    _classCallCheck(this, NovelCovidAPI);

    _this2 = _super2.call(this);
    _this2.baseURL = "https://corona.lmao.ninja/v2/";
    return _this2;
  }

  _createClass(NovelCovidAPI, [{
    key: "getCountries",
    value: function () {
      var _getCountries = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.get("countries");

              case 2:
                response = _context4.sent;
                return _context4.abrupt("return", response.map(function (obj) {
                  return _objectSpread({}, obj, {
                    datereadable: new Date(obj.updated).toDateString()
                  });
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCountries() {
        return _getCountries.apply(this, arguments);
      }

      return getCountries;
    }()
  }, {
    key: "getCountrybyID",
    value: function () {
      var _getCountrybyID = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        var response;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.get("countries/".concat(id));

              case 2:
                response = _context5.sent;
                return _context5.abrupt("return", _objectSpread({}, response, {
                  datereadable: new Date(response.updated).toDateString()
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCountrybyID(_x3) {
        return _getCountrybyID.apply(this, arguments);
      }

      return getCountrybyID;
    }()
  }, {
    key: "getCountryByName",
    value: function () {
      var _getCountryByName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name) {
        var response;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.get("countries/".concat(name, "?strict=false"));

              case 2:
                response = _context6.sent;
                return _context6.abrupt("return", _objectSpread({}, response, {
                  datereadable: new Date(response.updated).toDateString()
                }));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCountryByName(_x4) {
        return _getCountryByName.apply(this, arguments);
      }

      return getCountryByName;
    }()
  }, {
    key: "getTimeLinebyCountry",
    value: function () {
      var _getTimeLinebyCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(countryInfo) {
        var potentialIds, response, _i, _potentialIds, index, _response$timeline, cases, deaths, recovered, result;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // console.log(countryInfo.iso3);
                potentialIds = [countryInfo._id, countryInfo.iso3, countryInfo.iso2];
                response = Object();
                _i = 0, _potentialIds = potentialIds;

              case 3:
                if (!(_i < _potentialIds.length)) {
                  _context7.next = 18;
                  break;
                }

                index = _potentialIds[_i];
                _context7.prev = 5;
                _context7.next = 8;
                return this.get("historical/".concat(index, "?lastdays=all"));

              case 8:
                response = _context7.sent;
                return _context7.abrupt("break", 18);

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](5);
                console.log(_context7.t0);

              case 15:
                _i++;
                _context7.next = 3;
                break;

              case 18:
                if (!(Object.keys(response).length === 0)) {
                  _context7.next = 20;
                  break;
                }

                return _context7.abrupt("return", []);

              case 20:
                // console.log(response);
                _response$timeline = response.timeline, cases = _response$timeline.cases, deaths = _response$timeline.deaths, recovered = _response$timeline.recovered;
                result = Object.keys(cases).map(function (date) {
                  return {
                    date: new Date(date).getTime(),
                    datereadable: new Date(date).toDateString(),
                    cases: cases[date],
                    deaths: deaths[date],
                    recovered: recovered[date],
                    countryInfo: [countryInfo]
                  };
                });
                return _context7.abrupt("return", result);

              case 23:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[5, 12]]);
      }));

      function getTimeLinebyCountry(_x5) {
        return _getTimeLinebyCountry.apply(this, arguments);
      }

      return getTimeLinebyCountry;
    }()
  }, {
    key: "getStates",
    value: function () {
      var _getStates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var response;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.get("states/");

              case 2:
                response = _context8.sent;
                return _context8.abrupt("return", response.map(function (state) {
                  return _objectSpread({}, state, {
                    parentcountry: "USA"
                  });
                }));

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getStates() {
        return _getStates.apply(this, arguments);
      }

      return getStates;
    }()
  }, {
    key: "getStatebyName",
    value: function () {
      var _getStatebyName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(name) {
        var res;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.get("states/".concat(name));

              case 2:
                res = _context9.sent;
                return _context9.abrupt("return", _objectSpread({}, res, {
                  parentcountry: "USA"
                }));

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getStatebyName(_x6) {
        return _getStatebyName.apply(this, arguments);
      }

      return getStatebyName;
    }()
  }, {
    key: "getTimeLinebyState",
    value: function () {
      var _getTimeLinebyState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(name) {
        var response;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.get("nyt/states");

              case 2:
                response = _context10.sent;
                return _context10.abrupt("return", response.filter(function (states) {
                  return states.state === name;
                }).map(function (filtered) {
                  return _objectSpread({}, filtered, {
                    date: new Date(filtered.date).getTime(),
                    datereadable: new Date(filtered.date).toDateString()
                  });
                }));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getTimeLinebyState(_x7) {
        return _getTimeLinebyState.apply(this, arguments);
      }

      return getTimeLinebyState;
    }()
  }, {
    key: "getYesterday",
    value: function () {
      var _getYesterday = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(name) {
        var response;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.get("states/".concat(name, "?yesterday=true"));

              case 2:
                response = _context11.sent;
                return _context11.abrupt("return", response);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getYesterday(_x8) {
        return _getYesterday.apply(this, arguments);
      }

      return getYesterday;
    }()
  }, {
    key: "reduceCounty",
    value: function reduceCounty(key) {
      return _objectSpread({
        statename: key.province,
        cummulativeCases: key.stats.confirmed,
        cummulativeDeaths: key.stats.deaths,
        cummulativeRecovered: key.stats.recovered,
        activeCases: key.stats.confirmed - key.stats.recovered - key.stats.deaths,
        info: {
          lat: key.coordinates.latitude,
          lon: key.coordinates.longitude,
          name: key.county,
          statename: key.province
        }
      }, key);
    }
  }, {
    key: "getCounties",
    value: function () {
      var _getCounties = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _this3 = this;

        var response, counties;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.get("jhucsse/counties");

              case 2:
                response = _context12.sent;
                counties = response.map(function (key) {
                  return _this3.reduceCounty(key);
                });
                return _context12.abrupt("return", counties);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getCounties() {
        return _getCounties.apply(this, arguments);
      }

      return getCounties;
    }()
  }, {
    key: "getCountyByName",
    value: function () {
      var _getCountyByName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(name, state) {
        var _this4 = this;

        var response, filtedResponse, reducedResponse;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.get("jhucsse/counties/".concat(name));

              case 2:
                response = _context13.sent;
                filtedResponse = response.filter(function (key) {
                  return key.province === state;
                });
                reducedResponse = filtedResponse.map(function (key) {
                  return _this4.reduceCounty(key);
                });
                _context13.next = 7;
                return reducedResponse;

              case 7:
                return _context13.abrupt("return", _context13.sent);

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getCountyByName(_x9, _x10) {
        return _getCountyByName.apply(this, arguments);
      }

      return getCountyByName;
    }()
  }, {
    key: "getCountyTimeLineByState",
    value: function () {
      var _getCountyTimeLineByState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(county) {
        var stateName, response, filtedResponse, _filtedResponse$0$tim, cases, deaths, recovered, result;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                console.log(county.statename);
                stateName = county.statename.toLowerCase();
                _context14.next = 4;
                return this.get("historical/usacounties/".concat(stateName));

              case 4:
                response = _context14.sent;
                filtedResponse = response.filter(function (key) {
                  return key.county === county.county.toLowerCase();
                });
                console.log(filtedResponse); // recovered on found in the counties, we should find a way to check that

                _filtedResponse$0$tim = filtedResponse[0].timeline, cases = _filtedResponse$0$tim.cases, deaths = _filtedResponse$0$tim.deaths, recovered = _filtedResponse$0$tim.recovered; // console.log(cases);

                result = Object.keys(cases).map(function (date) {
                  var dataObject = {
                    date: new Date(date).getTime(),
                    datereadable: new Date(date).toDateString(),
                    cases: cases[date],
                    deaths: deaths[date]
                  };

                  if (recovered != undefined) {
                    dataObject.recovered = recovered[date];
                  } else {
                    dataObject.recovered = null;
                  }

                  return dataObject;
                });
                _context14.next = 11;
                return result;

              case 11:
                return _context14.abrupt("return", _context14.sent);

              case 12:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getCountyTimeLineByState(_x11) {
        return _getCountyTimeLineByState.apply(this, arguments);
      }

      return getCountyTimeLineByState;
    }() // }

  }]);

  return NovelCovidAPI;
}(RESTDataSource);

exports.NovelCovidAPI = NovelCovidAPI;
//# sourceMappingURL=api.js.map