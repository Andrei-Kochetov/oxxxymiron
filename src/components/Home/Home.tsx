import News from '../News/News';
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
      <News />
    </div>
  );
};
export default Home;
