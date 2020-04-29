"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  scalar Date\n  directive @resolveAs(name: String) on FIELD_DEFINITION\n\n  type Query {\n    AllCountries: [Country]!\n    CountryByID(id: Int!): Country!\n    CountryByIDs(ids: [Int]!): [Country]!\n    CountryByName(name: String!): Country!\n    CountryByNames(names: [String]!): [Country]!\n    CountryByDate(name: String!, date: Date!): Country!\n    AllStates: [State]!\n    StateByName(name: String!): State!\n    StateByNames(names: [String]!): State!\n    StateByDate(name: String!, date: Date!): State!\n    AllCounties: [County]!\n    CountyByName(name: String!, state: String!): County!\n    CountyByNames(names: [String]!, states: [String]!): [County]!\n    CountyByDate(name: String!, state: String!, date: Date!): County!\n  }\n\n  type Country {\n    name: ID @resolveAs(name: \"country\")\n    date: Date @resolveAs(name: \"updated\")\n    datereadable: String\n    info: CountryInfo @resolveAs(name: \"countryInfo\")\n    cummulativeCases: Int @resolveAs(name: \"cases\")\n    todayCases: Int\n    yesterdayCases: Int\n    cummulativeDeaths: Int @resolveAs(name: \"deaths\")\n    todayDeaths: Int\n    yesterdayDeaths: Int\n    recovered: Int\n    active: Int\n    critical: Int\n    casesPerOneMillion: Int\n    deathsPerOneMillion: Int\n    tests: Int\n    testsPerOneMillion: Int\n    continent: String\n    state: [State]\n    timeline: [TimeLine]\n  }\n\n  type State {\n    name: ID @resolveAs(name: \"state\")\n    cummulativeCases: Int @resolveAs(name: \"cases\")\n    todayCases: Int\n    yesterdayCases: Int\n    cummulativeDeaths: Int @resolveAs(name: \"deaths\")\n    todayDeaths: Int\n    yesterdayDeaths: Int\n    activeCases: Int @resolveAs(name: \"active\")\n    cummulativeTests: Int @resolveAs(name: \"tests\")\n    testsPerOneMillion: Int\n    parentcountry: String\n    info: StateInfo\n    county: [County]\n    timeline: [TimeLine]\n  }\n\n  type County {\n    name: ID @resolveAs(name: \"county\")\n    cummulativeCases: Int\n    cummulativeDeaths: Int\n    cummulativeRecovered: Int\n    activeCases: Int\n    state: State\n    statename: String\n    info: CountyInfo\n    centroidinfo: String\n    timeline: [TimeLine]\n  }\n\n  type CountryInfo {\n    id: ID @resolveAs(name: \"_id\")\n    iso2: String\n    iso3: String\n    lat: Float\n    long: Float\n    flag: String\n    population: Int\n  }\n\n  type StateInfo {\n    lat: Float\n    lon: Float\n    population: Int\n    landarea: Float\n  }\n\n  type CountyInfo {\n    name: String\n    statename: String\n    lat: Float\n    lon: Float\n    population: Int\n    landarea: Float\n    FIPS: Int\n  }\n\n  type TimeLine {\n    date: Date\n    datereadable: String\n    cases: Int\n    deaths: Int\n    recovered: Int\n    fips: Int\n    stateinfo: StateInfo\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServer.gql)(_templateObject());
exports.typeDefs = typeDefs;
//# sourceMappingURL=schema.js.map