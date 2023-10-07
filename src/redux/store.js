import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/cars/slice";
import favoritesReducer from "../redux/favorites/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(persistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
