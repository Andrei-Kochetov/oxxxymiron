import SectionTitle from '../../../Title/SectionTitle';
import Track from './Track';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';
import useTracksItems from '../../../../hooks/useTracksItems';
import useAudioHandler from '../../../../hooks/useAudioHandler';

const TracksSection = () => {
  const { trackItems, isLoading } = useTracksItems();

  const { handleClick, isPlaying, currentTrack } = useAudioHandler();

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
