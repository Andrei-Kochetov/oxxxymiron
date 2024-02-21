import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getTrackItems } from '../store/slices/tracksSlice';

const useTracksItems = () => {
  const dispatch = useAppDispatch();

  const { trackItems, isLoading } = useAppSelector(({ track }) => track);
  useEffect(() => {
    dispatch(getTrackItems());
  }, [dispatch]);

  return { trackItems, isLoading };
};

export default useTracksItems;
