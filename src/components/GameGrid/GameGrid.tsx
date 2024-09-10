import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        className="p-5"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
