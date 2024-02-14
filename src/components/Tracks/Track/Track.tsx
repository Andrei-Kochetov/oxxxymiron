import { ITrackItem } from '../../../utils/interfaces';

const Track = ({ image, track, releaseDate, trackName }: ITrackItem) => {
  return (
    <>
      <img src={image} alt="track image" />
      <p>{releaseDate}</p>
      <h3>{trackName}</h3>
    </>
  );
};

export default Track;
