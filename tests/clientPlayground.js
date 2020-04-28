import 'cross-fetch/polyfill';
import { gql } from 'apollo-boost';
import client from './utils/getClient';
import 'regenerator-runtime/runtime.js';
const userQuery = gql`
  query {
    AllCountries {
      date
      name
      datereadable
    }
  }
`;

//Returns a promise
const retriveQuery = async () => {
  return await client.query({ query: userQuery });
};

//Iterate through results in then
retriveQuery().then((result) => {
  const data = result.data;
  const allCountries = data.AllCountries;
  const countryCounts = allCountries.reduce(
    (acc, item) => {
      let n = item.name;
      acc.countries.push(n);
      return acc;
    },
    { countries: [] }
  );
  console.log(countryCounts.countries.length);
});
