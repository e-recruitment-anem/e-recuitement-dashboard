import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ManageAccountsState } from '../../helpers/types';

export const initialState: ManageAccountsState = {
  error: false,
  msg: '',
  loading: false,
  admins: [],
  admin: {},
  currentAdmin: {},
};

const manageAccountsSlice = createSlice({
  name: 'manageAccounts',
  initialState,
  reducers: {
    fetchAdmins: (state) => {
      state.loading = true;
    },

    fetchAdminsSuccess: (state, { payload }: PayloadAction<any>) => {
      state.admins = payload.items;
      state.loading = false;
      state.error = false;
    },

    fetchAdminsError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.loading = false;
    },

    deleteAdmin: (state, { payload }: PayloadAction<string>) => {
      state.loading = true;
      state.admin = { id: payload };
    },

    deleteAdminSuccess: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.admin = {};
      state.loading = false;
      state.error = false;
    },

    deleteAdminError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.admin = {};
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchAdmins,
  fetchAdminsSuccess,
  fetchAdminsError,
  deleteAdmin,
  deleteAdminError,
  deleteAdminSuccess,
} = manageAccountsSlice.actions;

export default manageAccountsSlice.reducer;
