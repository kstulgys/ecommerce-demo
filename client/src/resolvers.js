import gql from 'graphql-tag'

export const defaults = {
	currentModal: {
		__typename: 'CurrentModal',
		activeModal: null,
		items: []
	}
}

export const resolvers = {
	Mutation: {
		openModal: (_, { currentModal }, { cache }) => {
			const data = {
				currentModal: {
					__typename: 'CurrentModal',
					activeModal: currentModal.activeModal,
					items: currentModal.items
				}
			}
			cache.writeData({ data })
			return null
		},
		closeModal: (_, args, { cache }) => {
			const data = {
				currentModal: {
					__typename: 'CurrentModal',
					activeModal: null,
					items: []
				}
			}
			cache.writeData({ data })
			return null
		}
	}
}
