import { createSlice } from '@reduxjs/toolkit'

import { ExampleState } from '../../helpers/types'

export const initialState: ExampleState = {
 example: false,
}

const exampleSlice = createSlice({
 name: 'example',
 initialState,
 reducers: {
  exampleAction: (state) => {
   state.example = true
  },
 },
})

export const { exampleAction } = exampleSlice.actions

export default exampleSlice.reducer
