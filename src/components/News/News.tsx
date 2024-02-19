import { Link } from 'react-router-dom';
import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import { newItems } from '../../utils/constants';
import Slider from '../Slider/Slider';

const News = () => {
  return (
    <Section className="news">
      <SectionTitle>Новости</SectionTitle>
      <Slider slides={newItems} />
      <Link to="news" className="section-more-link">
        Все новости
      </Link>
    </Section>
  );
};

export default News;
