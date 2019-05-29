import React, { Component } from 'react';
import Movie from './components/Movie';

export default class App extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		let api = 'https://yts.am/api/v2/list_movies.json';
		let res = await fetch(api);
		res = await res.json();
		this.setState({ movies: res.data.movies });
		// fetch(api)
		// 	.then(function(res) {
		// 		return res.json();
		// 	})
		// 	.then(res => {
		// 		this.setState({ movies: res.data.movies }, () => console.log(this.state));
		// 	});
	}

	render() {
		return (
			<div>
				{this.state.movies.map(n => {
					const { title, description_full, genres, small_cover_image, rating } = n;
					return (
						<Movie
							title={title}
							description={description_full}
							genres={genres}
							cover={small_cover_image}
							rating={rating}
						/>
					);
				})}
			</div>
		);
	}
}
