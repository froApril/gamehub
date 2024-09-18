import { useQuery } from "@tanstack/react-query";
import apiClients, { FectchResponse } from "../services/api-clients";
import genres from "../data/genres";

export interface Genre {
    id: number,
    name: string,
    image_background: string,
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClients.get<FectchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 1 * 60 * 1000,
    initialData: {count: genres.length, results : genres}
});

export default useGenres;