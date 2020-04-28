// ~/Documents/ultimate-todo/tests/utils
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4001/',
  onError: (e) => {
    console.log(e);
  },
});

export default client;
