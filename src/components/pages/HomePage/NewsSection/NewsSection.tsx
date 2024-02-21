import { Link } from 'react-router-dom';
import Section from '../../../Section/Section';
import SectionTitle from '../../../Title/SectionTitle';
import Slider from '../../../Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { useEffect } from 'react';
import { getNewsItems } from '../../../../store/slices/newsSlice';
import Spinner from '../../../Spinner/Spinner';
import { repeatArray } from '../../../../utils/common';

const NewsSection = () => {
  const dispatch = useAppDispatch();

  const { newsItems, isLoading } = useAppSelector(({ news }) => news);

  useEffect(() => {
    dispatch(getNewsItems());
  }, [dispatch]);

  return (
    <Section className="news">
      <SectionTitle>Новости</SectionTitle>
      {isLoading ? <Spinner /> : <Slider slides={repeatArray(newsItems, 3)} />}
      <Link to="news" className="section-more-link">
        Все новости
      </Link>
    </Section>
  );
};

export default NewsSection;
