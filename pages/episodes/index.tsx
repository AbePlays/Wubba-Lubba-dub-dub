import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Episode } from "./types";

export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`);
  const data = await res.json();

  return {
    props: {
      episodes: data.results,
    },
  };
};

interface Props {
  episodes: Episode[];
}

export default function episodes({ episodes }: Props): ReactElement {
  return (
    <Box>
      <Text>This is episodes page</Text>
      {episodes.map((episode: Episode) => {
        return (
          <Box key={episode.id} border="1px" my="4">
            <Text>{episode.name}</Text>
            <Text>{episode.air_date}</Text>
          </Box>
        );
      })}
    </Box>
  );
}
