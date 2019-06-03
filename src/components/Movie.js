import React, { Component } from 'react';
import Rating from './Rating';

export default class Movie extends Component {
	state = {
		rating: this.props.data.rating
	};

	onChange = value => {
		this.setState({ rating: value });
	};

	render() {
		const { title, genres, small_cover_image } = this.props.data;
		const { rating } = this.state;
		return (
			<div className="movie">
				<h3>{title}</h3>
				<p>{genres}</p>
				<img src={small_cover_image} alt="cover" />
				<Rating amount={rating} max={10} onChange={this.onChange} />
				<p>{rating}</p>
			</div>
		);
	}
}
