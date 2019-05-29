import React, { Component } from 'react';

export default class Movie extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<img src={this.props.cover} alt="cover" />
				<div>{this.props.rating}</div>
			</div>
		);
	}
}
