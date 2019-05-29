import React, { Component } from 'react';

export default class Star extends Component {
	state = {
		active: this.props.active
	};

	onClickHandler = e => {
		this.setState({ active: !this.state.active });
		this.props.onParentClick(this.props.index);
	};

	render() {
		return (
			<div className="star" onClick={this.onClickHandler}>
				{this.state.active ? '★' : '☆'}
			</div>
		);
	}
}
