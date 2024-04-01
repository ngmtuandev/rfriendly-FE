import axiosClientApi from "@/lib/axios-client";

export const getListRoomApi = async (params: {
  currentPage: number;
  size: number;
}) => {
  const rs = await axiosClientApi.get(`/public/room/get-list-room`, {
    params: {
      page: params?.currentPage,
      size: params?.size,
    },
  });
  return rs?.data;
};
