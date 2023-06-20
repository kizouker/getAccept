import { createSlice } from '@reduxjs/toolkit';

class BaseSlice {
  constructor(name) {
    this.name = name;
    this.initialState = {
      data: null,
      loading: false,
      error: null
    };

    this.slice = createSlice({
      name,
      initialState: this.initialState,
      reducers: {
        requestPending(state) {
          state.loading = true;
          state.error = null;
        },
        requestFulfilled(state, action) {
          state.loading = false;
          state.data = action.payload;
        },
        requestRejected(state, action) {
          state.loading = false;
          state.error = action.payload;
        }
      }
    });
  }

  // Reducer
  dataReducer = this.slice.reducer;
  getSelectors = (state) => state[this.name];

  getRequestData = (payload) => payload;

  getRequestConfig = (requestData) => ({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Selectors
export const selectData = (state) => (state.data ? state.data.data : null);
export const selectLoading = (state) => (state.data ? state.data.loading : null);
export const selectError = (state) => (state.data ? state.data.error : null);
export default BaseSlice;
