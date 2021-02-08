import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import SeasonCard from "../../components/Episode";

import { data } from "../../data/episodes";
import { Season } from "./types";

interface Props {}

export default function episodes({}: Props): ReactElement {
  return (
    <Box py="8" px="4">
      <Box maxW="container.lg" mx="auto">
        <Heading>Seasons</Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing="8" justifySelf="center" mt="8">
          {data.map((season: Season) => (
            <SeasonCard details={season} key={season.id} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
