import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, split } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { resolvers, defaults } from './resolvers'
import { endpoint, prodEndpoint } from './config'
import { AUTH_TOKEN } from './utils/constants'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const tokenValue = localStorage.getItem(AUTH_TOKEN)

const httpLink = new HttpLink({
  uri: process.env.ENDPOINT,
  headers: {
    Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
  },
})

const cache = new InMemoryCache()
const stateLink = withClientState({ cache, defaults, resolvers })
const link = ApolloLink.from([stateLink, httpLink])

const client = new ApolloClient({
  link,
  cache,
  // connectToDevTools: true,
})

export default client
// git subtree push --prefix client heroku-frontend master

// const middlewareLink = new ApolloLink((operation, forward) => {
//   // get the authentication token from local storage if it exists
//   const tokenValue = localStorage.getItem(AUTH_TOKEN)
//   // console.log('the token', tokenValue)
//   // return the headers to the context so httpLink can read them
//   operation.setContext({
//     headers: {
//       Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
//     },
//   })
//   return forward(operation)
// })

// authenticated httplink
// const httpLinkAuth = middlewareLink.concat(httpLink)

// const wsLink = new WebSocketLink({
//   uri:
//     process.env.NODE_ENV === 'development'
//       ? `ws://${endpoint}`
//       : `ws://${prodEndpoint}`,
//   options: {
//     reconnect: true,
//     // connectionParams: {
//     //   Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
//     // },
//   },
// })

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query)
//     return kind === 'OperationDefinition' && operation === 'subscription'
//   },
//   // wsLink,
//   httpLinkAuth,
// )
// apollo client setup
// const link = ApolloLink.from([httpLink]);

// const resolvers = {
// 	Mutation: {
// 		openModal: (_, { currentModal, orderItem }, { cache }) => {
// 			const data = {
// 				activeModal: {
// 					__typename: 'ActiveModal',
// 					currentModal,
// 					orderItem
// 				}
// 			}
// 			cache.writeData({ data })
// 			// console.log(currentModal)
// 		},
// 		closeModal: (_, args, { cache }) => {
// 			const data = {
// 				activeModal: {
// 					__typename: 'ActiveModal',
// 					currentModal: null,
// 					orderItem: null
// 				}
// 			}
// 			cache.writeData({ data })
// 		}
// 	}
// }

// const typeDefs = `
//   type OrderItem {
//     id: Int!
//     quantity: Int!
//   }
//   type Mutation {
//     // openModal(text: String!): OrderItem
//     // closeModal(id: Int!): Todo
//   }
//   // type Query {
//   //   visibilityFilter: String
//   //   todos: [Todo]
//   // }
// `
