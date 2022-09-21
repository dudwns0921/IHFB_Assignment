import {createSlice} from '@reduxjs/toolkit';

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    value: 0,
  },
  reducers: {
    equal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {equal} = resultSlice.actions;
export default resultSlice.reducer;
