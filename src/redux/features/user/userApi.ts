import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
      providesTags: ["singleUser"],
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: `/users`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
      query: (data) => {
        return {
          url: `/users`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    addFollow: builder.mutation({
      query: (data) => {
        return {
          url: `/users/add-follow`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["users", "posts", "singlePost"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/profile`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
    verifiedProfile: builder.mutation({
      query: (data) => {
        return {
          url: `profile/verified`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["users", "singleUser"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
    profileVerifiedPayment: builder.mutation({
      query: (price) => {
        return {
          url: "/create-payment-intent",
          method: "POST",
          body: price,
        };
      },
      invalidatesTags: ["users", "singleUser"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserRoleMutation,
  useGetAllUsersQuery,
  useAddFollowMutation,
  useDeleteUserMutation,
  useUpdateProfileMutation,
  useVerifiedProfileMutation,
  useProfileVerifiedPaymentMutation,
} = userApi;
