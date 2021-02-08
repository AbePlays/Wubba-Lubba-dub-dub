import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Wubba Lubba dub-dub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        h="100vh"
        bgGradient="radial(blue.100, blue.300, blue.500, blue.700)"
      >
        <Image src="/background.png" objectFit="contain" h="full" w="full" />
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
        <Box h="1" w="16" bg="tomato" mx="auto" my="4" rounded="full"></Box>
      </Box>
    </Box>
  );
}
