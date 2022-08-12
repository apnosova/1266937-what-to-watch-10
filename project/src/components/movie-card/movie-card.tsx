import { Movie } from '../../types/movie';
import { Link } from 'react-router-dom';
// import { AppRoute } from '../../const';
import { useState } from 'react';
import VideoPlayer from '../../components/video-player/video-player';

type MovieCardProps = {
  movie: Movie;
  setActiveCard: (activeCard: object) => void;
}

function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie, setActiveCard } = props;
  const { title, imgSrc, id, video } = movie;
  const activeCard = movie;

  const [isPlaying, setIsPlaying] = useState(false);

  const mouseEnterHandler = () => {
    setActiveCard(activeCard);
    setIsPlaying(true);

  };

  const mouseLeaveHandler = () => {
    setActiveCard({});
    setIsPlaying(false);

  };


  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseEnter={() => mouseEnterHandler()}
        onMouseLeave={() => mouseLeaveHandler()}
      >
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
