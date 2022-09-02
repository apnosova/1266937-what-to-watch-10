import { useState, useEffect, useRef } from 'react';
import { VIDEO_TIME_UPDATE } from '../constants';
import { getFormattedTime } from '../utils';


export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<string>('0');


  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    videoRef.current.addEventListener('ended', () => setIsPlaying(false));

  }, [isPlaying, videoRef]);

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
      setProgress(currentProgress);

      const currentTimeLeft = videoRef.current.duration - videoRef.current.currentTime;
      const formattedTimeLeft = getFormattedTime(currentTimeLeft);
      setTimeLeft(formattedTimeLeft);

    }, VIDEO_TIME_UPDATE);

    return () => clearInterval(handleOnTimeUpdate);

  }, [videoRef, progress, timeLeft]);


  const toggleFullscreen = (): void => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.requestFullscreen();
  };


  return { handlePlayToggle, isPlaying, timeLeft, progress, toggleFullscreen, videoRef };
};
