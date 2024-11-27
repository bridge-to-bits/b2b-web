import { useQuery } from "@tanstack/react-query";
import UsersApi from "@/app/api/users/users-api"; // Replace with your API file path

const useAvailableGenres = () => {
  return useQuery({
    queryKey: ["availableGenres"],
    queryFn: async () => UsersApi.getAvailableGenres(),
    select: (data) => data.data,
  });
};
