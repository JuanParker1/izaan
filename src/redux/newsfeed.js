// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'


export const newsfeedSlice = createSlice({
  name: 'newsfeed',
  initialState: {
    contents: [],
    followRecommend: [],
    content: null
  },
  reducers: {
    setContents: (state, action) => {
      state.contents = action.payload
    },
    setFollowRecommend: (state, action) => {
      state.followRecommend = action.payload
    },
    setContent: (state, action) => {
      state.contents = action.payload
    }
  }
})

export const { setContents, setFollowRecommend, setContent } = newsfeedSlice.actions

export default newsfeedSlice.reducer
