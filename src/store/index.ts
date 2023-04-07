import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { createWrapper } from "next-redux-wrapper";

import { shopApi } from "./shopApiSlice";
// import { cartApi } from "./cartApiSlice";
import cartReducer from "./cartSlice";

const combinedReducer = combineReducers({
  [shopApi.reducerPath]: shopApi.reducer,
  cart: cartReducer,
  // [cartApi.reducerPath]: cartApi.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });

setupListeners(store.dispatch);
