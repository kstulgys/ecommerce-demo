import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import calcTotalPrice from '../../../../utils/calcTotalPrice'
import { ME_QUERY } from '../../../../graphql/queries'
import { CREATE_ORDER_MUTATION } from '../../../../graphql/mutations'
import User from '../../../user/User'
import { USER_ORDERS_QUERY } from '../../../../graphql/queries'

function totalItems(cart) {
	return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
}

class TakeMyMoney extends React.Component {
	onToken = async (res, createOrder) => {
		console.log(res)
		// NProgress.start()
		// manually call the mutation once we have the stripe token
		const order = await createOrder({
			variables: {
				token: res.id
			}
		}).catch(err => {
			alert(err.message)
		})
		console.log(order)
		// Router.push({
		// 	pathname: '/order',
		// 	query: { id: order.data.createOrder.id }
		// })
	}
	render() {
		return (
			<User>
				{({ data, loading }) => {
					if (loading) return null
					return (
						<Mutation
							mutation={CREATE_ORDER_MUTATION}
							refetchQueries={[{ query: ME_QUERY }, { query: USER_ORDERS_QUERY }]}
						>
							{createOrder => (
								<StripeCheckout
									amount={calcTotalPrice(data.me.cart)}
									name="Sick Fits"
									description={`Order of ${totalItems(data.me.cart)} items!`}
									image={data.me.cart.length && data.me.cart[0].item && data.me.cart[0].item.image}
									stripeKey="pk_test_5EipLhHukdqp7BL09LrPg6J7"
									currency="USD"
									email={data.me.email}
									token={res => this.onToken(res, createOrder)}
								>
									{this.props.children}
								</StripeCheckout>
							)}
						</Mutation>
					)
				}}
			</User>
		)
	}
}

export default TakeMyMoney
