import React from 'react'
import Component from '@reactions/component'
import {
  Button,
  Pane,
  Text,
  Heading,
  TextInput,
  Icon,
  Dialog,
} from 'evergreen-ui'
import { Mutation, Query } from 'react-apollo'
import { ITEM_QUERY } from '../../graphql/queries'
import formatMoney from '../../utils/formatMoney'

const ItemPreview = ({ children, id }) => (
  <Component
    initialState={{
      isShown: false,
    }}
  >
    {({ state, setState }) => (
      <Pane>
        <Dialog
          isShown={state.isShown}
          onCloseComplete={() =>
            setState({
              isShown: false,
            })
          }
          hasFooter={false}
          hasHeader={false}
        >
          <Query
            query={ITEM_QUERY}
            variables={{
              id,
            }}
          >
            {({ error, loading, data }) => {
              if (error) return <p>{error.message}</p>
              if (loading) return <p>Loading...</p>
              if (!data.item) return <p>No Item Found for {id}</p>
              const item = data.item
              return (
                <div>
                  <div className="flex justify-center items-center">
                    <img
                      src={
                        item.largeImage || `https://via.placeholder.com/550x350`
                      }
                    />
                  </div>
                  <div className="flex flex-column">
                    <Heading>{item.title} </Heading>
                    <Text>{item.description} </Text>
                    <Text>{formatMoney(item.price)} </Text>
                  </div>
                </div>
              )
            }}
          </Query>
        </Dialog>
        {children({ setState })}
      </Pane>
    )}
  </Component>
)

export default ItemPreview

// const SEND_TOKEN = gql`
// 	mutation sendShortLivedToken($email: String!){
// 		sendShortLivedToken(email: $email){
// 			message
// 		}
// 	}
// `
