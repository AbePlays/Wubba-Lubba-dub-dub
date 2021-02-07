import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Location } from "./types";

export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/location`);
  const data = await res.json();

  return {
    props: {
      locations: data.results,
    },
  };
};

interface Props {
  locations: Location[];
}

export default function locations({ locations }: Props): ReactElement {
  return (
    <Box>
      <Text>This is locations page</Text>
      {locations.map((location: Location) => {
        return (
          <Box key={location.id} border="1px" my="4">
            <Text>{location.name}</Text>
            <Text>{location.type}</Text>
            <Text>{location.dimension}</Text>
          </Box>
        );
      })}
    </Box>
  );
}
