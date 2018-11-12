const { server } = require('./server')
require('dotenv').config({ path: '.env' })

//start it!

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.APP_URL,
    },
  },
  deeds => console.log(`Server is running... ${deeds.port}`),
)

// const options = {
//   port: 8000,
//   endpoint: '/graphql',
//   subscriptions: '/subscriptions',
//   playground: '/playground',
// }

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
