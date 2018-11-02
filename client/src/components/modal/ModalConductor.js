import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import LogInModal from '../navigation/LogInModal'
import OrderDetailsModal from '../navigation/cart/orders/OrderDetailsModal'
import { GET_ACTIVE_MODAL } from '../../graphql/queries'

const ModalConductor = props => {
	return (
		<Query query={GET_ACTIVE_MODAL}>
			{({ data: { currentModal }, loading }) => {
				if (loading) return null
				console.log('activeModal from conductor', currentModal)
				switch (currentModal.activeModal) {
					case 'LogInModal':
						return <LogInModal />
					case 'OrderDetailsModal':
						return <OrderDetailsModal {...currentModal} />
					default:
						return null
				}
			}}
		</Query>
	)
}

export default ModalConductor
