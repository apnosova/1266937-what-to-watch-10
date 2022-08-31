import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { fetchMovieAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import { getMovie } from '../../store/movies-process/selectors';


function AddReviewScreen(): JSX.Element {
  const movie = useAppSelector(getMovie);

  const params = useParams();
  const filmId = Number(params.id);
  const { name, backgroundImage, posterImage } = movie;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAction(filmId));
  }, [dispatch, filmId]);


  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isBreadcrumbs />

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">

        <ReviewForm />

      </div>

    </section>
  );
}

export default AddReviewScreen;
