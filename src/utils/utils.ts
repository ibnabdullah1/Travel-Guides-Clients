import axios from "axios";

export const imageUpload = async (image: any) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=bdfabfd223af6a09d481d012fe89e6a8`,
    formData
  );
  return data;
};
