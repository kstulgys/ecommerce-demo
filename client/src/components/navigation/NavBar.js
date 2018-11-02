import React from 'react'
import { Button, Pane, Text, Heading, Pill, Spinner, Position } from 'evergreen-ui'
import MyCart from './cart/MyCart'
import LogInModal from './LogInModal'
import CreateItemModal from './CreateItemModal'
import User from '../user/User'
// const data = {
// 	me: false
// }

const NavBar = props => {
	return (
		<User>
			{({ data, loading }) => {
				if (loading) return <Spinner marginX="auto" size={60} />
				return (
					<Pane elevation={4} display="flex" padding={16} background="#47B881">
						<Pane flex={1} alignItems="center" display="flex">
							<Heading className="grow pointer" color="#F9F9FB" size={600}>
								E-commerce-demo
							</Heading>
						</Pane>
						<Pane>
							{data && data.me ? (
								<>
									<Button color="#F9F9FB" className="grow" appearance="minimal" marginRight={16}>
										Items
									</Button>
									<CreateItemModal>
										{({ openModal }) => (
											<Button
												color="#F9F9FB"
												className="grow"
												appearance="minimal"
												marginRight={16}
												onClick={openModal}
											>
												Sell
											</Button>
										)}
									</CreateItemModal>

									<MyCart />
								</>
							) : (
								<LogInModal>
									{({ setState }) => (
										<Button
											onClick={() => setState({ isShown: true })}
											className="shadow-4 grow br-pill"
											marginRight={16}
										>
											Log in
										</Button>
									)}
								</LogInModal>
							)}
						</Pane>
					</Pane>
				)
			}}
		</User>
	)
}

export default NavBar
