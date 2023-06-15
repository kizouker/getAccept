import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SERVER_PORT = process.env.port || 4000;
const URL = `http://localhost:${SERVER_PORT}/calcscore/post/`;

// Async thunk action creator
export const fetchData = createAsyncThunk('data/fetch', async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

// Slice
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  }
});

// Reducer
const dataReducer = dataSlice.reducer;

// Selectors
export const selectData = (state) => (state.data ? state.data.data : null);
export const selectLoading = (state) => (state.data ? state.data.loading : null);
export const selectError = (state) => (state.data ? state.data.error : null);

export default dataReducer;
