import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import CharacterCard from "../../components/Character";

import { CharacterType } from "./types";

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
  characters: CharacterType[];
}

export default function characters({ characters }: Props): ReactElement {
  return (
    <Box py="8" px="4">
      <Box maxW="container.lg" mx="auto">
        <Heading>All Characters</Heading>
        <Box maxW="container.md" mx="auto" mt="8">
          {characters.map((character: CharacterType) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
