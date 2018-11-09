const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')
require('dotenv').config({ path: '.env' })

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: process.env.NODE_ENV === 'development' ? true : false,
  secret: process.env.PRISMA_SECRET,
})

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, db }),
})

module.exports = { server }
