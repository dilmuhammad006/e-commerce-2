import { configureStore } from '@reduxjs/toolkit';
import isAuthentificatedReducer from './reducers/auth';
import basketReducer from './reducers/basket';

const store = configureStore({
  reducer: {
    authenticate: isAuthentificatedReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
