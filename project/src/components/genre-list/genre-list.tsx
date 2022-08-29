import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { resetFilter, changeGenre, getMoviesByGenre } from '../../store/movies-process/movies-process';
import { Genre } from '../../constants';
import { getGenreList, getCurrentGenre } from '../../store/movies-process/selectors';


function GenreList(): JSX.Element {

  const genres = useAppSelector(getGenreList);
  const currentGenre = useAppSelector(getCurrentGenre);
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
