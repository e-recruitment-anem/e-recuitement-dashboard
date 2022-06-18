import { RootState } from '../../helpers/types';

export const getAuth = (state: RootState) => state.authState;
export const getAgence = (state: RootState) => state.agenceState;
export const getManageAccounts = (state: RootState) =>
  state.manageAccountsState;
export const getManageSeeker = (state: RootState) => state.manageSeekerState;
export const getManageJobRequest = (state: RootState) => state.manageJobRequestsState;
