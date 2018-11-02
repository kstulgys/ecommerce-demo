import React from 'react'
import Component from '@reactions/component'
import { Button, Pane, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { Mutation } from 'react-apollo'
import CartItem from './CartItem'
import TakeMyMoney from './TakeMyMoney'
import calcTotalPrice from '../../../../utils/calcTotalPrice'

const CartItemList = ({ cart }) => {
	const cartTotal = calcTotalPrice(cart)
	const isCartItems = cart.filter(cartItem => cartItem.item !== null)[0]
	// console.log('isCartItems', isCartItems)
	return (
		<div className="flex flex-column justify-between w-100">
			<>
				{cart.map(cartItem => cartItem.item && <CartItem key={cartItem.id} cartItem={cartItem} />)}
			</>
			{isCartItems ? (
				<>
					<Heading className="pl3 pv3">Cart total: ${cartTotal}</Heading>
					<TakeMyMoney>
						<div className="flex justify-center">
							<Button
								className="mt4 flex justify-center"
								width="50%"
								height={40}
								appearance="primary"
								intent="success"
							>
								Checkout
							</Button>
						</div>
					</TakeMyMoney>
				</>
			) : (
				<Heading className="flex justify-center mt4">There is nothing in your cart</Heading>
			)}
		</div>
	)
}

export default CartItemList
