import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getTourItems } from '../store/slices/tourSlice';

const useTourItems = () => {
  const dispatch = useAppDispatch();

  const { tourItems, isLoading } = useAppSelector(({ tour }) => tour);

  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);
  return { tourItems, isLoading };
};

export default useTourItems;
