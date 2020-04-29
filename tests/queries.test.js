import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import 'regenerator-runtime/runtime.js';
import fetch from 'node-fetch';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
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
  const results = await fetch('https://disease.sh/v2/all');
  return results.json();
};

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

describe('The all countries query', () => {
  it('should return a dataray of all countries', async () => {
    const { data } = await client.query({
      query: userQuery,
    });
    // console.log(data);
    const results = data.AllCountries.reduce((acc, item) => {
      acc['totalcases'] =
        acc['totalcases'] + item.cummulativeCases || item.cummulativeCases;
      acc['todaycases'] =
        acc['todaycases'] + item.todayCases || item.todayCases;
      acc['totaldeaths'] =
        acc['totaldeaths'] + item.cummulativeDeaths || item.cummulativeDeaths;
      acc['todaydeaths'] =
        acc['todaydeaths'] + item.todayDeaths || item.todayDeaths;
      return acc;
    }, {});
    const currentTotal = await getTotals();
    console.log(
      `All countries GraphQL API total cases ${results.totalcases},
      Novel COVID REST API total cases ${currentTotal.cases}`
    );
    console.log(results, currentTotal.deaths);
    expect(data.AllCountries.length).toBeGreaterThan(200);
    expect(results.totalcases).toEqual(currentTotal.cases);
    expect(results.todaycases).toEqual(currentTotal.todayCases);
    expect(results.totaldeaths).toEqual(currentTotal.deaths);
    expect(results.todaydeaths).toEqual(currentTotal.todayDeaths);
    //can have multiple expect statements
  });
});
