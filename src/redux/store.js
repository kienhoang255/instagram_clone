import { configureStore } from '@reduxjs/toolkit';
import imgFileReducer from './imgFile';

export const store = configureStore({
  reducer: {
    imgFile: imgFileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
