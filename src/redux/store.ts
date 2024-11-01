import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import MessageApi from "./MessageApi";
export const store = configureStore({
  reducer: {
    [MessageApi.reducerPath]: MessageApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MessageApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
