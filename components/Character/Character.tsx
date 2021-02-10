import { Box, Image, Text, Stack, Spacer } from "@chakra-ui/react";
import { ReactElement } from "react";

import { FadeUpAnimation, MotionBox } from "../../data/animations";
import { CharacterType } from "../../data/types";

interface Props {
  details: CharacterType;
}

export default function Character({ details }: Props): ReactElement {
  return (
    <MotionBox
      variants={FadeUpAnimation.child}
      position="relative"
      rounded="md"
      overflow="hidden"
      shadow="md"
    >
      <Image src={details.image} alt="Character" />
      <Box
        position="absolute"
        h="full"
        w="full"
        top="0"
        bg="black"
        opacity="0.3"
      />
      <Stack position="absolute" h="full" w="full" top="0" p="1">
        <Spacer />
        <Text
          textAlign="center"
          color="white"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          {details.name}
        </Text>
      </Stack>
    </MotionBox>
  );
}
