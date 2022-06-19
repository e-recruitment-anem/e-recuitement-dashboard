import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ManageEmployerState } from "../../helpers/types";

export const initialState: ManageEmployerState = {
  error: false,
  success: false,
  msg: "",
  loading: false,
  employers: [],
  employer: {},
  tempEmployer: {}
};

const employer = createSlice({
  name: "employer",
  initialState,
  reducers: {
    // eslint-disable-next-line
    fetchEmployers: (state) => {
      state.loading = true;
    },

    // eslint-disable-next-line
    fetchEmployersSuccess: (state, { payload }: PayloadAction<any>) => {
      state.employers = payload.employers;
      state.loading = false;
      state.error = false;
    },

    fetchEmployersError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.employers = [];
      state.loading = false;
    },

    // createEmployer: (state, { payload }: PayloadAction<any>) => {
    //   state.loading = true;
    //   state.agence = {
    //     name: payload.name,
    //     email: payload.email,
    //     phoneNumber: payload.phoneNumber,
    //   };
    // },

    // // eslint-disable-next-line
    // createEmployerSuccess: (state, { payload }: PayloadAction<string>) => {
    //   state.agence = {};
    //   state.success = true; 
    //   state.msg = payload;
    //   state.loading = false;
    //   state.error = false;
    // },

    // createEmployerError: (state, { payload }: PayloadAction<string>) => {
    //   state.msg = payload;
    //   state.error = true;
    //   state.success = false;
    //   state.agence = {};
    //   state.loading = false;
    // },

    // deleteAgence: (state, { payload }: PayloadAction<string>) => {
    //   state.loading = true;
    //   state.agence = { id: payload };
    // },

    // // eslint-disable-next-line
    // deleteAgenceSuccess: (state, { payload }: PayloadAction<any>) => {
    //   state.agence = {};
    //   state.loading = false;
    //   state.error = false;
    // },

    // deleteAgenceError: (state, { payload }: PayloadAction<string>) => {
    //   state.msg = payload;
    //   state.error = true;
    //   state.agence = {};
    //   state.loading = false;
    // },
  },
});

export const {
  fetchEmployers,
  fetchEmployersSuccess,
  fetchEmployersError,
} = employer.actions;

export default employer.reducer;
