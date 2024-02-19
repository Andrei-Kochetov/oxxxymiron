import { getLocalDateString } from '../../../utils/common';
import { ITrackItem } from '../../../utils/interfaces';

const Track = ({ image, track, releaseDate, trackName }: ITrackItem) => {
  return (
    <>
      <img src={image} alt="track image" className="track-item__img" />
      <p className="track-item__date">{getLocalDateString(releaseDate)}</p>
      <h3 className="track-item__name">{trackName}</h3>
    </>
  );
};

export default Track;
