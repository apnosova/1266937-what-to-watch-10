import { useAppDispatch, useAppSelector } from '../../hooks/hooks-index';
import { Link } from 'react-router-dom';
import { changeGenre, getMoviesByGenre, resetFilter } from '../../store/actions';
import { Genre } from '../../constants';


function GenreList(): JSX.Element {

  const { genres } = useAppSelector((state) => state);
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ' '}`} key={genre}>
            <Link to="/" className="catalog__genres-link"
              onClick={() => {
                dispatch(resetFilter());
                dispatch(changeGenre(genre));
                dispatch(getMoviesByGenre());
              }}
            >
              {Genre[genre as keyof typeof Genre] ?? genre}
            </Link>
          </li >
        ))
      }
    </ul >
  );
}

export default GenreList;
