// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'


export const dataSyncSlice = createSlice({
  name: 'datasync',
  initialState: {
    apiKeys: []
  },
  reducers: {
    setApiKeys: (state, action) => {
      state.apiKeys = action.payload
    }
  }
})

export const { setApiKeys } = dataSyncSlice.actions

export default dataSyncSlice.reducer
