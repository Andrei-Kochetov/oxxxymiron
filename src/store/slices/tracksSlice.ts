import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryTrackItems } from '../../utils/queries';
import { request } from '../../utils/common';
import { ITrackItem } from '../../utils/interfaces';

export interface TrackState {
  trackItems: ITrackItem[];
  isLoading: boolean;
}

const initialState: TrackState = {
  trackItems: [],
  isLoading: false,
};

export const getTrackItems = createAsyncThunk<ITrackItem[], void>(
  'track/getTrackItems',
  async (_, thunkAPI) => {
    try {
      const { trackItemCollection } = await request(queryTrackItems);
      return trackItemCollection.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrackItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrackItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.trackItems = payload;
      })
      .addCase(getTrackItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default trackSlice.reducer;
