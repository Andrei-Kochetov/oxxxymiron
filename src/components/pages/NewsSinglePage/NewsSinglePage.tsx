import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useEffect } from 'react';
import { getNewsItem } from '../../../store/slices/newsSlice';
import PageTitle from '../../Title/PageTitle';
import { getLocalDateString } from '../../../utils/common';
import Spinner from '../../Spinner/Spinner';

const NewsSinglePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { newsItem, isLoading } = useAppSelector(({ news }) => news);
  useEffect(() => {
    if (id) dispatch(getNewsItem(id));
  }, [dispatch]);

  return (
    <div className="container news-single-page">
      {isLoading ? (
        <Spinner />
      ) : !newsItem ? (
        <p>Нет данных</p>
      ) : (
        <>
          <PageTitle>{newsItem.title}</PageTitle>
          <h3 className="news-single-page__date">
            {getLocalDateString(newsItem.date)}
          </h3>
          <video className="news-single-page__video" autoPlay controls playsInline>
            <source src={newsItem.video.url} type="video/mp4" />
          </video>
          <h3 className="news-single-page__video-description">
            {newsItem.videoDescription}
          </h3>
        </>
      )}
    </div>
  );
};

export default NewsSinglePage;
