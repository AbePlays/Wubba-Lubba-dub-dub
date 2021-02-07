import { Box, Image, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Character } from "./types";

export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await res.json();

  const numberOfCharacters = data.info.count;
  const paths = [];

  for (let i = 1; i <= numberOfCharacters; i++) {
    const obj = {
      params: {
        id: i.toString(),
      },
    };
    paths.push(obj);
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const characterId = context.params.id;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const data = await res.json();

  return {
    props: {
      details: data,
    },
  };
};

interface Props {
  details: Character;
}

export default function character({ details }: Props): ReactElement {
  return (
    <Box>
      <Text>This is character page</Text>
      <Box>
        <Image src={details.image} />
        <Text>{details.name}</Text>
        <Text>{details.gender}</Text>
        <Text>{details.origin.name}</Text>
        <Text>{details.species}</Text>
        <Text>{details.status}</Text>
      </Box>
    </Box>
  );
}
