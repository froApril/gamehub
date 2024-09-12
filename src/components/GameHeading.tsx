import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQery: GameQuery;
}

const GameHeading = ({ gameQery }: Props) => {
  const heading = `${gameQery.platform?.name || ""} ${
    gameQery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" className="mt-2 mb-2" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
