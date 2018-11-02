import { gql } from 'apollo-boost'

export const GET_ACTIVE_MODAL = gql`
  query GET_ACTIVE_MODAL {
    currentModal @client {
      activeModal
      items
    }
  }
`

export const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
      id
      image
      title
    }
  }
`

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($after: String) {
		itemsConnection(after: $after, first:9, orderBy: createdAt_ASC) {
			edges {
				node {
					id
					title
					description
					image
					largeImage
					price
				}
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
  }
`
export const ME_QUERY = gql`
  query ME_QUERY{
    me{
      id
      email
      items{
        id
        title
        description
        image
        price
      }
      cart {
      quantity
      id
      item {
        title
        description
        price
        id
        image
        }
      }
    }
  }
`

export const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`
