import { Link } from 'react-router-dom';
import Section from '../../../Section/Section';
import SectionTitle from '../../../Title/SectionTitle';
import Slider from '../../../Slider/Slider';
import Spinner from '../../../Spinner/Spinner';
import { repeatArray } from '../../../../utils/common';
import useNewsItems from '../../../../hooks/useNewsItems';

const NewsSection = () => {
  const { newsItems, isLoading } = useNewsItems();

  return (
    <Section className="news">
      <SectionTitle>Новости</SectionTitle>
      {isLoading ? <Spinner /> : <Slider slides={newsItems} />}
      <Link to="news" className="section-more-link">
        Все новости
      </Link>
    </Section>
  );
};

export default NewsSection;
