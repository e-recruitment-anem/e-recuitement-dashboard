import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "../../helpers/types";

export const initialState: AuthState = {
  currentUser: {},
  user: {},
  isAuthenticated: undefined,
  error: false,
  msg: "",
  loading: false,
  token: "",
  newPassword: "",
  confirmNewPassword: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    verify: (state) => {
      state.loading = false;
    },
    // eslint-disable-next-line
    verifySuccess: (state, { payload }: PayloadAction<any>) => {
      state.isAuthenticated = payload.isValid;
      state.user = payload.user;
      state.loading = false;
    },
    // eslint-disable-next-line
    login: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.currentUser = payload;
    },

    // eslint-disable-next-line
    loginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.user = payload;
      state.currentUser = {};
      state.isAuthenticated = true;
      state.loading = false;
      state.error = false;
    },

    loginError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.isAuthenticated = false;
      state.loading = false;
    },

    logout: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = {};
      state.error = false;
      state.msg = "";
      state.loading = false;
    },
  },
});

export const {
  verify,
  verifySuccess,
  login,
  loginSuccess,
  loginError,
  logout,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
