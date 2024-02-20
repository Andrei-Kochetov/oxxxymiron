import { Link } from 'react-router-dom';
import TourItem from './TourItem';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import { getTourItems } from '../../store/slices/tourSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Spinner from '../Spinner/Spinner';

const TourItems = () => {
  const dispatch = useAppDispatch();

  const { tourItems, isLoading } = useAppSelector(({ tour }) => tour);

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);

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
              >
                <TourItem {...item} key={item.sys.id} />
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
