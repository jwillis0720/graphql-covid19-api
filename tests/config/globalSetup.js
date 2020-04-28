//globalSetup.js
require('@babel/register');

const server = require('../../src/server').default;

module.exports = async () => {
  global.httpServer = server;
  await global.httpServer.listen(4001);
};
