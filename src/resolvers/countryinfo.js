const countryInfoObject = {
  population: async (countryInfo, _, { dataSources }) => {
    const response = await dataSources.csv.getCountryInfo(countryInfo);
    // console.log(response);
    if (response === undefined) {
      console.log(countryInfo.iso3, 'has no population?');
      return null;
    }
    return response['pop_est'];
  },

  //Have lots of other stuff to choose from in this dataobject
};

export default countryInfoObject;
