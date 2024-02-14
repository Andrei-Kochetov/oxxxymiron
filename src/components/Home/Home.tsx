import TourBanner from '../Tour/TourBanner';
import TourItems from '../Tour/TourItems';
import Tracks from '../Tracks/Tracks';
import MainBanner from './MainBanner';

const Home = () => {
  return (
    <div>
      <MainBanner />
      <TourItems />
      <TourBanner />
      <Tracks />
    </div>
  );
};
export default Home;
