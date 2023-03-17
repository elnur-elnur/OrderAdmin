import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodsApi = createApi({
  reducerPath: "foodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getFoods: build.query({
      query: () => `foods`,
    }),
  }),
});

export const { useGetFoodsQuery } = foodsApi;
