import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FadeUpAnimation, MotionBox } from "../../pages/animations";

import { LocationType } from "../../pages/locations/types";

interface Props {
  location: LocationType;
}

export default function CharacterCard({ location }: Props): ReactElement {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <MotionBox
      variants={FadeUpAnimation.child}
      shadow="xl"
      my="4"
      p="4"
      bg={bg}
      rounded="lg"
      _hover={{
        borderLeft: "1px",
        borderLeftWidth: "10px",
        borderLeftColor: "green.200",
      }}
    >
      <Heading fontSize="xl">{location.name}</Heading>
      <Box mt="2">
        <Text>Type: {location.type}</Text>
        <Text>Dimension: {location.dimension}</Text>
      </Box>
    </MotionBox>
  );
}
