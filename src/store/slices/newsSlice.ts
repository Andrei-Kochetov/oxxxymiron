import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryNewsItem, queryNewsItems } from '../../utils/queries';
import { request } from '../../utils/common';
import { INewsItem } from '../../utils/interfaces';

export interface newsState {
  newsItems: INewsItem[];
  newsItem: INewsItem | null;
  isLoading: boolean;
}

const initialState: newsState = {
  newsItems: [],
  newsItem: null,
  isLoading: false,
};

export const getNewsItems = createAsyncThunk<INewsItem[], void>(
  'news/getNewsItems',
  async (_, thunkAPI) => {
    try {
      const { newsItemCollection } = await request(queryNewsItems);
      return newsItemCollection.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNewsItem = createAsyncThunk<INewsItem, string>(
  'news/getNewsItem',
  async (id, thunkAPI) => {
    try {
      const { newsItem } = await request(queryNewsItem(id));

      return newsItem;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.newsItems = payload;
      })
      .addCase(getNewsItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getNewsItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItem.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.newsItem = payload;
      })
      .addCase(getNewsItem.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default newsSlice.reducer;
