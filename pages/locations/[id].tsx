import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import Location from "../../components/Location";
import {
  FadeUpAnimation,
  MotionBox,
  PageAnimation,
} from "../../data/animations";
import { LocationType } from "../../data/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/location`);
  const data = await res.json();

  const numberOfPages = data.info.pages;
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
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const data = await res.json();

  return {
    props: {
      locations: data.results,
      currentPage: parseInt(page),
      maxPages: data.info.pages,
    },
  };
};

interface Props {
  locations: LocationType[];
  currentPage: number;
  maxPages: number;
}

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

export default function location({
  locations,
  currentPage,
  maxPages,
}: Props): ReactElement {
  const router = useRouter();

  return (
    <MotionBox
      py="8"
      px="4"
      mt="7vh"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Head>
        <title>Wubba Lubba dub-dub | Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box maxW="container.lg" mx="auto">
        <Heading>Locations</Heading>
        <MotionBox
          variants={FadeUpAnimation.parent}
          maxW="container.md"
          mx="auto"
          mt="8"
        >
          {locations.map((location: LocationType) => (
            <Location location={location} key={location.id} />
          ))}
          <Flex justifyContent="flex-end" alignItems="center" mt="8">
            <IconButton
              aria-label="left-arrow"
              icon={<LeftArrow />}
              isDisabled={currentPage - 1 > 0 ? false : true}
              onClick={() => {
                console.log("PRESSED");
                router.back();
              }}
            />
            <Text mx="4">{currentPage}</Text>
            <IconButton
              aria-label="left-arrow"
              icon={<RightArrow />}
              isDisabled={currentPage + 1 < maxPages ? false : true}
              onClick={() => {
                console.log("PRESSED");
                router.push(`/locations/${currentPage + 1}`);
              }}
            />
          </Flex>
        </MotionBox>
      </Box>
    </MotionBox>
  );
}
