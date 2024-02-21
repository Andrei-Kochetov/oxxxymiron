import SectionTitle from '../../../Title/SectionTitle';
import Track from './Track';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../../../Spinner/Spinner';
import useTracksItems from '../../../../hooks/useTracksItems';

const TracksSection = () => {
  const { trackItems, isLoading } = useTracksItems();

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
    <div className="tracks-section">
      <SectionTitle>Треки</SectionTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        trackItems
          .filter((_, i) => i < 3)
          .map((track, i) => (
            <ScrollAnimation
              animateIn={i % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
              delay={i * 100}
              className="tracks-section-item"
              animateOnce
              key={track.sys.id}
            >
              <Track
                {...track}
                onClick={handleClick}
                isPlaying={isPlaying}
                currentTrack={currentTrack}
              />
            </ScrollAnimation>
          ))
      )}
      <Link to="atracks" className="section-more-link">
        Все треки
      </Link>
    </div>
  );
};

export default TracksSection;
