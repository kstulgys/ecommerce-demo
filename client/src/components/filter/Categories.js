import React from 'react'
import { Button, Pane, Text, Heading, Pill, SearchInput } from 'evergreen-ui'

const Categories = props => {
	return (
		<Pane display="flex" alignItems="center" justifyContent="center" marginTop={16}>
			<Pane elevation={3}>
				<SearchInput placeholder="Filter traits..." />
			</Pane>
		</Pane>
	)
}

export default Categories
