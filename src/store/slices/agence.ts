import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AgenceState } from "../../helpers/types";

export const initialState: AgenceState = {
  error: false,
  success: false,
  msg: "",
  loading: false,
  agences: [],
  agence: {},
};

const agenceSlice = createSlice({
  name: "agence",
  initialState,
  reducers: {
    // eslint-disable-next-line
    fetchAgences: (state) => {
      state.loading = true;
    },

    // eslint-disable-next-line
    fetchAgencesSuccess: (state, { payload }: PayloadAction<any>) => {
      state.agences = payload.items;
      state.loading = false;
      state.error = false;
    },

    fetchAgencesError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.agences = [];
      state.loading = false;
    },

    createAgence: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.agence = {
        name: payload.name,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
      };
    },

    // eslint-disable-next-line
    createAgenceSuccess: (state, { payload }: PayloadAction<string>) => {
      state.agence = {};
      state.success = true; 
      state.msg = payload;
      state.loading = false;
      state.error = false;
    },

    createAgenceError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.agence = {};
      state.loading = false;
    },

    deleteAgence: (state, { payload }: PayloadAction<string>) => {
      state.loading = true;
      state.agence = { id: payload };
    },

    // eslint-disable-next-line
    deleteAgenceSuccess: (state, { payload }: PayloadAction<any>) => {
      state.agence = {};
      state.loading = false;
      state.error = false;
    },

    deleteAgenceError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.agence = {};
      state.loading = false;
    },
  },
});

export const {
  fetchAgences,
  fetchAgencesSuccess,
  fetchAgencesError,
  createAgence,
  createAgenceSuccess,
  createAgenceError,
  deleteAgence,
  deleteAgenceSuccess,
  deleteAgenceError,
} = agenceSlice.actions;

export default agenceSlice.reducer;
