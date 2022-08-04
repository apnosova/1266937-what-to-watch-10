import { useParams } from 'react-router-dom';
import { Movies } from '../../types/movie';
import { Movie } from '../../types/movie';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewProps = {
  movies: Movies;
}

function AddReviewScreen(props: AddReviewProps): JSX.Element {
  const { movies } = props;

  const params = useParams();
  const activeReview = movies.find((movie) => movie.id === params.id);
  const { title, imgSrc } = activeReview as Movie;


  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={imgSrc.bg} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="#todo">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#todo">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={imgSrc.poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">

        <ReviewForm />

      </div>

    </section>
  );
}

export default AddReviewScreen;
