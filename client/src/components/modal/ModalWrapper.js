import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import { CLOSE_MODAL_MUTATION } from '../../graphql/mutations'
import { Dialog } from 'evergreen-ui'

const ModalWrapper = ({ children }) => (
	<Mutation mutation={CLOSE_MODAL_MUTATION}>
		{mutation => (
			<Dialog isShown={true} onCloseComplete={mutation} hasFooter={false} hasHeader={false}>
				{children}
			</Dialog>
		)}
	</Mutation>
)

export default ModalWrapper
