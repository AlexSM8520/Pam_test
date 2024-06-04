import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from '../slice/itemSlice.ts';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
