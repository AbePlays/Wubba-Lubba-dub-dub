import { Box, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { FadeLeftAnimation, MotionBox } from "../../pages/animations";

import { SeasonType } from "../../pages/episodes/types";

interface Props {
  details: SeasonType;
}

export default function SeasonCard({ details }: Props): ReactElement {
  return (
    <Link href={`/episodes/${details.id}`}>
      <MotionBox
        variants={FadeLeftAnimation.child}
        maxW="96"
        h="80"
        mx="auto"
        rounded="md"
        overflow="hidden"
        position="relative"
      >
        <Image src={details.imageUrl} objectFit="cover" h="full" w="full" />
        <Box
          position="absolute"
          h="full"
          w="full"
          top="0"
          opacity="0.3"
          bg="black"
        />
        <Stack position="absolute" h="full" w="full" top="0" p="1">
          <Spacer />
          <Text
            textAlign="center"
            color="white"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            Season {details.id}
          </Text>
        </Stack>
      </MotionBox>
    </Link>
  );
}
