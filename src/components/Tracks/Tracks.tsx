import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import { trackItems } from '../../utils/constants';
import Track from './Track/Track';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Tracks = () => {
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

  return (
    <div className="tracks">
      <SectionTitle>Треки</SectionTitle>
      {trackItems.map((track, i) => (
        <ScrollAnimation
          animateIn={i % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
          delay={i * 100}
          className="track-item"
          animateOnce
        >
          <Track
            {...track}
            onClick={handleClick}
            isPlaying={isPlaying}
            currentTrack={currentTrack}
          />
        </ScrollAnimation>
      ))}
      <Link to="atracks" className="section-more-link">
        Все треки
      </Link>
    </div>
  );
};

export default Tracks;
