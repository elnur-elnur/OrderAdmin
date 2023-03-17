import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const personsApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getPersons: build.query({
      query: () => `persons`,
    }),
  }),
});

export const { useGetPersonsQuery } = personsApi;
