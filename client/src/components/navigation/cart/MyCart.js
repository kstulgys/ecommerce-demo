import React from 'react'
import Component from '@reactions/component'
import { Button, Pane, Text, Heading, Pill, Spinner, Popover } from 'evergreen-ui'
import Slider from './Slider'
import CartItemsCount from './CartItemsCount'
import User from '../../user/User'

const MyCart = props => (
	<Slider>
		{({ setState }) => (
			<Button
				onClick={() => setState({ isShown: true })}
				color="#F9F9FB"
				className="grow"
				appearance="minimal"
				marginRight={16}
			>
				Cart
				<User>
					{({ data, loading }) => {
						if (loading) return <Spinner marginX="auto" size={16} />
						const count = data.me.cart.reduce((prev, next) => next.item && prev + next.quantity, 0)
						return <CartItemsCount count={count} />
					}}
				</User>
			</Button>
		)}
	</Slider>
)

export default MyCart
