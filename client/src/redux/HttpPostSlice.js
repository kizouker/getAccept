import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseSlice from './BaseSlice';

class HttpPostSlice extends BaseSlice {
  create = createAsyncThunk(`${this.name}/create`, async (payload, { rejectWithValue }) => {
    try {
      this.dispatch(this.slice.actions.requestPending());
      const requestData = this.getRequestData(payload);
      const response = await fetch(URL_POST_CALC_TOTALSCORE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw error;
      }

      const data = await response.json();
      this.dispatch(this.slice.actions.requestFulfilled(data));
    } catch (error) {
      this.dispatch(this.slice.actions.requestRejected(error.message || 'Error creating data'));
      return rejectWithValue(error.message || 'Error creating data');
    }
  });
}

export default HttpPostSlice;
