import React from 'react'
import Component from '@reactions/component'
import { Icon, Pane, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../../user/User'
// import { DELETE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../graphql/mutations'
import { Mutation } from 'react-apollo'
import SellItem from './SellItem'

const SellItemList = ({ items }) => (
	<div className="flex flex-column w-100">
		{items.map(item => <SellItem key={item.id} item={item} />)}
	</div>
)

export default SellItemList
