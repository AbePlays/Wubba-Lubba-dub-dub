import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";

import { FadeUpAnimation, MotionBox } from "../../data/animations";
import { LocationType } from "../../data/types";

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
      transition="border 300ms ease-in-out"
      _hover={{
        borderLeftWidth: "10px",
        borderLeftColor: "#9ad3bc",
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
