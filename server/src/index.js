const { server } = require('./server')
// const { PRISMA_ENDPOINT, APP_URL } = require('./config')
const options = { port: 4000 }
server.start(options, () =>
  console.log('Server is running on localhost:' + options.port),
)
//start it!
