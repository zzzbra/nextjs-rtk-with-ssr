import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { HYDRATE } from "next-redux-wrapper";
import type { ShopApiData, ProductData, ItemsInCart } from "../types";

type ProductId = ProductData["id"];

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["cart"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/cart",
  }),
  endpoints: (builder) => ({
    getCartData: builder.query<ItemsInCart, void>({
      query: () => ({ url: "/" }),
    }),
    addItem: builder.mutation<ItemsInCart, { pid: ProductId }>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
    removeItem: builder.mutation<ItemsInCart, { pid: ProductId }>({
      query: (body) => ({
        url: `/${body.pid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
    removeAllItems: builder.mutation<ItemsInCart, { pid: ProductId }>({
      query: (body) => ({
        url: `/${body.pid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCartDataQuery,
  useAddItemMutation,
  useRemoveItemMutation,
  useRemoveAllItemsMutation,
} = cartApi;
