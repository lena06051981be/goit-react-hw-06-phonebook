import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  // persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filtersReducer } from './filterSlice';


const rootReducer = combineReducers({
  // contacts:        ,
  filter: filtersReducer,
});

const persistedReducer = persistReducer(rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})