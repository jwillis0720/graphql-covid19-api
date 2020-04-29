"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
_server["default"].listen({
  port: process.env.PORT || 4000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80 Server ready at ".concat(url));
});
//# sourceMappingURL=index.js.map