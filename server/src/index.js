const { server } = require('./server')

//start it!

const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}
server.start(options, () => console.log('Server is running...'))

// "dev": "npm-run-all --parallel start playground",
// const { PRISMA_ENDPOINT, APP_URL } = require('./config')
// const options = { port: 4000 }
// server.start(() => console.log('Server is running...'))

// const options = {
//     port: 8000,
//     endpoint: '/graphql',
//     subscriptions: '/subscriptions',
//     playground: '/playground',
//   }

//   server.start(options, ({ port }) =>
//     console.log(
//       `Server started, listening on port ${port} for incoming requests.`,
//     ),
//   )
