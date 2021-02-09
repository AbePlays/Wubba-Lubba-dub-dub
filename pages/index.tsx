import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

import {
  MotionImage,
  MotionBox,
  PageAnimation,
  MoveUpAnimation,
} from "../data/animations";

export default function Home() {
  const bg = useColorModeValue("black", "white");

  return (
    <MotionBox
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Head>
        <title>Wubba Lubba dub-dub | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        h="100vh"
        bgGradient="radial(blue.100, blue.300, blue.500, blue.700)"
      >
        <MotionImage
          variants={MoveUpAnimation}
          src="/background.png"
          objectFit="contain"
          h="full"
          w="full"
        />
      </Box>
      <Box
        maxW="container.xl"
        mx="auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="8"
        px="4"
      >
        <Heading
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          Premise
        </Heading>
        <Text textAlign="justify" my="4" maxW="container.md" mx="auto">
          Rick and Morty is an American adult animated science fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's night
          time Adult Swim programming block. The series follows the
          misadventures of cynical mad scientist Rick Sanchez and his
          good-hearted but fretful grandson Morty Smith, who split their time
          between domestic life and interdimensional adventures.
          <br />
          <br /> The show revolves around the adventures of the members of the
          Smith household, which consists of parents Jerry and Beth, their
          children Summer and Morty, and Beth's father, Rick Sanchez, who lives
          with them as a guest. According to Justin Roiland, the family lives
          outside of Seattle, Washington. The adventures of Rick and Morty,
          however, take place across an infinite number of realities, with the
          characters travelling to other planets and dimensions through portals
          and Rick's flying car.
        </Text>
        <Box h="1" w="16" bg={bg} mx="auto" my="8" rounded="full"></Box>
      </Box>
    </MotionBox>
  );
}
