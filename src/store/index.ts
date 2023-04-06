import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { shopApi } from "../services/shop";

// TODO: SSR Hydration
// import { createWrapper } from "next-redux-wrapper";

import cartReducer from "../features/cart/cartSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [shopApi.reducerPath]: shopApi.reducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
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

// TODO: SSR Hydration
// export const wrapper = createWrapper(makeStore, { debug: true });

setupListeners(store.dispatch);
