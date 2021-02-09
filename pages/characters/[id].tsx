import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Character from "../../components/Character";
import {
  FadeUpAnimation,
  MotionBox,
  MotionSimpleGrid,
  PageAnimation,
} from "../animations";
import { CharacterType } from "./types";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await res.json();

  const numberOfPages = data.info.count;
  const paths = [];

  for (let i = 1; i <= numberOfPages; i++) {
    const obj = {
      params: {
        id: i.toString(),
      },
    };
    paths.push(obj);
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = context.params.id as string;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await res.json();

  return {
    props: {
      characters: data.results,
      currentPage: parseInt(page),
      maxPages: data.info.pages,
    },
  };
};

const LeftArrow = () => (
  <svg
    width="1rem"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    width="1rem"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

interface Props {
  characters: CharacterType[];
  currentPage: number;
  maxPages: number;
}

export default function character({
  characters,
  currentPage,
  maxPages,
}: Props): ReactElement {
  const router = useRouter();

  return (
    <MotionBox
      py="8"
      px="4"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Box maxW="container.lg" mx="auto">
        <Heading>Characters</Heading>
        <MotionSimpleGrid
          variants={FadeUpAnimation.parent}
          columns={[1, 2, 3]}
          spacing="8"
          justifyItems="center"
          maxW="container.md"
          mx="auto"
          mt="8"
        >
          {characters.map((character: CharacterType) => (
            <Character details={character} key={character.id} />
          ))}
        </MotionSimpleGrid>
        <Flex justifyContent="center" alignItems="center" mt="8">
          <IconButton
            aria-label="left-arrow"
            icon={<LeftArrow />}
            isDisabled={currentPage - 1 > 0 ? false : true}
            onClick={() => {
              router.back();
            }}
          />
          <Text mx="4">{currentPage}</Text>
          <IconButton
            aria-label="left-arrow"
            icon={<RightArrow />}
            isDisabled={currentPage + 1 < maxPages ? false : true}
            onClick={() => {
              router.push(`/characters/${currentPage + 1}`);
            }}
          />
        </Flex>
      </Box>
    </MotionBox>
  );
}
