import { RootState } from '../../helpers/types';

export const getExample = (state: RootState) => state.exampleState;
export const getAuth = (state: RootState) => state.authState;
