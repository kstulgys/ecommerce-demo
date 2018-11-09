const { server } = require('./server')
// const { PRISMA_ENDPOINT, APP_URL } = require('./config')
// const options = { port: 4000 }
//start it!
server.start(() => console.log('Server is running...'))
