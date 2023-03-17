import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tablesApi = createApi({
  reducerPath: "tablesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getTables: build.query({
      query: () => `tables`,
    }),
  }),
});

export const { useGetTablesQuery } = tablesApi;
