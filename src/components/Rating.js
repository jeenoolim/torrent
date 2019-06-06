import React, { Component } from 'react';
import Star from './Star';

export default class Rating extends Component {
	state = {
		amount: this.props.amount,
		mouseDown: false
	};

	onChildClick = n => {
		this.setState({ amount: n });
		this.props.onChange(n);
	};

	onMouseDown = e => {
		this.setState({ mouseDown: true });
	};

	onMouseUp = e => {
		this.setState({ mouseDown: false });
	};

	onMouseMove = e => {
		const { mouseDown } = this.state;
		if (mouseDown) {
			const { x, width } = e.currentTarget.getBoundingClientRect();
			const rating = Math.round((e.clientX - x) / width * 10);
			this.setState({ amount: rating });
			this.props.onChange(rating);
		}
	};

	render() {
		return (
			<div
				className="rating"
				onMouseDown={this.onMouseDown}
				onMouseUp={this.onMouseUp}
				onMouseMove={this.onMouseMove}
			>
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
