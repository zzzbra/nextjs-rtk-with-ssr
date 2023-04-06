// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import type { ShopApiData, ProductData } from "../types";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/shop",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      console.log("HYDRATING!");
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getShopData: builder.query<ShopApiData, void>({
      query: () => ({ url: "/" }),
    }),
    getProductsData: builder.query<ProductData, void>({
      query: () => ({ url: "/products" }),
    }),
    getProductData: builder.query<ProductData, string>({
      query: (pid: string) => ({ url: `/products/${pid}` }),
    }),
    getRecommendationsData: builder.query<ProductData, void>({
      query: () => ({ url: "/recomendations" }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShopDataQuery, useGetProductDataQuery } = shopApi;
