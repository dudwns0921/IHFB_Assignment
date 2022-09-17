import {createSlice} from '@reduxjs/toolkit';

export const formulaSlice = createSlice({
  name: 'formula',
  initialState: {
    value: '',
  },
  reducers: {
    equal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {equal} = formulaSlice.actions;
export default formulaSlice.reducer;
