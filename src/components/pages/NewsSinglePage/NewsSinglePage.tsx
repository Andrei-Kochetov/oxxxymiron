import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useEffect } from 'react';
import { getNewsItem } from '../../../store/slices/newsSlice';
import PageTitle from '../../Title/PageTitle';
import { getLocalDateString } from '../../../utils/common';

const NewsSinglePage = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { newsItem, isLoading } = useAppSelector(({ news }) => news);
  useEffect(() => {
    if (id) dispatch(getNewsItem(id));
  }, [dispatch]);
  console.log(newsItem);
  return (
    <div className="container news-single-page">
      {newsItem === null ? (
        <p>Нет данных</p>
      ) : (
        <>
          <PageTitle>{newsItem.title}</PageTitle>
          <h3 className='news-single-page__date'>{getLocalDateString(newsItem.date)}</h3>
          <video className="news-single-page__video" autoPlay controls>
            <source src={newsItem.video.url} type="video/mp4" />
          </video>
          <h3 className='news-single-page__video-description'>{newsItem.videoDescription}</h3>
        </>
      )}
    </div>
  );
};

export default NewsSinglePage;
