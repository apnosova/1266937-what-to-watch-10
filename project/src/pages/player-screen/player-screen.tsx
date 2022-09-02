import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { getMovie } from '../../store/movies-process/selectors';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { fetchMovieAction } from '../../store/api-actions';
import { useVideoPlayer } from '../../hooks/use-video-player';
import { getLoadedDataStatus } from '../../store/movies-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


function PlayerScreen(): JSX.Element {
  const {
    isPlaying,
    handlePlayToggle,
    timeLeft,
    progress,
    toggleFullscreen,
    videoRef
  } = useVideoPlayer();

  const params = useParams();
  const filmId = Number(params.id);

  const currentMovie = useAppSelector(getMovie);
  const { videoLink, posterImage } = currentMovie;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAction(filmId));
  }, [dispatch, filmId]);

  const navigate = useNavigate();

  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <div className="player">
      <video className="player__video"
        ref={videoRef}
        src={videoLink}
        poster={posterImage}
      >
      </video>

      <button className="player__exit"
        type="button"
        onClick={() => navigate(`/films/${filmId}`)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler"
              style={{ left: `${progress}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button className="player__play"
            type="button"
            onClick={handlePlayToggle}
          >
            {
              isPlaying
                ?
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
                :
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </>
            }
          </button>
          <div className="player__name">Transpotting</div>

          <button className="player__full-screen"
            type="button"
            onClick={toggleFullscreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >
  );
}


export default PlayerScreen;
