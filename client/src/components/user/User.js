import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { ME_QUERY } from '../../graphql/queries'
import { AUTH_TOKEN } from '../../utils/constants'

const User = props => (
	<Query query={ME_QUERY}>
		{({ data, loading, error }) => {
			// console.log('data', data)
			return props.children({ data, loading })
		}}
	</Query>
)

export default User
