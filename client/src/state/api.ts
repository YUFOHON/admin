import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetListingsResponse,
  GetUsersResponse,
} from "./types";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions", "Listing", "User"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getListings: build.query<Array<GetListingsResponse>, void>({
      query: () => "listing/listings/",
      providesTags: ["Listing"],
    }),
    getUsers: build.query<Array<GetUsersResponse>, void>({
      query: () => "user/users/",
      providesTags: ["User"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetListingsQuery,useGetUsersQuery } =
  api;
