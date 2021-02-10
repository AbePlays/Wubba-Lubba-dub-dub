import { Box, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";

import { FadeLeftAnimation, MotionBox } from "../../data/animations";
import { SeasonType } from "../../data/types";

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
        <Image
          src={details.imageUrl}
          alt="Season"
          objectFit="cover"
          h="full"
          w="full"
        />
        <Box
          position="absolute"
          h="full"
          w="full"
          top="0"
          opacity="0.3"
          bg="black"
        />
        <Stack
          position="absolute"
          h="full"
          w="full"
          top="0"
          p="1"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Spacer />
          <Text
            textAlign="center"
            color="white"
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="bold"
          >
            Season {details.id}
          </Text>
        </Stack>
      </MotionBox>
    </Link>
  );
}
