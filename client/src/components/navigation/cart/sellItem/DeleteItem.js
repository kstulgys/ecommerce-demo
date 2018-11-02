import React from 'react'
import Component from '@reactions/component'
import { Icon, Text, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { DELETE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../../graphql/mutations'
import { Mutation } from 'react-apollo'
import { ME_QUERY, ALL_ITEMS_QUERY } from '../../../../graphql/queries'

const DeleteItem = ({ id }) => (
	<Mutation
		mutation={DELETE_ITEM_MUTATION}
		variables={{ id }}
		refetchQueries={[{ query: ME_QUERY }, { query: ALL_ITEMS_QUERY }]}

		// update={this.update}
	>
		{(mutation, { error }) => (
			<Icon
				className="pointer grow"
				icon="delete"
				color="danger"
				onClick={() => {
					if (window.confirm('Are you sure you want to delete this item?')) {
						mutation().catch(err => {
							alert(err.message)
						})
					}
				}}
			/>
		)}
	</Mutation>
)

export default DeleteItem
