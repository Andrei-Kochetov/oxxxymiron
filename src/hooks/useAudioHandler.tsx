import { useEffect, useState } from 'react';

const useAudioHandler = () => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<null | string>(null);

  const handleClick = (track: string) => {
    if (isPlaying && audio.src.endsWith(track)) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.src = track;
    audio.play();
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return { handleClick, isPlaying, currentTrack };
};

export default useAudioHandler;
