import React from 'react'
import Component from '@reactions/component'
import { Dialog, Pane, Tab, Heading, Tablist, Spinner, Text } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { ME_QUERY } from '../../../../graphql/queries'
import { Query } from 'react-apollo'
import { GET_ACTIVE_MODAL } from '../../../../graphql/queries'
import ModalWrapper from '../../../modal/ModalWrapper'
import { format } from 'date-fns'

const OrderDetailsModal = ({ children, orderItem }) => {
	const orderDate = format(orderItem.createdAt, 'MM/DD/YYYY')
	return (
		<Component initialState={{ isShown: false }}>
			{({ state, setState }) => (
				<Pane>
					<Dialog
						isShown={state.isShown}
						onCloseComplete={() => setState({ isShown: false })}
						hasFooter={false}
						hasHeader={false}
					>
						<div className="flex flex-column w-100 mb2">
							<Heading>Order date: {orderDate}</Heading>
							<Text>Total: ${orderItem.total}</Text>
						</div>

						{orderItem.items.map(item => (
							<div
								key={item.id}
								className="flex items-center w-100 justify-between pv3 bb b--light-gray"
							>
								<img src={item.image} className="w4" />
								<Text>{item.title}</Text>
								<Text>
									{item.quantity} x {item.price}
								</Text>
							</div>
						))}
					</Dialog>
					{children({ setState })}
				</Pane>
			)}
		</Component>
	)
}
// <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button>

export default OrderDetailsModal

// < Query query = { GET_ACTIVE_MODAL } >
//   {({ data: { activeModal } }) => {
// console.log(activeModal)
// return (

// < Component initialState = {{ isShown: false }}>
// 	{({ state, setState }) => (
// 		<Pane>
// 			<Dialog
// 				isShown={state.isShown}
// 				onCloseComplete={() => setState({ isShown: false })}
// 				hasFooter={false}
// 				hasHeader={false}
// 			>
// 				<Text>{orderItem.createdAt}</Text>
// 			</Dialog>
// 			{children({ setState })}
// 		</Pane>
// 	)}
// </Component >

// 	< Query query = { GET_ACTIVE_MODAL } >
// 		{({ data: { currentModal }, loading }) => {
// 	if (loading) return null
// 	console.log('activeModal from OrderDetailsModal', currentModal)
// 	return (
// 		<ModalWrapper>
// 			<div className="flex flex-column">
// 				{currentModal.items.map(item => <Text>{item.id}</Text>)}
// 			</div>
// 		</ModalWrapper>
// 	)
// }}
// 		</Query >
