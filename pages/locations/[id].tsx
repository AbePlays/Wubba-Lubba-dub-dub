import { Box, Image, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Location } from "./types";

export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/location`);
  const data = await res.json();

  const numberOfLocations = data.info.count;
  const paths = [];

  for (let i = 1; i <= numberOfLocations; i++) {
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
  const episodeId = context.params.id;

  const res = await fetch(
    `https://rickandmortyapi.com/api/location/${episodeId}`
  );
  const data = await res.json();

  return {
    props: {
      details: data,
    },
  };
};

interface Props {
  details: Location;
}

export default function location({ details }: Props): ReactElement {
  return (
    <Box>
      <Text>This is location page</Text>
      <Box>
        <Text>{details.name}</Text>
        <Text>{details.type}</Text>
        <Text>{details.dimension}</Text>
      </Box>
    </Box>
  );
}
