import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { changeGenre, getMoviesByGenre } from '../../store/actions';
import { Genre, DEFAULT_GENRE } from '../../constants';


type genreName = keyof typeof Genre;

function GenreList(): JSX.Element {
  // const { movies } = props;

  const { movies } = useAppSelector((state) => state);

  const genres = Array.from(new Set(movies.map((movie) => movie.genre))).sort();
  genres.unshift(DEFAULT_GENRE);

  const currentGenre = useAppSelector((state) => state.genre);

  const dispatch = useAppDispatch();


  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ' '}`} key={genre}>
            <Link to="/" className="catalog__genres-link"
              onClick={() => {
                dispatch(changeGenre(genre));
                dispatch(getMoviesByGenre());
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
