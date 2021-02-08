import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import { EpisodeType } from "../../pages/episodes/types";

interface Props {
  episode: EpisodeType;
}

export default function Episode({ episode }: Props): ReactElement {
  return (
    <Box shadow="xl" my="4" p="4" bg="white" rounded="lg">
      <Text fontSize="2xl" mb="2">
        {episode.name}
      </Text>
      <Text>Episode: {episode.episode}</Text>
      <Text>Aired On: {episode.air_date}</Text>
    </Box>
  );
}
