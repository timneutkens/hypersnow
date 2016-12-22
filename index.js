import React, { Component } from 'react'
import Snowfetti from 'react-snowfetti'

export function decorateHyper (Hyper) {
	return class extends Component {
		render () {
			return (
				<div>
					<Snowfetti amount={100} styles={{
						background: 'transparent',
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0
					}} />
					<Hyper {...this.props} />
				</div>
			)
		}
	}
}
