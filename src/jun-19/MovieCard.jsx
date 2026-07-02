import { Link } from "react-router-dom";

function MovieCard(props) {
  const { id, poster, title, rating, language, genre, buttonText } =
    props.movieData;

  return (
    <Link
      to={`/movie/${id}?name=${encodeURIComponent(title)}`}
      className="movie-link"
    >
      <div className="movie-card">
        <img src={poster} alt={title} />

        <div className="movie-info">
          <h3>{title}</h3>

          <p>⭐ {rating}/10</p>

          <p>{language}</p>

          <p>{genre}</p>

          <button>{buttonText}</button>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
