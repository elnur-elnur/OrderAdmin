import { configureStore } from "@reduxjs/toolkit";
import { foodsApi } from "./foodsApi";
import { tablesApi } from "./tablesApi";
import { personsApi } from "./personsApi";
import tableSlice from "./selectedTableSlice";

export const store = configureStore({
  reducer: {
    table: tableSlice,
    [foodsApi.reducerPath]: foodsApi.reducer,
    [tablesApi.reducerPath]: tablesApi.reducer,
    [personsApi.reducerPath]: personsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      foodsApi.middleware,
      tablesApi.middleware,
      personsApi.middleware
    ),
});
