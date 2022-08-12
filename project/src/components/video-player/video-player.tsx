import { useState, useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
  isMuted: boolean;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const { src, poster, isPlaying, isMuted } = props;

  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const DELAY = 1000;

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      const timer = setTimeout(() => videoRef.current?.play(), DELAY);

      return () => clearTimeout(timer);
    }

    videoRef.current.pause();

  }, [isPlaying]);


  return (
    <video
      src={src}
      poster={poster}
      ref={videoRef}
      muted={isMuted}
      width='280'
    >
    </video>
  );
}

export default VideoPlayer;
