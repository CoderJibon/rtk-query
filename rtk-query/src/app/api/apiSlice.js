import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  tagTypes: ["users", "user"],
  endpoints: (builder) => ({}),
});

//export apiSlice
export default apiSlice;
