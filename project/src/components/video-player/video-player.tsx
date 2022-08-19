import { useState, useEffect, useRef } from 'react';
import { VIDEO_DELAY } from '../../const';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
  isMuted: boolean;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const { src, poster, isPlaying, isMuted } = props;

  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      const timer = setTimeout(() => videoRef.current?.play(), VIDEO_DELAY);

      return () => clearTimeout(timer);
    }

    videoRef.current.pause();
    videoRef.current.load();

  }, [isLoading, isPlaying]);


  return (
    <video style={{ objectFit: 'cover' }}
      src={src}
      poster={poster}
      ref={videoRef}
      muted={isMuted}
      width='100%'
      height='100%'
    >
    </video>
  );
}

export default VideoPlayer;
