const { server } = require('./server')

const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

//start it!
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)

// const { PRISMA_ENDPOINT, APP_URL } = require('./config')
// const options = { port: 4000 }
// server.start(() => console.log('Server is running...'))
