"use client";
import Loading from "@/src/Components/Common/Loading";
import UpdatePostForm from "@/src/Components/UpdatePostForm/UpdatePostForm";
import { useGetSinglePostQuery } from "@/src/redux/features/post/postApi";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const UpdatePost = () => {
  const { postId } = useParams<{ postId: string }>();
  const router = useRouter();
  const { data, isLoading: isPostLoading } = useGetSinglePostQuery(postId);

  useEffect(() => {
    if (!isPostLoading && !data) {
      router.push("/404");
    }
  }, [isPostLoading, data, router]);

  if (isPostLoading) {
    return <Loading />;
  }
  const postData = data?.data;

  console.log(postData);
  return (
    <div>
      <UpdatePostForm data={postData} />
    </div>
  );
};

export default UpdatePost;
