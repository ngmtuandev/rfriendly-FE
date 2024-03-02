import { findRoomByConditionApi } from "@/apis/findRoomByCondition";
import { useQuery } from "@tanstack/react-query";
export const useFindRoomsByConditions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: (queryParams: any) => findRoomByConditionApi(queryParams),
  });
  return {
    rooms: data,
    isLoading,
  };
};
