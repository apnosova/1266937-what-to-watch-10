import MovieCard from '../movie-card/movie-card';
import { Movies } from '../../types/movie';
import { useState } from 'react';


type MovieListProps = {
  movies: Movies;
}

function MovieList(props: MovieListProps): JSX.Element {
  const { movies } = props;

  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setActiveCard={setActiveCard}
            isPlaying={movie === activeCard}
          />
        ))
      }
    </div>
  );
}

export default MovieList;
