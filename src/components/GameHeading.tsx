import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import { data } from "autoprefixer";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQery: GameQuery;
}

const GameHeading = ({ gameQery }: Props) => {
  const genre = useGenre(gameQery.genreId);
  const platform = usePlatform(gameQery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" className="mt-2 mb-2" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
