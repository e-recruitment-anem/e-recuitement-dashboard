import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ManageSeekerState } from '../../helpers/types';

export const initialState: ManageSeekerState = {
  error: false,
  msg: '',
  loading: false,
  updated: false,
  success: false,
  seekers: [],
  seeker: {},
  diplomes: [],
  educations: [],
  experience: [],
  tempSeeker: {},
};

const manageSeekerSlice = createSlice({
  name: 'seeker',
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
      state.seeker = payload.seeker;
      state.diplomes = payload.diplomes;
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

    fetchDiplomesSuccess: (state, { payload }: PayloadAction<any>) => {
      state.diplomes = payload.diplomes;
      state.tempSeeker = {};
      state.loading = false;
      state.error = false;
    },

    fetchDiplomesError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.tempSeeker = {};
      state.error = true;
      state.loading = false;
    },

    fetchEducationSuccess: (state, { payload }: PayloadAction<any>) => {
      state.educations = payload.educations;
      state.tempSeeker = {};
      state.loading = false;
      state.error = false;
    },

    fetchEducationError: (state, { payload }: PayloadAction<string>) => {
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

    // Manage Diplomes
    createDiplome: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.tempSeeker = {
        title: payload.title,
        storagePath: payload.storagePath,
      };
    },

    // eslint-disable-next-line
    createDiplomeSuccess: (state, { payload }: PayloadAction<string>) => {
      state.tempSeeker = {};
      state.success = true;
      state.msg = payload;
      state.loading = false;
      state.error = false;
    },

    createDiplomeError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.tempSeeker = {};
      state.loading = false;
    },

    // Manage Educations
    attachEducation: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.success = false;
      state.tempSeeker = {
        school: payload.school,
        title: payload.title,
        startDate: payload.startDate,
        endDate: payload.endDate,
      };
    },

    // eslint-disable-next-line
    attachEducationSuccess: (state, { payload }: PayloadAction<string>) => {
      state.tempSeeker = {};
      state.success = true;
      state.msg = payload;
      state.loading = false;
      state.error = false;
    },

    attachEducationError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.tempSeeker = {};
      state.loading = false;
    },

    initMessages: (state) => {
      state.error = false;
      state.success = false;
      state.msg = '';
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
  createDiplome,
  createDiplomeSuccess,
  createDiplomeError,
  fetchDiplomesSuccess,
  fetchDiplomesError,
  fetchEducationSuccess,
  fetchEducationError,
  attachEducation,
  attachEducationSuccess,
  attachEducationError,
  initMessages
} = manageSeekerSlice.actions;

export default manageSeekerSlice.reducer;
