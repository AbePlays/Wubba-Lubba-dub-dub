import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";

import { CharacterType } from "../../pages/characters/types";

interface Props {
  character: CharacterType;
}

export default function CharacterCard({ character }: Props): ReactElement {
  return (
    <Link href={`/characters/${character.id}`}>
      <Box
        key={character.id}
        shadow="xl"
        my="4"
        p="4"
        bg="white"
        rounded="lg"
        cursor="pointer"
        _hover={{
          borderLeft: "1px",
          borderLeftWidth: "10px",
          borderLeftColor: "green.200",
        }}
      >
        <Heading fontSize="xl">{character.name}</Heading>
        <Box mt="2">
          <Text>Status: {character.status}</Text>
          <Text>Species: {character.species}</Text>
        </Box>
      </Box>
    </Link>
  );
}
