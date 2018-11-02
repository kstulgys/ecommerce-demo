import React from 'react'
import Component from '@reactions/component'
import { Icon, Pane, Tab, Heading, Tablist, Spinner, SideSheet } from 'evergreen-ui'
import { withRouter } from 'react-router-dom'
import User from '../../user/User'
import { DELETE_ITEM_MUTATION, REMOVE_FROM_CART_MUTATION } from '../../../graphql/mutations'
import { Mutation } from 'react-apollo'
import SellItemList from './sellItem'
import CartItemList from './cartItem'
import OrderList from './orders'

const Slider = props => (
	<User>
		{({ data, loading }) => (
			<Component
				initialState={{
					isShown: true,
					selectedIndex: 0,
					tabs: ['Cart', 'Orders', 'Sell', 'Log out']
				}}
			>
				{({ state, setState }) => (
					<>
						<SideSheet
							width={370}
							isShown={state.isShown}
							onCloseComplete={() => setState({ isShown: false })}
							containerProps={{
								display: 'flex',
								flex: '1',
								flexDirection: 'column'
							}}
						>
							<Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
								<Pane padding={16}>
									<Heading size={600}>{data.me.email}</Heading>
								</Pane>
							</Pane>
							<Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
								<Pane display="flex" padding={8}>
									<Tablist display="flex" flex="1" marginRight={24}>
										{state.tabs.map((tab, index) => (
											<Tab
												// style={{ alignSelf: 'flex-end' }}
												key={tab}
												id={tab}
												onSelect={() => {
													setState({ selectedIndex: index })
													if (tab === 'Log out') {
														localStorage.removeItem('AUTH_TOKEN')
														props.history.push('/')
														window.location.reload()
													}
												}}
												isSelected={index === state.selectedIndex}
												aria-controls={`panel-${tab}`}
											>
												{tab}
											</Tab>
										))}
									</Tablist>
								</Pane>

								{state.tabs.map((tab, index) => (
									<Pane
										width="100%"
										key={tab}
										id={`panel-${tab}`}
										role="tabpanel"
										aria-labelledby={tab}
										aria-hidden={index !== state.selectedIndex}
										display={index === state.selectedIndex ? 'block' : 'none'}
									>
										{tab === 'Sell' ? (
											<SellItemList items={data.me.items} />
										) : (
											loading && <Spinner marginX="auto" size={60} />
										)}
										{tab === 'Cart' ? (
											<CartItemList cart={data.me.cart} />
										) : (
											loading && <Spinner marginX="auto" size={60} />
										)}
										{tab === 'Orders' ? (
											<OrderList />
										) : (
											loading && <Spinner marginX="auto" size={60} />
										)}
									</Pane>
								))}
							</Pane>
						</SideSheet>
						{props.children({ setState })}
					</>
				)}
			</Component>
		)}
	</User>
)
//	< Paragraph > Content of { tab }</Paragraph >
//
export default withRouter(Slider)

// <Button onClick={() => setState({ isShown: true })}>Show Basic Side Sheet</Button>

// < Pane height = { 120} >
// <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
// 	{state.tabs.map((tab, index) => (
// 		<Tab
// 			key={tab}
// 			id={tab}
// 			onSelect={() => setState({ selectedIndex: index })}
// 			isSelected={index === state.selectedIndex}
// 			aria-controls={`panel-${tab}`}
// 		>
// 			{tab}
// 		</Tab>
// 	))}
// </Tablist>
// <Pane padding={16} background="tint1" flex="1">
// 	{state.tabs.map((tab, index) => (
// 		<Pane
// 			key={tab}
// 			id={`panel-${tab}`}
// 			role="tabpanel"
// 			aria-labelledby={tab}
// 			aria-hidden={index !== state.selectedIndex}
// 			display={index === state.selectedIndex ? 'block' : 'none'}
// 		>
// 			<Paragraph>Panel {tab}</Paragraph>
// 		</Pane>
// 	))}
// </Pane>
//   </Pane >
