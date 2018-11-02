import React, { Component } from 'react'
import { Button, Pane, Text, Heading, Pill, SearchInput } from 'evergreen-ui'
import debounce from 'lodash.debounce'
import Downshift, { resetIdCounter } from 'downshift'
import { SEARCH_ITEMS_QUERY } from '../../graphql/queries'
import { ApolloConsumer } from 'react-apollo'

class SearchField extends Component {
	state = {
		items: [],
		loading: false
	}
	onChange = debounce(async (e, client) => {
		// console.log('Searching...')
		// turn loading on
		this.setState({ loading: true })
		// Manually query apollo client
		const res = await client.query({
			query: SEARCH_ITEMS_QUERY,
			variables: { searchTerm: e.target.value }
		})
		this.setState({
			items: res.data.items,
			loading: false
		})
	}, 350)
	render() {
		resetIdCounter()
		return (
			<div className="flex justify-center items-center flex-column mt4 ">
				<Downshift itemToString={item => (item === null ? '' : item.title)}>
					{({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
						<div>
							<ApolloConsumer>
								{client => (
									<Pane elevation={4}>
										<SearchInput
											{...getInputProps({
												type: 'search',
												placeholder: 'Search For An Item',
												id: 'search',
												className: this.state.loading ? 'loading' : '',
												onChange: e => {
													e.persist()
													this.onChange(e, client)
												}
											})}
											height={60}
										/>
									</Pane>
								)}
							</ApolloConsumer>
							{isOpen && (
								<div
									className="w-90 w-50-ns z-1 absolute flex flex-column justify-center items-center"
									style={{
										top: 140,
										marginLeft: 'auto',
										marginRight: 'auto',
										left: 0,
										right: 0
									}}
								>
									{this.state.items.map((item, index) => (
										<div
											{...getItemProps({ item })}
											key={item.id}
											className={` ${index === highlightedIndex &&
												`hover-bg-black hover-white`} shadow-4 flex items-center w-100 pa2 bg-white pointer bg-animate`}
										>
											<img src={item.image} className="h4" />
											<p className="pl3">{item.title}</p>
										</div>
									))}
								</div>
							)}
						</div>
					)}
				</Downshift>
			</div>
		)
	}
}

export default SearchField
