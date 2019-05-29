import React, { Component } from 'react';
import Movie from './components/Movie';

const api = 'https://yts.am/api/v2/list_movies.json';
export default class App extends Component {
	state = {
		movies: []
	};

	async componentDidMount() {
		const res = await fetch(api);
		const { data } = await res.json();
		const { movies } = data;
		this.setState({ movies });
	}

	render() {
		return (
			<div>
				{this.state.movies.map((movie, i) => {
					return <Movie data={movie} key={`movie${i}`} />;
				})}
			</div>
		);
	}
}
