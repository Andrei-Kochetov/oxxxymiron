import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getNewsItems } from '../store/slices/newsSlice';

const useNewsItems = () => {
  const dispatch = useAppDispatch();

  const { newsItems, isLoading } = useAppSelector(({ news }) => news);

  useEffect(() => {
    dispatch(getNewsItems());
  }, [dispatch]);
  return { newsItems, isLoading };
};

export default useNewsItems;
