import {createSlice} from '@reduxjs/toolkit'

export const recordSlice = createSlice ({
  name:'record',
    initialState: {
    item: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.record.push(action.payload)
    },
    setComplete: (state, action) => {
      const record = state.find (record => record.id === action.payload)

      if (record) {
        record.complete = !record.complete
      }
    },
  },
})

export default recordSlice.reducer;

export const{
  addItem,
  setComplete,
} = recordSlice.actions;

export const getRecord = (state) => state.record.items

