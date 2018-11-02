import React from 'react'
import Component from '@reactions/component'
import { Icon, Pane, Text, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { ME_QUERY } from '../../../../graphql/queries'
import { DELETE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../../graphql/mutations'
import { Mutation } from 'react-apollo'

const ItemWrapper = ({ cartItem }) => {
	console.log(cartItem)
	return (
		<div className="mh3 flex items-center justify-between bb b--light-gray">
			<div className="flex items-center pv2">
				<img className="w4" src={cartItem.item.image} />
				<Text className="pl2">{cartItem.item.title}</Text>
				<Text className="pl2">
					{cartItem.quantity} x ${cartItem.item.price}
				</Text>
			</div>

			<Mutation
				mutation={REMOVE_FROM_CART_MUTATION}
				variables={{ id: cartItem.id }}
				refetchQueries={[{ query: ME_QUERY }]}

				// update={this.update}
			>
				{(mutation, { error }) => (
					<Icon
						className="pointer grow"
						icon="cross"
						color="gray"
						onClick={() => {
							if (window.confirm('Are you sure you want to remove this item?')) {
								mutation().catch(err => {
									alert(err.message)
								})
							}
						}}
					/>
				)}
			</Mutation>
		</div>
	)
}

export default ItemWrapper
