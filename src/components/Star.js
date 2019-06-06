import React, { Component } from 'react';

export default class Star extends Component {
	state = {
		active: this.props.active
	};

	componentWillReceiveProps(nextProps) {
		this.setState({ active: nextProps.active });
	}

	onClickHandler = async () => {
		const { index, amount } = this.props;
		const { active } = this.state;
		await this.setState({ active: index >= amount ? !active : active });
		this.props.onParentClick(index + (this.state.active ? 0 : -1));
	};

	render() {
		return (
			<div className="star" onClick={this.onClickHandler}>
				{this.state.active ? '★' : '☆'}
			</div>
		);
	}
}
