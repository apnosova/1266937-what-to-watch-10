import MovieCard from '../movie-card/movie-card';
import { Movies } from '../../types/movie';

type MovieListProps = {
  movies: Movies;
}

function MovieList(props: MovieListProps): JSX.Element {
  const { movies } = props;

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie) =>
          <MovieCard key={movie.id} movie={movie} />
        )
      }
    </div>
  );
}

export default MovieList;
