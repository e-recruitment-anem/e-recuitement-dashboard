import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ManageSeekerState } from "../../helpers/types";

export const initialState: ManageSeekerState = {
  error: false,
  msg: "",
  loading: false,
  updated: false,
  seekers: [],
  seeker: {},
  tempSeeker: {},
};

const manageSeekerSlice = createSlice({
  name: "seeker",
  initialState,
  reducers: {
    fetchSeekers: (state) => {
      state.loading = true;
    },

    fetchSeekersSuccess: (state, { payload }: PayloadAction<any>) => {
      state.seekers = payload.content;
      state.loading = false;
      state.error = false;
    },

    fetchSeekersError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.loading = false;
    },

    // Fetch Job seeker data

    fetchSeeker: (state) => {
      state.loading = true;
    },

    fetchSeekerSuccess: (state, { payload }: PayloadAction<any>) => {
      state.seeker = payload;
      state.tempSeeker = {};
      state.loading = false;
      state.error = false;
    },

    fetchSeekerError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.tempSeeker = {};
      state.error = true;
      state.loading = false;
    },

    // Update Seeker

    updateSeeker: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.updated = false;
      state.tempSeeker = payload;
    },

    updateSeekerSuccess: (state, { payload }: PayloadAction<any>) => {
      state.seeker = payload;
      state.updated = true;
      state.loading = false;
      state.error = false;
    },

    updateSeekerError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.updated = false;
      state.loading = false;
    },

    // Delete Seeker

    deleteSeeker: (state, { payload }: PayloadAction<string>) => {
      state.loading = true;
      state.seeker = { id: payload };
    },

    deleteSeekerSuccess: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.seeker = {};
      state.loading = false;
      state.error = false;
    },

    deleteSeekerError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.seeker = {};
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchSeekers,
  fetchSeekersSuccess,
  fetchSeekersError,
  deleteSeeker,
  deleteSeekerError,
  deleteSeekerSuccess,
  fetchSeeker,
  fetchSeekerSuccess,
  fetchSeekerError,
  updateSeeker,
  updateSeekerSuccess,
  updateSeekerError,
} = manageSeekerSlice.actions;

export default manageSeekerSlice.reducer;
