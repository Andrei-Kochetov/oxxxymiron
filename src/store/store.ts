import { configureStore } from '@reduxjs/toolkit';
import tourSlice from './slices/tourSlice';
import trackSlice from './slices/tracksSlice';
import newsSlice from './slices/newsSlice';

export const store = configureStore({
  reducer: {
    tour: tourSlice,
    track: trackSlice,
    news: newsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
