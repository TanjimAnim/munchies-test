import { configureStore } from "@reduxjs/toolkit";
import { foodcartSlice } from "../features/slice";

import { munchiesApi } from "../services/products";

//import redux persist
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import useFoodCartReducer from "../features/slice";

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, useFoodCartReducer);

export const store = configureStore({
  reducer: {
    [munchiesApi.reducerPath]: munchiesApi.reducer,
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(munchiesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
