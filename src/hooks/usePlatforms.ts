import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClients, { FectchResponse } from "../services/api-clients";
import APIClient from "../services/api-clients";

export interface Platform {
    id: number;
    name: string;
    slug: string
}
const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: 1 * 60 * 60,
        initialData: platforms
    });
}

export default usePlatforms;