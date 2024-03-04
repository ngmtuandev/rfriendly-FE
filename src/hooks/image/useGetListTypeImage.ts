import { getTypeImageApi } from "@/apis/getTypeImage";
import { useQuery } from "@tanstack/react-query";
export const useGetTypeImages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["typeImage"],
    queryFn: () => getTypeImageApi(),
  });
  return {
    typeImages: data?.data,
    isLoading,
  };
};
