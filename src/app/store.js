import {configureStore} from '@reduxjs/toolkit';
import formulaReducer from '../features/calculate/formulaSlice';
import resultReducer from '../features/calculate/resultSlice';

export default configureStore({
  reducer: {
    formula: formulaReducer,
    result: resultReducer,
  },
});
