import MovieCard from '../movie-card/movie-card';
import { useAppSelector } from '../../hooks/hooks-index';
import { useState } from 'react';

function MovieList(): JSX.Element {

  const { movieListByGenre } = useAppSelector((state) => state);
  const [activeCard, setActiveCard] = useState({});

  return (
    <div className="catalog__films-list">
      {
        movieListByGenre.map((movie) => (
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
