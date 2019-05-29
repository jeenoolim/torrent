import React, { Component } from 'react';
import Star from './Star';

export default class Rating extends Component {
	onChildClick = n => {
		console.log(n);
	};
	render() {
		return (
			<div className="rating">
				{[...Array(this.props.max).keys()].map(n => (
					<Star onParentClick={this.onChildClick} key={`star${n}`} active={this.props.amount > n} index={n} />
				))}
			</div>
		);
	}
}
