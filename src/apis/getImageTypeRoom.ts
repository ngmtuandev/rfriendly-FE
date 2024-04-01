import axiosClientApi from "@/lib/axios-client";

export const getImageTypeOfRoomApi = async (roomId : string, typeImageId: string) => {
  const rs = await axiosClientApi.get(`/public/image-room/get-all/${roomId}/${typeImageId}`);
  return rs?.data;
};
