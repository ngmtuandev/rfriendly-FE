import { getDetailRoomApi } from "@/apis/getDetailRoom";
import { useQuery } from "@tanstack/react-query";
export const useGetDetailRoom = (roomId : string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["room"],
    queryFn: () => getDetailRoomApi(roomId),
  });
  return {
    roomDetail: data,
    isLoading,
  };
};
