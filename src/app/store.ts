import { configureStore } from "@reduxjs/toolkit";
import { foodcartSlice } from "../features/slice";
import { munchiesApi } from "../services/products";

export const store = configureStore({
  reducer: {
    [munchiesApi.reducerPath]: munchiesApi.reducer,
    cart: foodcartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(munchiesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
