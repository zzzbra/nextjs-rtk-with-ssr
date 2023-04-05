// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// TODO: define type here
import type { ShopApiData } from "../types";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/shop",
  }),
  endpoints: (builder) => ({
    getShopData: builder.query<ShopApiData, void>({
      query: () => ({ url: "/" }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetShopDataQuery } = shopApi;
