import axiosClientApi from "@/lib/axios-client";

export const getTypeImageApi = async () => {
  const rs = await axiosClientApi.get(`/public/type-image/type-images`);
  return rs?.data;
};
