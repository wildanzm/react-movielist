import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

function App() {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getMovieList().then((result) => {
			setPopularMovies(result);
		});
	}, []);

	const PopularMovieList = () => {
		const imgUrl = "https://image.tmdb.org/t/p/w500";
		return popularMovies.map((movie, i) => {
			return (
				<div className="Movie-wrapper" key={i}>
					<div className="Movie-title">{movie.title}</div>
					<img className="Movie-image" src={`${imgUrl}${movie.poster_path}`} alt="" />
					<div className="Movie-date">Release : {movie.release_date}</div>
					<div className="Movie-rate">Rate : {movie.vote_average}</div>
				</div>
			);
		});
	};

	const search = async (q) => {
		if (q.length > 3) {
			const query = await searchMovie(q);
			setPopularMovies(query.results);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie Mania Mantap</h1>
				<input placeholder="Mau nonton apa hari ini?" className="Movie-search" onChange={({ target }) => search(target.value)} />
				<div className="Movie-container">
					<PopularMovieList />
				</div>
			</header>
		</div>
	);
}

export default App;
