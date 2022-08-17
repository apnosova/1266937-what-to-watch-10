import { Movie } from '../../types/movie';
import { Link } from 'react-router-dom';
// import { AppRoute } from '../../const';
import VideoPlayer from '../../components/video-player/video-player';

type MovieCardProps = {
  movie: Movie;
  setActiveCard: (activeCard: object) => void;
  isPlaying: boolean;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie, setActiveCard, isPlaying } = props;
  const { title, imgSrc, id, video } = movie;
  const activeCard = movie;

  const mouseEnterHandle = () => {
    setActiveCard(activeCard);
  };

  const mouseLeaveHandle = () => {
    setActiveCard({});
  };


  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => mouseEnterHandle()}
      onMouseLeave={() => mouseLeaveHandle()}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={video.src}
          poster={imgSrc.card}
          isPlaying={isPlaying}
          isMuted
        />
      </div >

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article >
  );
}

export default MovieCard;
