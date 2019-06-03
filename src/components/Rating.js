import React, { Component } from 'react';
import Star from './Star';

export default class Rating extends Component {
	state = {
		amount: this.props.amount
	};

	onChildClick = n => {
		this.setState({ amount: n });
		this.props.onChange(n);
	};
	render() {
		return (
			<div className="rating">
				{[...Array(this.props.max).keys()]
					.map(n => n + 1)
					.map(n => (
						<Star
							onParentClick={this.onChildClick}
							key={`star${n}`}
							active={n <= this.state.amount}
							amount={this.state.amount}
							index={n}
						/>
					))}
			</div>
		);
	}
}
