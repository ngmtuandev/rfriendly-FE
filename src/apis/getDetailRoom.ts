import axiosClientApi from "@/lib/axios-client";

export const getDetailRoomApi = async (roomId : string) => {
  const rs = await axiosClientApi.get(`/public/room/get-room/${roomId}`);
  return rs?.data;
};
