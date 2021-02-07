import { Box, Image, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Episode } from "./types";

export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`);
  const data = await res.json();

  const numberOfEpisodes = data.info.count;
  const paths = [];

  for (let i = 1; i <= numberOfEpisodes; i++) {
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
    `https://rickandmortyapi.com/api/episode/${episodeId}`
  );
  const data = await res.json();

  return {
    props: {
      details: data,
    },
  };
};

interface Props {
  details: Episode;
}

export default function episode({ details }: Props): ReactElement {
  return (
    <Box>
      <Text>This is episode page</Text>
      <Box>
        <Text>{details.name}</Text>
        <Text>{details.air_date}</Text>
        <Text>{details.episode}</Text>
      </Box>
    </Box>
  );
}
