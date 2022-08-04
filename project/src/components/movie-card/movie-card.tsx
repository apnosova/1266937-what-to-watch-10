import { Movie } from '../../types/movie';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type MovieCardProps = {
  movie: Movie;
  setActiveCard: (activeCard: object) => void;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie, setActiveCard } = props;
  const { title, imgSrc, id } = movie;
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
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default MovieCard;
