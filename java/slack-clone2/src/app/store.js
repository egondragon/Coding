import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/appSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
