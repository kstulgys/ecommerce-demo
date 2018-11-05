import React, { Component } from 'react'
import {
  Button,
  Pane,
  Text,
  Heading,
  Spinner,
  Icon,
  Dialog,
  toaster,
} from 'evergreen-ui'
import { Mutation, Query } from 'react-apollo'
import { ADD_TO_CART_MUTATION } from '../../graphql/mutations'
import { ME_QUERY } from '../../graphql/queries'
import ItemPreview from './ItemPreview'
import formatMoney from '../../utils/formatMoney'

// <Pagination page={this.props.page} />
const Item = ({ item }) => (
  <Pane
    elevation={4}
    hoverElevation={2}
    margin={24}
    background="white"
    className="w-100 w-20-l w-40-m br4 h-100"
  >
    <ItemPreview id={item.id}>
      {({ setState }) => (
        <img
          onClick={() => setState({ isShown: true })}
          src={item.image}
          style={{ height: 200 }}
          className="db w-100 br4 br--top pointer"
          alt="Photo of a kitten looking menacing."
        />
      )}
    </ItemPreview>

    <div className="flex flex-column ph4 pv3 ph3-ns pv3-ns items-start">
      <div className="flex justify-between w-100">
        <Heading>{item.title}</Heading>
        <Text>{formatMoney(item.price)}</Text>
      </div>

      <Text className="h3 w-100 flex items-center">{item.description}</Text>
      <div className="flex justify-around mt2 w-100 bt b--light-gray pt2">
        <Mutation
          mutation={ADD_TO_CART_MUTATION}
          refetchQueries={[{ query: ME_QUERY }]}
          variables={{
            id: item.id,
          }}
        >
          {(mutation, { loading, error }) => (
            <Icon
              onClick={mutation}
              className="pointer grow"
              icon="shopping-cart"
              color="danger"
              size={24}
            />
          )}
        </Mutation>
      </div>
    </div>
  </Pane>
)

// <Pagination page={this.props.page} />
// <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">

export default Item
