import apiSlice from "../../app/api/apiSlice.js";

//crete user api
const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/api/v1/user",
      providesTags: ["users"],
    }),
    getSingleUser: builder.query({
      query: (id) => `/api/v1/user/${id}`,
      providesTags: (result, error, arg) => {
        return [{ type: "user", id: result._id }];
      },
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/v1/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

// export custom user hooks to
export const {
  useCreateUserMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
  useGetSingleUserQuery,
} = userApiSlice;

//export userApiSlice
export default userApiSlice;
