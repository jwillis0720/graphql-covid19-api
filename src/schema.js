import { gql } from "apollo-server";
const typeDefs = gql`
  scalar Date
  directive @resolveAs(name: String) on FIELD_DEFINITION

  type Query {
    AllCountries: [Country]!
    CountryByID(id: Int!): Country!
    CountryByIDs(ids: [Int]!): [Country]!
    CountryByName(name: String!): Country!
    CountryByNames(names: [String]!): [Country]!
    CountryByDate(name: String!, date: Date!): Country!
    AllStates: [State]!
    StateByName(name: String!): State!
    StateByNames(names: [String]!): State!
    StateByDate(name: String!, date: Date!): State!
    AllCounties: [County]!
    CountyByName(name: String!, state: String!): County!
    CountyByNames(names: [String]!, states: [String]!): [County]!
    CountyByDate(name: String!, state: String!, date: Date!): County!
  }

  type Country {
    name: ID @resolveAs(name: "country")
    date: Date @resolveAs(name: "updated")
    datereadable: String
    info: CountryInfo @resolveAs(name: "countryInfo")
    cummulativeCases: Int @resolveAs(name: "cases")
    todayCases: Int
    yesterdayCases: Int
    cummulativeDeaths: Int @resolveAs(name: "deaths")
    todayDeaths: Int
    yesterdayDeaths: Int
    recovered: Int
    active: Int
    critical: Int
    casesPerOneMillion: Int
    deathsPerOneMillion: Int
    tests: Int
    testsPerOneMillion: Int
    continent: String
    state: [State]
    timeline: [TimeLine]
  }

  type State {
    name: ID @resolveAs(name: "state")
    cummulativeCases: Int @resolveAs(name: "cases")
    todayCases: Int
    yesterdayCases: Int
    cummulativeDeaths: Int @resolveAs(name: "deaths")
    todayDeaths: Int
    yesterdayDeaths: Int
    activeCases: Int @resolveAs(name: "active")
    cummulativeTests: Int @resolveAs(name: "tests")
    testsPerOneMillion: Int
    parentcountry: String
    info: StateInfo
    county: [County]
    timeline: [TimeLine]
  }

  type County {
    name: ID @resolveAs(name: "county")
    cummulativeCases: Int
    cummulativeDeaths: Int
    cummulativeRecovered: Int
    activeCases: Int
    state: State
    statename: String
    info: CountyInfo
    centroidinfo: String
    timeline: [TimeLine]
  }

  type CountryInfo {
    id: ID @resolveAs(name: "_id")
    iso2: String
    iso3: String
    lat: Float
    long: Float
    flag: String
    population: Int
  }

  type StateInfo {
    lat: Float
    lon: Float
    population: Int
    landarea: Float
  }

  type CountyInfo {
    name: String
    statename: String
    lat: Float
    lon: Float
    population: Int
    landarea: Float
    FIPS: Int
  }

  type TimeLine {
    date: Date
    datereadable: String
    cases: Int
    deaths: Int
    recovered: Int
    fips: Int
    stateinfo: StateInfo
  }
`;
export { typeDefs };
