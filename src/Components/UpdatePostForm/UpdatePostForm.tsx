"use client";
import { categories } from "@/src/data/dummyData";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useUpdatePostMutation } from "@/src/redux/features/post/postApi";
import { imageUpload } from "@/src/utils/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { LuImagePlus } from "react-icons/lu";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import "./UpdatePostForm.css";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const UpdatePostForm = ({ data: postData }: any) => {
  const { postId } = useParams();
  const user = useSelector(selectCurrentUser);
  const [updatePost] = useUpdatePostMutation();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string>(postData?.content);
  const [imageFile, setImageFile] = useState<File>();
  const [category, setCategory] = useState<string>(postData?.category);
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [imagePremium, setImagePremium] = useState<string | null>(
    postData?.image
  );
  const router = useRouter();
  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePremium(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = postData?.image;
      if (imageFile) {
        const { data } = await imageUpload(imageFile);
        imageUrl = data?.display_url;
      }

      const updatePostData = {
        id: postId,
        data: {
          title: e.target.title.value || postData.title,
          image: imageUrl,
          subTitle: e.target.subTitle.value || postData.subTitle,
          content: value || postData.content,
          category: category || postData.category,
          status: isPremium ? "PREMIUM" : postData.status || "FREE",
        },
      };

      const res: any = await updatePost(updatePostData).unwrap();
      if (res.success) {
        toast.success(res.message);
        setLoading(false);
        setImagePremium(null);
        e.target.reset();
        setValue("");
        router.push(`/post/${postId}`);
        setCategory("");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data?.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="font-roboto">
        <div className="sticky top-14 bg-white z-30 border-b max-w-7xl mx-auto px-10 flex justify-between items-center pb-4 pt-10">
          <div className="flex items-center gap-2">
            <div className="border rounded-xl w-fit p-2 hover:bg-gray-50">
              <BsArrowLeft />
            </div>
            <p className="font-medium text-secondary/80">Draft article</p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <IoMdCheckmark className="text-green-400" />
              <p className="text-secondary/80">Saved</p>
            </div>
            <button
              type="submit"
              className="bg-[#24d53b] hover:bg-green-500 duration-150 text-white py-[6px] px-4 rounded-xl"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
        <div className="modal-content max-w-4xl mx-auto p-5 bg-white pt-10">
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={postData?.title}
            className="w-full placeholder:text-gray-400 border-none outline-none focus:ring-0 font-semibold tracking-wide placeholder:text-2xl text-2xl block font-roboto mb-2"
            placeholder="Article title"
          />

          <input
            type="text"
            name="subTitle"
            defaultValue={postData?.subTitle}
            id="subTitle"
            className="w-full placeholder:text-gray-400 border-none outline-none focus:ring-0 font-roboto tracking-wide placeholder:text-base text-base block mb-2"
            placeholder="Add a subtitle"
          />

          <div className="w-full mb-4 flex items-center gap-3">
            <label className="text-gray-500">Category:</label>
            <select
              value={category}
              defaultValue={postData.category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-fit px-3  py-2   focus:outline-none bg-white text-gray-500"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="w-fit mb-2">
            <label
              htmlFor="image"
              className="flex items-center text-gray-400 text-xs gap-1 font-roboto"
            >
              <LuImagePlus className="text-base" />
              Add featured image (1200x630px)
            </label>
            <input
              className="hidden"
              id="image"
              type="file"
              onChange={(e) => handleImageChange(e)}
            />
          </div>
          {user?.isPremium && (
            <div className="mb-4">
              <label className="flex items-center text-gray-500">
                <input
                  type="checkbox"
                  checked={isPremium}
                  onChange={() => setIsPremium(!isPremium)}
                  className="mr-2"
                />
                Premium Post
              </label>
            </div>
          )}
          {imagePremium && (
            <div className="mb-4">
              <Image
                width={1200}
                height={200}
                alt="post-image"
                className="w-full h-[300px] object-cover rounded-md"
                src={imagePremium}
              />
            </div>
          )}

          <ReactQuill
            modules={modules}
            theme="snow"
            onChange={setValue}
            value={value}
            placeholder="Start writing your article. You can @mention people and companies"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePostForm;
