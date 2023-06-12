import { configureStore } from "@reduxjs/toolkit";
import nyTimesReducer from "./NyTimes/NyTimes.reducer";

export const store = configureStore({
  reducer: {
    nyTimes: nyTimesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
