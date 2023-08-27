# rtk-query

## create api

```
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/api/v1/user",
    }),
    getSingleUser: builder.query({
      query: (id) => `/api/v1/user/${id}`,
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

//export custom hooks
export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
} = apiSlice;

//export apiSlice
export default apiSlice;

```

## Configuration store

```
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice/apiSlice.js";

//configure store
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

//configure store exports
export default store;

```

## management RTK query

```
import React, { useState } from "react";
import { useCreateUserMutation } from "../../app/apiSlice/apiSlice.js";

const User = () => {
  const [createUser, { isLoading, isError, isSuccess }] =
    useCreateUserMutation();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(input);
  };

  return (
    <>
      <form onSubmit={handleCreateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          name="name"
          value={input.name}
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          name="email"
          value={input.email}
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="password"
          name="password"
          value={input.password}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default User;

```
