import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './slices';

const GlobalStore = configureStore({
  reducer: rootReducer,
});

export default GlobalStore;
