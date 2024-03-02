import axiosClientApi from "@/lib/axios-client";

export const getListRoomApi = async () => {
  const rs = await axiosClientApi.get(`/public/room/get-list-room`);
  return rs?.data;
};
