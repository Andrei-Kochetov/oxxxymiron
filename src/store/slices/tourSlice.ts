import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryTourItems } from '../../utils/queries';
import { request } from '../../utils/common';
import { ITourItem } from '../../utils/interfaces';

export interface TourState {
  tourItems: ITourItem[];
  isLoading: boolean;
}

const initialState: TourState = {
  tourItems: [],
  isLoading: false,
};

export const getTourItems = createAsyncThunk<ITourItem[], void>(
  'tour/getTourItems',
  async (_, thunkAPI) => {
    try {
      const { tourItemCollection } = await request(queryTourItems);
      return tourItemCollection.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const tourSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTourItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTourItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tourItems = payload;
      })
      .addCase(getTourItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default tourSlice.reducer;
