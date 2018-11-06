const { server } = require('./server')
const { PRISMA_ENDPOINT, APP_URL } = require('./config')

server.start(() => console.log(`Server is running on http://localhost:4000`))
