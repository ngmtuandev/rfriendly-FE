import axiosClientApi from "@/lib/axios-client";

export const findRoomByConditionApi = async (queryParam: TFindRoom) => {
  const rs = await axiosClientApi.get(`/public/room/get-find-room`, {
    params: queryParam,
  });

  return rs?.data;
};
