import { useState, useEffect, useRef } from 'react';
import { VIDEO_TIME_UPDATE } from '../constants';
import { getFormattedTime } from '../utils';


interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}


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


  const isFullScreen = (): boolean => {
    const doc = document as DocumentWithFullscreen;
    return !!(doc.fullscreenElement ||
      doc.mozFullScreenElement ||
      doc.webkitFullscreenElement ||
      doc.msFullscreenElement);
  };

  const requestFullScreen = (element: DocumentElementWithFullscreen) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
  };

  const exitFullScreen = (doc: DocumentWithFullscreen) => {
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    }
  };

  const toggleFullscreen = (): void => {
    if (isFullScreen()) {
      exitFullScreen(document);
    } else {
      requestFullScreen(document.documentElement);
    }
  };


  return { handlePlayToggle, isPlaying, timeLeft, progress, toggleFullscreen, videoRef, isFullScreen, exitFullScreen };
};
