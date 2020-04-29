"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _graphql = require("graphql");

var _language = require("graphql/language");

var _query = _interopRequireDefault(require("./query"));

var _country = _interopRequireDefault(require("./country"));

var _state = _interopRequireDefault(require("./state"));

var _county = _interopRequireDefault(require("./county"));

var _countryinfo = _interopRequireDefault(require("./countryinfo"));

var _countyinfo = _interopRequireDefault(require("./countyinfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolvers = {
  Query: _query["default"],
  Country: _country["default"],
  State: _state["default"],
  County: _county["default"],
  CountryInfo: _countryinfo["default"],
  CountyInfo: _countyinfo["default"],
  Date: new _graphql.GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue: function parseValue(value) {
      ///If an int or number comes in, we can parse it as a value
      // We could do lots of stuff here but lets play it by ear
      var date = new Date(parseInt(value)); // console.log("From Client", date);

      return date;
    },
    serialize: function serialize(value) {
      //This is what we get from client
      //both parse literal and value get changed into time integers so we will just send that
      return value;
    },
    parseLiteral: function parseLiteral(ast) {
      // console.log(ast);
      if (ast.kind === _language.Kind.STRING) {
        return new Date(ast.value);
      }

      if (ast.kind === _language.Kind.INT) {
        return this.parseValue(ast.value);
      }

      return null;
    }
  })
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map