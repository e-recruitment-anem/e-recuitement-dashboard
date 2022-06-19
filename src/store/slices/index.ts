import { combineReducers, Reducer } from 'redux';

import { RootState } from '../../helpers/types';

import authReducer from './auth';
import agenceReducer from './agence';
import manageAccountsReducer from './manageAccounts';
import manageSeekerReducer from './seeker'
import manageJobRequestsReducer from './manageJobRequests';
import employerReducer from './employer';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
  agenceState: agenceReducer,
  manageAccountsState: manageAccountsReducer,
  manageSeekerState: manageSeekerReducer,
  manageJobRequestsState: manageJobRequestsReducer,
  manageEmployerState: employerReducer
});

export default rootReducer;
