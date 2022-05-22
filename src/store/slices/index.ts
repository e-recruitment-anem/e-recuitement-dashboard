import { combineReducers, Reducer } from 'redux';

import { RootState } from '../../helpers/types';

import exampleReducer from './example';
import authReducer from './auth'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  exampleState: exampleReducer,
  authState: authReducer,
});

export default rootReducer;
