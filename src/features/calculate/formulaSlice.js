import {createSlice} from '@reduxjs/toolkit';

export const formulaSlice = createSlice({
  name: 'formula',
  initialState: {
    value: '',
  },
  reducers: {
    insert: (state, action) => {
      console.log(state, action.payload);
      state.value += action.payload;
    },
  },
});

export const {insert} = formulaSlice.actions;
export default formulaSlice.reducer;
