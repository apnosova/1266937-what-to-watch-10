import { Movie } from '../../../types/movie';
import { ratingLevel, movieScore } from '../../../constants';


type TabContentOverviewProps = {
  movie: Movie;
}

function TabContentOverview(props: TabContentOverviewProps): JSX.Element {

  const { movie } = props;
  const {
    scoresCount,
    rating,
    description,
    director,
    starring } = movie;

  const getRatingLevel = (score: typeof rating) => {
    switch (true) {
      case score >= movieScore.Bad && score < movieScore.Normal:
        return ratingLevel[ratingLevel.Bad];
      case score >= movieScore.Normal && score < movieScore.Good:
        return ratingLevel[ratingLevel.Normal];
      case score >= movieScore.Good && score < movieScore.VeryGood:
        return ratingLevel.Good;
      case score >= movieScore.VeryGood && score < movieScore.Awesome:
        return ratingLevel.VeryGood;
      case score === movieScore.Awesome:
        return ratingLevel.Awesome;
    }
  };


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

export default TabContentOverview;
