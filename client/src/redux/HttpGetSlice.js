import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseSlice from './BaseSlice';
import { URL_GET_MAXSCORE } from '../../common/constants';

class HttpGetSlice extends BaseSlice {
  fetch = createAsyncThunk(`${this.name}/fetch`, async (payload, { rejectWithValue }) => {
    try {
      this.dispatch(this.slice.actions.requestPending());
      const requestData = this.getRequestData(payload);
      const response = await fetch(URL_GET_MAXSCORE, this.getRequestConfig(requestData));

      if (!response.ok) {
        const error = await response.json();
        throw error;
      }

      const data = await response.json();
      this.dispatch(this.slice.actions.requestFulfilled(data));
    } catch (error) {
      this.dispatch(this.slice.actions.requestRejected(error.message || 'Error fetching data'));
      return rejectWithValue(error.message || 'Error fetching data');
    }
  });
}

export default HttpGetSlice;
