import React from 'react'
import Component from '@reactions/component'
import { Icon, Pane, Text, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { ME_QUERY } from '../../../../graphql/queries'
import { DELETE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../../graphql/mutations'
import { Mutation } from 'react-apollo'
const CartItem = ({ cartItem }) => {
	// console.log(cartItem)
	const title =
		cartItem.item.title.length > 27
			? `${cartItem.item.title.substr(0, 27).trim()}...`
			: cartItem.item.title
	return (
		<Pane
			hoverElevation={3}
			className="pl1 pr2 flex items-center justify-between bb b--light-gray w-100"
		>
			<div className="flex items-center pv2 w-100">
				<img className="w4" src={cartItem.item.image} />
				<div className="flex items-center flex-column w-100">
					<div className="w-100 flex justify-between mt4">
						<Text className="pl3 w-60">{title}</Text>
						<Text className="pl2 flex self-end">
							<span>{cartItem.quantity} x</span>
							<span className="pl1">${cartItem.item.price}</span>
						</Text>
					</div>

					<Mutation
						mutation={REMOVE_FROM_CART_MUTATION}
						variables={{ id: cartItem.id }}
						refetchQueries={[{ query: ME_QUERY }]}
					>
						{(mutation, { error }) => (
							<Icon
								className="pointer grow mt4"
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
			</div>
		</Pane>
	)
}

export default CartItem
