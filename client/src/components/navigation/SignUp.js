import React from 'react'
import Component from '@reactions/component'
import { Dialog, Pane, Text, InlineAlert, Icon, Spinner, toaster } from 'evergreen-ui'
import { Mutation, Query, graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import { AUTH_TOKEN } from '../../utils/constants'
import { ME_QUERY } from '../../graphql/queries'

class SignUp extends Component {
	state = {
		error: '',
		loader: true,
		h: window.innerHeight
	}

	async componentDidMount() {
		const res = await this.props
			.signup({
				variables: { shortLivedToken: this.props.match.params.token },
				refetchQueries: [{ query: ME_QUERY }]
			})
			.catch(e => {
				this.setState({ error: e.message, loader: false })
			})
		if (res) {
			const token = res.data.signup.token
			localStorage.setItem(AUTH_TOKEN, token)
			this.setState({ loader: false })
			setTimeout(() => {
				this.props.history.push('/')
				window.location.reload()
			}, 3500)
		}
	}

	render() {
		if (this.state.loader) return <Spinner marginX="auto" marginY={this.state.h * 0.2} size={60} />

		if (this.state.error) {
			toaster.warning(`${this.state.error}`)
			setTimeout(() => {
				this.props.history.push('/')
			}, 2000)
		}
		if (!this.state.error && !this.state.loader) {
			toaster.success('Congrats! You are succesfully loged in!', {
				duration: 3
			})
		}
		return null
	}
}

const SIGN_UP = gql`
	mutation signup($shortLivedToken: String!){
		signup(shortLivedToken: $shortLivedToken){
			user {
        id
        email
      }
      token
		}
	}
`

export default graphql(SIGN_UP, {
	name: 'signup'
})(SignUp)

// return (
// <Dialog
// 	topOffset={this.state.h * 0.4}
// 	height={100}
// 	width={100}
// 	hasFooter={false}
// 	hasHeader={false}
// 	isShown={this.state.isShown}
// 	onCloseComplete={() => this.setState({ isShown: false })}
// >
// <Pane display="flex" alignItems="center" justifyContent="center">
// 	{this.state.loader && <Spinner size={60} />}
// 	{!this.state.loader &&
// 		!this.state.error && <Icon icon="tick-circle" color="success" size={60} />}
// </Pane>
// </Dialog>
// onCompleted={toaster.success('You are succesfuly loged in!', {
// 	duration: 5
// })}

//   < Mutation mutation = { SIGN_UP } variables = {{ shortLivedToken: this.state.shortLivedToken }}>
//     {(mutation, { data, loading, error }) => {
//   if (loading)
//     return (
//       <Pane
//         display="flex"
//         alignItems="center"
//         // justifyContent="center"
//         height={400}
//       >
//         <Spinner />
//       </Pane>
//     )
//   if (error)
//     return (
//       <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
//         <p>{this.props.match.params.token}</p>
//         <Text>Error occurred {error.message}</Text>
//       </Pane>
//     )
//   this.handleMutation(mutation)
//   return null
// }}
// 			</Mutation >
