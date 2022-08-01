const Movie = ({ movie }) => {
    return (
        <li className="movie" key={movie.id}>
            <img src={movie.poster} alt={movie.title} width="200px" height='300px' />
            <p>
                <b>{movie.title}</b>  by <b>{movie.director}</b> was released on <b>{movie.year}</b>
            </p>
            <p>Ratings: {movie.rating}</p>
        </li>
    )
}
export default Movie