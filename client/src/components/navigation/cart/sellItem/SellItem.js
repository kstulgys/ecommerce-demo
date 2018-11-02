import React from 'react'
import Component from '@reactions/component'
import { Icon, Text, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
import { DELETE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../../graphql/mutations'
import { Mutation } from 'react-apollo'
import { ME_QUERY, ALL_ITEMS_QUERY } from '../../../../graphql/queries'
import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'

const SellItem = ({ item }) => (
	<div className="pa3 flex items-center justify-between bb b--light-gray w-100">
		<Text className="w-70">{item.title}</Text>
		<div className="flex flex-nowrap flex-end">
			<UpdateItem item={item} />
			<DeleteItem id={item.id} />
		</div>
	</div>
)

export default SellItem
