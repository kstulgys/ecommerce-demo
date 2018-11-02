import { gql } from 'apollo-boost'

export const OPEN_MODAL_MUTATION = gql`
  mutation OPEN_MODAL_MUTATION($currentModal: CurrentModal ) {
    openModal(currentModal: $currentModal) @client 
  }
`

export const CLOSE_MODAL_MUTATION = gql`
  mutation CLOSE_MODAL_MUTATION {
    closeModal @client 
  }
`
export const LOGIN_USER_MUTATION = gql`
  mutation LOGIN_USER_MUTATION($email: String!, $password: String!,$name: String!) {
   	createUser(data:{email:$email, name:$name, password:$password}){
      id
      name
      posts{
        id
        isPublished
        text
        title
        createdAt
      }
    }
  }
`

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`
export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String!
    $description: String!
    $price: Int!
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
    }
  }
`

export const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

export const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`
