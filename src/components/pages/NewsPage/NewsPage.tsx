import ScrollAnimation from 'react-animate-on-scroll';
import useNewsItems from '../../../hooks/useNewsItems';
import Spinner from '../../Spinner/Spinner';
import PageTitle from '../../Title/PageTitle';
import { getLocalDateString, repeatArray } from '../../../utils/common';
import Icon from '../../Icon/Icon';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const { newsItems, isLoading } = useNewsItems();

  return (
    <div className="container news-page">
      <PageTitle>Все новости</PageTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        newsItems.map(({ image, title, date, sys }, i) => (
          <ScrollAnimation
            animateIn='fadeInLeft'
            delay={i * 100}
            className="news-page-item"
            animateOnce
            key={i}
            offset={50}
          >
            <div className="news-page-item__img">
              <img src={image.url} alt="news image" />
            </div>
            <div className="news-page-item__info-section">
              <p className="news-page-item__date">{getLocalDateString(date)}</p>
              <h3 className="news-page-item__name">{title}</h3>
            </div>
            <Link to={`${sys.id}`} className="news-page-item__button button">
              смотреть
              <Icon name="arrow-right" />
            </Link>
          </ScrollAnimation>
        ))
      )}
    </div>
  );
};

export default NewsPage;
