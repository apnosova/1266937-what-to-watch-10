import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { Movies } from '../../types/movie';
import { genreSwitching, movieListByGenre } from '../../store/actions';
import { Genre, DEFAULTGENRE } from '../../const';

type GenreListProps = {
  movies: Movies;
}


function GenreList(props: GenreListProps): JSX.Element {
  const { movies } = props;

  const genres = Array.from(new Set(movies.map((movie) => movie.genre))).sort();
  genres.unshift(DEFAULTGENRE);

  const currentGenre = useAppSelector((state) => state.genre);

  const dispatch = useAppDispatch();

  type genreName = keyof typeof Genre;


  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ' '}`} key={genre}>
            <Link to="/" className="catalog__genres-link"
              onClick={() => {
                dispatch(genreSwitching(genre));
                dispatch(movieListByGenre());
              }}
            >
              {Genre[genre as genreName] ? Genre[genre as genreName] : genre}
            </Link>
          </li >
        ))
      }
    </ul >
  );
}


export default GenreList;
