import { useAppDispatch } from '../../hooks/hooks';
import { showMoreMovies } from '../../store/movies-process/movies-process';


function ShowMoreButton() {
  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(showMoreMovies());
  };


  return (
    <div className="catalog__more">
      <button className="catalog__button"
        type="button"
        onClick={handleShowMoreButtonClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
