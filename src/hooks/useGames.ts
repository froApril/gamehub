import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClients, { FectchResponse } from "../services/api-clients";
import APIClient from "../services/api-clients";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms : {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}


const apiClient = new APIClient<Game>('/games');
const useGames = (gameQuery : GameQuery) =>
    useInfiniteQuery<FectchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params : {
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 1 * 60 * 1000
    })

export default useGames