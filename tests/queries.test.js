import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import client from './utils/getClient';
import 'regenerator-runtime/runtime.js';
// const client = getClient();
describe('The all countries query', () => {
  it('should return a dataray of all countries', async () => {
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
    // console.log(data);

    expect(data.AllCountries.length).toBeGreaterThan(200);
    //can have multiple expect statements
  });
});
