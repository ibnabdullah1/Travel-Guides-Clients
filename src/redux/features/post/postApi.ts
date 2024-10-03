import { baseApi } from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreatePost: builder.mutation({
      query: (productData) => ({
        url: "/posts",
        method: "POST",
        body: productData,
      }),
    }),
    getAllPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    getSinglePost: builder.query({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: "GET",
        };
      },
      providesTags: ["singlePost"],
    }),
    deleteSinglePost: builder.mutation({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["posts"],
    }),
    updatePost: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/posts/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["posts"],
    }),
    addCommentToPost: builder.mutation({
      query: (data) => {
        return {
          url: `/posts/post-comment/${data.id}`,
          method: "PUT",
          body: data.comment,
        };
      },
      invalidatesTags: ["posts", "singlePost"],
    }),
    deleteCommentToPost: builder.mutation({
      query: ({ postId, commentId }) => {
        return {
          url: `/posts/delete-comment/${postId}`,
          method: "PUT",
          body: { commentId },
        };
      },
      invalidatesTags: ["posts", "singlePost"],
    }),
    updateCommentToPost: builder.mutation({
      query: ({ updateComment, postId }) => {
        return {
          url: `/posts/update-comment/${postId}`,
          method: "PUT",
          body: updateComment,
        };
      },
      invalidatesTags: ["posts", "singlePost"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useGetSinglePostQuery,
  useUpdatePostMutation,
  useDeleteSinglePostMutation,
  useAddCommentToPostMutation,
  useDeleteCommentToPostMutation,
  useUpdateCommentToPostMutation,
} = postApi;
