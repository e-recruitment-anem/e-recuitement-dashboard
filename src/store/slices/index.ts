import { combineReducers, Reducer } from 'redux'

import { RootState } from '../../helpers/types'

import exampleReducer from './example'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
 exampleState: exampleReducer,
})

export default rootReducer
