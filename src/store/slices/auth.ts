import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from '../../helpers/types';

export const initialState: AuthState = {
  currentUser: {},
  user: {},
  isAuthenticated: undefined,
  error: false,
  success: false,
  synched: false,
  msg: '',
  loading: false,
  token: '',
  newPassword: '',
  confirmNewPassword: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    verify: (state) => {
      state.loading = false;
      state.synched = false;
    },
    // eslint-disable-next-line
    verifySuccess: (state, { payload }: PayloadAction<any>) => {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
      state.synched = true
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
      state.synched = true;
      state.loading = false;
      state.error = false;
    },

    loginError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.isAuthenticated = false;
      state.synched = true
      state.loading = false;
    },

    // eslint-disable-next-line
    signup: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.success = false;
      state.currentUser = payload;
    },

    // eslint-disable-next-line
    signupSuccess: (state, { payload }: PayloadAction<any>) => {
      state.currentUser = {};
      state.loading = false;
      state.msg = payload;
      state.success = true;
      state.error = false;
    },

    signupError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.loading = false;
    },

    logout: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = {};
      state.error = false;
      state.msg = '';
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
  signup,
  signupSuccess,
  signupError,
} = authSlice.actions;

export default authSlice.reducer;
