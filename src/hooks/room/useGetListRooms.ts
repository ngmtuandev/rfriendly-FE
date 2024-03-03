import { getListRoomApi } from "@/apis/getListRoom";
import { useQuery } from "@tanstack/react-query";
export const useGetListRooms = ({
  currentPage,
  size,
}: {
  currentPage: number;
  size: number;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["rooms", { currentPage, size }],
    queryFn: () => getListRoomApi({ currentPage, size }),
  });
  return {
    rooms: data,
    isLoading,
  };
};
