import { useState, useEffect, useRef } from 'react';


export const useVideoPlayer = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);


  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    videoRef.current.load();

    videoRef.current.addEventListener('ended', () => setIsPlaying(false));

  }, [isPlaying, isLoading, videoRef]);


  const handlePlayToggle = (): void => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    const handleOnTimeUpdate = setInterval(() => {
      if (videoRef.current === null) {
        return;
      }

      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;

      if (!Number(duration)) {
        return;
      }

      const currentProgress = Math.round((currentTime / duration) * 100);
      const currentTimeLeft = videoRef.current.duration - videoRef.current.currentTime;

      setProgress(currentProgress);
      setTimeLeft(currentTimeLeft);

    }, 100);

    return () => clearInterval(handleOnTimeUpdate);

  }, [videoRef, progress, timeLeft]);


  const toggleFullscreen = (): void => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const toggleMute = () => {

    setIsMuted(!isMuted);
  };


  return { handlePlayToggle, isPlaying, timeLeft, progress, toggleFullscreen, toggleMute, videoRef, };
};
