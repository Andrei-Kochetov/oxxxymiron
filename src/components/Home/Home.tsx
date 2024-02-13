import TourBanner from '../TourBanner/TourBanner';
import TourItems from '../Tour/TourItems';
import MainBanner from './MainBanner';

const Home = () => {
  return (
    <div>
      <MainBanner />
      <TourItems />
      <TourBanner />
    </div>
  );
};
export default Home;
