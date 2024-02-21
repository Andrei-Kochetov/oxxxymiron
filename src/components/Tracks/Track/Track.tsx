import { getLocalDateString } from '../../../utils/common';
import { ITrackProps } from '../../../utils/interfaces';
import Icon from '../../Icon/Icon';

const Track = ({
  image,
  track,
  releaseDate,
  trackName,
  isPlaying,
  currentTrack,
  onClick,
}: ITrackProps) => {
  return (
    <>
      <div className="track-item__img" onClick={() => onClick(track.url)}>
        <img src={image.url} alt="track image" />

        {isPlaying && currentTrack === track.url ? (
          <Icon name="pause" size={100} />
        ) : (
          <Icon name="play" size={100} />
        )}
      </div>

      <p className="track-item__date">{getLocalDateString(releaseDate)}</p>
      <h3 className="track-item__name">{trackName}</h3>
    </>
  );
};

export default Track;
