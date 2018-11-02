import React from 'react'
import Component from '@reactions/component'
import { Button, Pane, Text, Heading, Spinner, Icon, Dialog, toaster } from 'evergreen-ui'
import { Mutation, Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const TestModal = () => (
	<Component
		initialState={{ isShown: true, loader: true, h: window.innerHeight }}
		// didUpdate={({ state, setState }) => {
		// 	if (state.isLoading === true) {
		// 		window.setTimeout(() => {
		// 			setState({
		// 				isShown: false
		// 			})
		// 		}, 2000)
		// 	}
		// }}
		didMount={({ state, setState }) => {
			setTimeout(() => {
				setState({ loader: false })
				toaster.success('You are successfully loged in!')
			}, 3000)
		}}
	>
		{({ state, setState }) => (
			<Dialog
				topOffset={state.h * 0.4}
				height={100}
				width={100}
				// minHeightContent
				// minWidthContent
				hasFooter={false}
				hasHeader={false}
				isShown={state.isShown}
				onCloseComplete={() => setState({ isShown: false })}
			>
				{state.loader ? (
					<Pane display="flex" alignItems="center" justifyContent="center">
						<Spinner size={60} />
					</Pane>
				) : (
					<Pane display="flex" alignItems="center" justifyContent="center">
						<Icon icon="tick-circle" color="success" size={60} />
					</Pane>
				)}
			</Dialog>
		)}
	</Component>
)
// <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button>

export default TestModal
