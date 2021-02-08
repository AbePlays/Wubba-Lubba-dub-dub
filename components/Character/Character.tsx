import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { CharacterType } from "../../pages/characters/types";

interface Props {
  details: CharacterType;
}

export default function Character({ details }: Props): ReactElement {
  return (
    <Box px="4" my="8">
      <Flex
        maxW="container.md"
        mx="auto"
        shadow="xl"
        rounded="md"
        justifyContent="space-evenly"
        alignItems="center"
        py="8"
        flexDirection={["column", "column", "row"]}
      >
        <Image src={details.image} rounded={["full", "full"]} />
        <Stack fontSize="lg" mt={["8", "8", "0"]}>
          <Text>Name: {details.name}</Text>
          <Text>Gender: {details.gender}</Text>
          <Text>Origin Location: {details.origin.name}</Text>
          <Text>Species: {details.species}</Text>
          <Text>Status: {details.status}</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
