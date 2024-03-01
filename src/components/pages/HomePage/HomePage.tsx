import News from './NewsSection/NewsSection';
import TourBanner from '../NewsSinglePage/TourBanner';
import TourItems from './TourSection/TourItems';
import Tracks from './TracksSection/TracksSection';
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
