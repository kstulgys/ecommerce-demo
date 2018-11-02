import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import InfiniteScroll from 'react-infinite-scroller'
import { Button, Pane, Text, Heading, Spinner, Icon, Dialog, toaster } from 'evergreen-ui'
import Item from './Item'
import { ALL_ITEMS_QUERY } from '../../graphql/queries'

class ItemList extends Component {
	fetchMoreData = (fetchMore, data) => {
		fetchMore({
			variables: {
				after: data.itemsConnection.pageInfo.endCursor
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev
				return {
					itemsConnection: {
						__typename: 'ItemConnection',
						pageInfo: fetchMoreResult.itemsConnection.pageInfo,
						edges: [...prev.itemsConnection.edges, ...fetchMoreResult.itemsConnection.edges]
					}
				}
			}
		})
	}

	render() {
		return (
			<div>
				<Query
					query={ALL_ITEMS_QUERY}
					notifyOnNetworkStatusChange={true}
					fetchPolicy="cache-and-network"
					// fetchPolicy="network-only"
				>
					{({ data, error, loading, fetchMore }) => {
						if (error)
							return <Heading className="flex justify-center pa4">Some error occoure</Heading>
						window.onscroll = () => {
							const { hasNextPage } = data.itemsConnection.pageInfo

							if (
								window.innerHeight + document.documentElement.scrollTop ===
									document.documentElement.offsetHeight &&
								hasNextPage
							) {
								// Do awesome stuff like loading more content!
								this.fetchMoreData(fetchMore, data)
							}
						}
						return (
							<>
								<div className="flex flex-wrap justify-center mv4">
									{data.itemsConnection &&
										data.itemsConnection.edges.map(item => (
											<Item item={item.node} key={item.node.id} />
										))}
								</div>
								{loading && <Spinner marginY={60} marginX="auto" size={60} />}
							</>
						)
					}}
				</Query>
			</div>
		)
	}
}

export default ItemList

// const ALL_ITEMS_QUERY = gql`
//   query items {
//     items(orderBy: createdAt_DESC) {
//       id
//       title
//       price
//       description
//       image
//       largeImage
//     }
//   }

// const ALL_ITEMS_QUERY = gql`
//   query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
//     items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
//       id
//       title
//       price
//       description
//       image
//       largeImage
//     }
//   }
// `
