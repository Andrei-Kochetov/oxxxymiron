import { Link } from 'react-router-dom';
import { tourItems } from '../../utils/constants';
import TourItem from './TourItem';
import ScrollAnimation from 'react-animate-on-scroll';

const TourItems = () => {
  return (
    <div className="tour-items__wrapper container">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <h2 className="tour-items__title">Концерты</h2>
      </ScrollAnimation>
      <span className="line" />
      <ul>
        {tourItems.map((item, i) => (
          <ScrollAnimation animateIn="fadeInLeft" delay={i * 100} animateOnce>
            <TourItem {...item} key={i} />
          </ScrollAnimation>
        ))}
      </ul>
      <Link to="concerts" className="tour-items__link-more-info">
        Все концерты
      </Link>
    </div>
  );
};

export default TourItems;
