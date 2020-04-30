import "cross-fetch/polyfill";
import { gql } from "apollo-boost";
import "regenerator-runtime/runtime.js";
import fetch from "node-fetch";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4001/",
  onError: (e) => {
    console.log(e);
  },
});

// const client = new ApolloClient({
//   uri: 'https://novel-covid-graphql-api.herokuapp.com/',
//   onError: (e) => {
//     console.log(e);
//   },
// });

const getTotals = async () => {
  const results = await fetch("https://disease.sh/v2/all");
  return results.json();
};

const getAsyncQueryData = async () => {
  const userQuery = gql`
    query {
      AllCountries {
        name
        date
        datereadable
        cummulativeCases
        todayCases
        yesterdayCases
        cummulativeDeaths
        todayDeaths
        yesterdayDeaths
        recovered
        active
        critical
        casesPerOneMillion
        deathsPerOneMillion
        tests
        testsPerOneMillion
        continent
        info {
          id
          iso2
          iso3
          lat
          long
          flag
          population
        }
      }
    }
  `;
  const { data } = await client.query({
    query: userQuery,
  });
  return data;
};

describe("The all countries query", () => {
  it("should return a dataray of all countries", async () => {
    // console.log(data);
    const data = await getAsyncQueryData();
    const results = data.AllCountries.reduce((acc, item) => {
      acc["totalcases"] =
        acc["totalcases"] + item.cummulativeCases || item.cummulativeCases;
      acc["todaycases"] =
        acc["todaycases"] + item.todayCases || item.todayCases;
      acc["totaldeaths"] =
        acc["totaldeaths"] + item.cummulativeDeaths || item.cummulativeDeaths;
      acc["todaydeaths"] =
        acc["todaydeaths"] + item.todayDeaths || item.todayDeaths;
      return acc;
    }, {});
    const currentTotal = await getTotals();
    console.log(
      `All countries GraphQL API total cases ${results.totalcases},
      Novel COVID REST API total cases ${currentTotal.cases}`
    );
    //console.log(results, currentTotal.deaths);
    expect(data.AllCountries.length).toBeGreaterThan(200);
    expect(results.totalcases).toEqual(currentTotal.cases);
    expect(results.todaycases).toEqual(currentTotal.todayCases);
    expect(results.totaldeaths).toEqual(currentTotal.deaths);
    expect(results.todaydeaths).toEqual(currentTotal.todayDeaths);
    //can have multiple expect statements
  });
});

const OkayIfNull = ["yesterdayDeaths", "yesterdayCases"];

describe("The all countries query", () => {
  it("should not return null values", async () => {
    const data = await getAsyncQueryData();
    data.AllCountries.map((obj) => {
      Object.keys(obj).forEach(function (item) {
        if (obj[item] == null && !OkayIfNull.includes(item)) {
          console.log(item, "is null for ", obj["name"]);
        }
      });
    });

    data.AllCountries.map((obj) => {
      let countryInfo = obj.info;
      Object.keys(countryInfo).forEach(function (item) {
        // console.log(item);
        if (countryInfo[item] == null) {
          console.log(
            item,
            "country info is null for ",
            obj["name"],
            countryInfo
          );
        }
      });
    });
    //can have multiple expect statements
  });
});
