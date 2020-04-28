import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import client from './utils/getClient';
import 'regenerator-runtime/runtime.js';
// const client = getClient();
describe('the Queries that can be performed on TODO and USER type', () => {
  it("should be able to see author's profile without sensitive info being displayed", async () => {
    const userQuery = gql`
      query {
        AllCountries {
          date
          datereadable
        }
      }
    `;
    const { data } = await client.query({
      query: userQuery,
    });
    console.log(data);
    expect(data.AllCountries.length).toBeGreaterThan(200);
  });
});
