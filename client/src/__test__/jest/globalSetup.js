const { server } = require('../../../server/src/server')

module.exports = async () => {
  global.httpServer = await server.start({ port: 4000 })
}
