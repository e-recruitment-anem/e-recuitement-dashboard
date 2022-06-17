import { RootState } from '../../helpers/types';

export const getAuth = (state: RootState) => state.authState;
export const getAgence = (state: RootState) => state.agenceState;
export const getManageAccounts = (state: RootState) =>
  state.manageAccountsState;
