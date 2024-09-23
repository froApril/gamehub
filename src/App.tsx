import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string | null;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={3}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={3}>
        <Box paddingLeft={2} marginBottom={5}>
          <GameHeading gameQery={gameQuery}></GameHeading>
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.genreId}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;
