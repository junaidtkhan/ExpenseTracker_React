
import { movies } from "./movies"
import Movie from "../movie";
import './movie.css';
const fetchMovieData = () => {
    return movies;
}

export const MovieComponent = () => {
    const movieData = fetchMovieData();

    return (
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    )
                    )
                }
            </ul>
        </div>
    )
}
