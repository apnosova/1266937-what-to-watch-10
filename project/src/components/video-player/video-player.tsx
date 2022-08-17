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
    videoRef.current.load();

  }, [isPlaying]);


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
