import { Movie } from '../../../types/movie';
import { getRatingLevel } from '../../../utils';


type OverviewProps = {
  movie: Movie;
}

function Overview(props: OverviewProps): JSX.Element {

  const { movie } = props;
  const {
    scoresCount,
    rating,
    description,
    director,
    starring } = movie;


  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(rating)}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`} </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring?.map((item) => item).join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default Overview;
