import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = "2ab9efeb058b8a8b7ba680976a40ed09";


export const getMovieList = async() => {
   const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
   return movie.data.results;
   
}

export const searchMovie = async (q) => {
   const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
   
   return search.data;
}