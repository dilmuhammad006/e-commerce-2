import { configureStore } from '@reduxjs/toolkit';
import isAuthentificatedReducer from './reducers/auth';
import basketReducer from './reducers/basket';
import modalReducer from './reducers/modal';
const store = configureStore({
  reducer: {
    authenticate: isAuthentificatedReducer,
    basket: basketReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
