import { Movie } from '../../types/movie';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';
import VideoPlayer from '../../components/video-player/video-player';

type MovieCardProps = {
  movie: Movie;
  setActiveCard: (activeCard: object) => void;
  isPlaying: boolean;
}


function MovieCard(props: MovieCardProps): JSX.Element {
  const { movie, setActiveCard, isPlaying } = props;
  const { name, previewImage, id, videoLink } = movie;
  const activeCard = movie;

  const mouseEnterHandle = () => {
    setActiveCard(activeCard);
  };

  const mouseLeaveHandle = () => {
    setActiveCard({});
  };

  const navigate = useNavigate();


  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => mouseEnterHandle()}
      onMouseLeave={() => mouseLeaveHandle()}
    >


      <div className="small-film-card__image" style={{ cursor: 'pointer' }}
        onClick={() => navigate(`${AppRoute.Movies}/${id}`)}
      >

        <VideoPlayer
          src={videoLink}
          poster={previewImage}
          isPlaying={isPlaying}
          isMuted
        />

      </div >

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Movies}/${id}`}>{name}</Link>
      </h3>
    </article >
  );
}


export default MovieCard;
