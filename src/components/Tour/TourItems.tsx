import { Link } from 'react-router-dom';
import { tourItems } from '../../utils/constants';
import TourItem from './TourItem';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';

const TourItems = () => {
  return (
    <Section className="tour-items__wrapper container">
      <ScrollAnimation animateIn="fadeInLeft" offset={0} animateOnce>
        <SectionTitle>Концерты</SectionTitle>
        <span className="tour-items__line line" />
      </ScrollAnimation>
      <ul>
        {tourItems.map((item, i) => (
          <ScrollAnimation animateIn="fadeInLeft" delay={i ? i * 100 : 100} animateOnce>
            <TourItem {...item} key={i} />
          </ScrollAnimation>
        ))}
      </ul>
      <Link to="tour" className="section-more-link">
        Все концерты
      </Link>
    </Section>
  );
};

export default TourItems;
