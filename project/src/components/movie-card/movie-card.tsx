import { Movie } from '../../types/movie';

type MovieCardProps = {
  movie: Movie;
  setActiveCard: (activeCard: object) => void;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie, setActiveCard } = props;
  const { title, imgSrc } = movie;
  const activeCard = movie;

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveCard(activeCard)}
      onMouseLeave={() => setActiveCard({})}
    >
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
