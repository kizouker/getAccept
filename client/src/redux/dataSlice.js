import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHttpPost = createAsyncThunk('data/fetch', async (requestData) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  console.log('asyncthunk-data:', data);
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
      .addCase(fetchHttpPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHttpPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchHttpPost.rejected, (state, action) => {
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
