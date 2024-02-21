import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import TourItem from './TourItem';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import Spinner from '../Spinner/Spinner';

import useTourItems from '../../hooks/useTourItems';

const TourItems = () => {
  const { tourItems, isLoading } = useTourItems();

  return (
    <Section className="tour-items__wrapper container">
      <ScrollAnimation animateIn="fadeInLeft" offset={0} animateOnce>
        <SectionTitle>Концерты</SectionTitle>
        <span className="tour-items__line line" />
      </ScrollAnimation>
      <ul>
        {isLoading ? (
          <Spinner />
        ) : (
          tourItems
            .filter((_, i) => i < 5)
            .map((item, i) => (
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={i ? i * 100 : 100}
                animateOnce
                key={item.sys.id}
              >
                <TourItem {...item} />
              </ScrollAnimation>
            ))
        )}
      </ul>
      <Link to="tour" className="section-more-link">
        Все концерты
      </Link>
    </Section>
  );
};

export default TourItems;
