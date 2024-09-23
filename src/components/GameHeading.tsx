import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import { data } from "autoprefixer";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQery: GameQuery;
}

const GameHeading = ({ gameQery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" className="mt-2 mb-2" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
