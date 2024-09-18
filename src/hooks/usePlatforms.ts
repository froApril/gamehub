import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClients, { FectchResponse } from "../services/api-clients";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => apiClients.get<FectchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
        staleTime: 1 * 60 * 60,
        initialData: {count: platforms.length, results: platforms} 
    });
}

export default usePlatforms;