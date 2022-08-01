import { Movie } from '../../types/movie';

type MovieCardProps = {
  movie: Movie;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie } = props;
  const { title, imgSrc } = movie;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imgSrc.card}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default MovieCard;
