import React, { Component } from 'react'
import { Button, Pane, Text, Heading, Pill, Spinner, Popover } from 'evergreen-ui'
import posed, { PoseGroup, tween } from 'react-pose'
// import User from '../../user/User'

// const Panel = posed.div({
//   fullscreen: {
//     width: '100vw',
//     height: '100vh',
//     transition: tween,
//     flip: true
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//     transition: tween,
//     flip: true
//   }
// });

const Count = posed.span({
	enter: {
		y: -15,
		scale: 1.2
		// transition: tween,
		// flip: true
		// transform: rotateX(0.5),
		// transition: { duration: 100,  }

		// delay: 300
		// transition: {
		// 	y: { type: 'spring', stiffness: 1000, damping: 15 },
		// 	default: { duration: 300 }
		// }
	},
	exit: {
		y: 0,
		scale: 1
		// transition: tween,
		// flip: true
		// transition: { duration: 500 }
	}
})

class CartItemsCount extends Component {
	state = {
		pose: 'exit'
	}
	componentWillReceiveProps(prev, next) {
		this.setState({
			pose: 'enter'
		})
		setTimeout(() => {
			this.setState({
				pose: 'exit'
			})
		}, 90)
	}
	render() {
		return (
			<Count pose={this.state.pose} key={this.props.count}>
				<Pill display="inline-flex" marginLeft={8} backgroundColor="#D9822B" isSolid>
					{this.props.count ? this.props.count : 0}
				</Pill>
			</Count>
		)
	}
}

export default CartItemsCount
