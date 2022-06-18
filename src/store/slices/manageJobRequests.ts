import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ManageJobRequestState } from '../../helpers/types';

export const initialState: ManageJobRequestState = {
  error: false,
  success: false,
  updated: false,
  msg: '',
  loading: false,
  requests: [],
  request: {},
  tempRequest: {},
};

const jobRequestSlice = createSlice({
  name: 'jobRequest',
  initialState,
  reducers: {
    // eslint-disable-next-line
    fetchJobRequests: (state) => {
      state.loading = true;
    },

    // eslint-disable-next-line
    fetchJobRequestsSuccess: (state, { payload }: PayloadAction<any>) => {
      state.requests = payload;
      state.loading = false;
      state.error = false;
    },

    fetchJobRequestsError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.requests = [];
      state.loading = false;
    },

    fetchJobRequest: (state) => {
      state.loading = true;
    },

    // eslint-disable-next-line
    fetchJobRequestSuccess: (state, { payload }: PayloadAction<any>) => {
      state.request = payload;
      state.loading = false;
      state.error = false;
    },

    fetchJobRequestError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.request = {};
      state.loading = false;
    },

    // Manage Educations
    createJobRequest: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.tempRequest = {
        reason: payload.reason,
      };
    },

    // eslint-disable-next-line
    createJobRequestSuccess: (state, { payload }: PayloadAction<string>) => {
      state.tempRequest = {};
      state.success = true;
      state.msg = payload;
      state.loading = false;
      state.error = false;
    },

    createJobRequestError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.tempRequest = {};
      state.loading = false;
    },
  },
});

export const {
  fetchJobRequests,
  fetchJobRequestsSuccess,
  fetchJobRequestsError,
  fetchJobRequest,
  fetchJobRequestSuccess,
  fetchJobRequestError,
  createJobRequest,
  createJobRequestSuccess,
  createJobRequestError
} = jobRequestSlice.actions;

export default jobRequestSlice.reducer;
