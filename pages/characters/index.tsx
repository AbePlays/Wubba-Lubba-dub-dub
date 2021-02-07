import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Character } from "./types";

export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await res.json();

  return {
    props: {
      characters: data.results,
    },
  };
};

interface Props {
  characters: Character[];
}

export default function characters({ characters }: Props): ReactElement {
  return (
    <Box>
      <Text>This is characters page</Text>
      {characters.map((character: Character) => {
        return (
          <Box key={character.id} border="1px" my="4">
            <Text>{character.name}</Text>
            <Flex>
              <Text>{character.status}</Text>
              <Text>{character.species}</Text>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
}
