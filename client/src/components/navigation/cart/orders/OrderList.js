import React from 'react'
import Component from '@reactions/component'
import { Button, Pane, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import OrderItem from './OrderItem'
import { Query, Mutation } from 'react-apollo'
import { OPEN_MODAL_MUTATION } from '../../../../graphql/mutations'
import { USER_ORDERS_QUERY } from '../../../../graphql/queries'

const OrderList = () => (
	<Query query={USER_ORDERS_QUERY}>
		{({ data: { orders }, loading }) => {
			if (loading) return null
			return (
				<div>{orders.map(orderItem => <OrderItem key={orderItem.id} orderItem={orderItem} />)}</div>
			)
		}}
	</Query>
)

export default OrderList
