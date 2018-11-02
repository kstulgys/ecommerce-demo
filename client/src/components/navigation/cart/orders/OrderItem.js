import React from 'react'
import Component from '@reactions/component'
import { Text, Icon, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { ME_QUERY } from '../../../../graphql/queries'
import { Mutation } from 'react-apollo'
import { OPEN_MODAL_MUTATION } from '../../../../graphql/mutations'
import OrderDetailsModal from './OrderDetailsModal'
import { format } from 'date-fns'

const OrderItem = ({ orderItem }) => {
	// console.log('orderItem', orderItem)
	return (
		<OrderDetailsModal orderItem={orderItem}>
			{({ setState }) => (
				<div
					onClick={() => setState({ isShown: true })}
					className="pointer mt3 grow flex justify-center"
				>
					<Text className="pb2"> {format(orderItem.createdAt, 'MM/DD/YYYY')}</Text>
				</div>
			)}
		</OrderDetailsModal>
	)
}

export default OrderItem
// onClick = {() => setState({ isShown: true })}
// 	< Mutation
// mutation = { OPEN_MODAL_MUTATION }
// variables = {{
// 	currentModal: 'OrderDetailsModal',
// 		orderItem
// }}
// 			>
// 	{(mutation, { loading }) => (

// < OrderDetailsModal orderItem = { orderItem } >
// 	{({ setState }) => (
// 		<div onClick={() => setState({ isShown: true })} className="shadow-3 ph3 mh3 mt2 bg-white">
// 			{orderItem.createdAt}
// 		</div>
// 	)}
// </OrderDetailsModal >

// 	< Mutation
// mutation = { OPEN_MODAL_MUTATION }
// variables = {{
// 	currentModal: { activeModal: 'OrderDetailsModal', ...orderItem }
// }}
// 		>
// 	{(mutate, { loading }) => <div onClick={mutate}>{orderItem.createdAt}</div>}
// 		</Mutation >
