import {createSlice} from '@reduxjs/toolkit';

export const formulaSlice = createSlice({
  name: 'formula',
  initialState: {
    value: '',
  },
  reducers: {
    display: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {display} = formulaSlice.actions;
export default formulaSlice.reducer;
