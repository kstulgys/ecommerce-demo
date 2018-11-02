import React from 'react'
import Component from '@reactions/component'
import { Icon, Text, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { UPDATE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../../graphql/mutations'
import { Mutation } from 'react-apollo'
import { ME_QUERY, ALL_ITEMS_QUERY } from '../../../../graphql/queries'
import CreateItemModal from '../../CreateItemModal'

const UpdateItem = ({ item }) => {
	// console.log('itemfromUpdateItem', { ...item })
	return (
		<CreateItemModal {...item} edit={true}>
			{({ openModal }) => (
				<Icon className="pointer grow mr3" icon="edit" color="danger" onClick={openModal} />
			)}
		</CreateItemModal>
	)
}
export default UpdateItem
