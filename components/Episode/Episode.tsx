import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";

import { EpisodeType } from "../../data/types";

interface Props {
  episode: EpisodeType;
}

export default function Episode({ episode }: Props): ReactElement {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box shadow="xl" my="4" p="4" rounded="lg" bg={bg}>
      <Heading fontSize="xl" mb="2">
        {episode.name}
      </Heading>
      <Text>Episode: {episode.episode}</Text>
      <Text>Aired On: {episode.air_date}</Text>
    </Box>
  );
}
