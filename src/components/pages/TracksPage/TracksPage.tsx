import ScrollAnimation from 'react-animate-on-scroll';
import useTracksItems from '../../../hooks/useTracksItems';
import Spinner from '../../Spinner/Spinner';
import PageTitle from '../../Title/PageTitle';
import Icon from '../../Icon/Icon';
import { getLocalDateString } from '../../../utils/common';
import useAudioHandler from '../../../hooks/useAudioHandler';

const TracksPage = () => {
  const { handleClick, isPlaying, currentTrack } = useAudioHandler();

  const { trackItems, isLoading } = useTracksItems();
  return (
    <div className="container tracks-page">
      <PageTitle>Все треки</PageTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        trackItems.map(
          ({ track, sys, image, releaseDate, trackName, description }, i) => (
            <ScrollAnimation
              animateIn={i % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
              delay={i * 100}
              className="tracks-page-item"
              animateOnce
              key={sys.id}
            >
              <div
                className="tracks-page-item__img"
                onClick={() => handleClick(track.url)}
              >
                <img src={image.url} alt="track image" />
              </div>
              <div className="tracks-page-item__info-section">
                <p className="tracks-page-item__date">
                  {getLocalDateString(releaseDate)}
                </p>
                <h3 className="tracks-page-item__name">{trackName}</h3>
                <p className="tracks-page-item__description">{description}</p>
              </div>
              <button
                className="tracks-page-item__button"
                onClick={() => handleClick(track.url)}
              >
                слушать
                {isPlaying && currentTrack === track.url ? (
                  <Icon name="pause" />
                ) : (
                  <Icon name="play" />
                )}
              </button>
            </ScrollAnimation>
          )
        )
      )}
    </div>
  );
};

export default TracksPage;
