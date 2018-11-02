module.exports = async () => {
  await global.httpServer.close()
}

// "jest": {
//   "globalSetup": "./__test__/jest/globalSetup.js",
//   "globalTeardown": "./__test__/jest/globalTeardown.js"
// },
