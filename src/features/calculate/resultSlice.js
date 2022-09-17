import {createSlice} from '@reduxjs/toolkit';

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    value: 0,
  },
  reducers: {
    calculate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {calculate} = resultSlice.actions;
export default resultSlice.reducer;
