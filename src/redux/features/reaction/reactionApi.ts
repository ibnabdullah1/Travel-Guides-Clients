import { baseApi } from "../../api/baseApi";

const reactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReactionToPost: builder.mutation({
      query: ({ postId, data }) => {
        return {
          url: `/posts/post-reaction/${postId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["posts", "singlePost"],
    }),
  }),
});

export const { useAddReactionToPostMutation } = reactionApi;
