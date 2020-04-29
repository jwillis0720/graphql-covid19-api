"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

var _schema = require("./schema");

var _resolvers = require("./resolvers/resolvers");

var _graphqlDirectiveResolveAs = require("graphql-directive-resolve-as");

var _api = require("./api");

var server = new _apolloServer.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _resolvers.resolvers,
  dataSources: function dataSources() {
    return {
      ncapi: new _api.NovelCovidAPI(),
      csv: new _api.CSVAPI()
    };
  },
  schemaDirectives: {
    resolveAs: _graphqlDirectiveResolveAs.resolveAs
  },
  tracing: false,
  graphiql: true
});
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=server.js.map