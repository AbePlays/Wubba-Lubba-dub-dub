import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { Episode } from "../../components/Episode";

import { data } from "../../data/episodes";
import { MotionBox, PageAnimation } from "../animations";
import { EpisodeType } from "./types";

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfSeasons = data.length;
  const paths = [];

  for (let i = 1; i <= numberOfSeasons; i++) {
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
  const season = context.params.id as string;
  const seasonIndex = parseInt(season) - 1;

  const numberOfEpisodes = data[seasonIndex].numberOfEpisodes;
  let episodesInPreviousSeasons = 0;
  let episodeNumbers = "";

  if (seasonIndex > 0) {
    for (let i = 0; i < seasonIndex; i++) {
      episodesInPreviousSeasons += data[i].numberOfEpisodes;
    }
  }

  for (let i = 1; i <= numberOfEpisodes; i++) {
    episodeNumbers += +episodesInPreviousSeasons + i + ",";
  }
  episodeNumbers = episodeNumbers.substring(0, episodeNumbers.length - 1);

  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${episodeNumbers}`
  );
  const receivedData = await res.json();

  return {
    props: {
      episodes: receivedData,
      season: seasonIndex + 1,
      imageUrl: data[seasonIndex].imageUrl,
    },
  };
};

interface Props {
  episodes: EpisodeType[];
  season: number;
  imageUrl: string;
}

export default function episode({
  episodes,
  season,
  imageUrl,
}: Props): ReactElement {
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
        <Heading>Season {season}</Heading>
        <Box maxW="container.md" mx="auto" mt="8">
          <Box rounded="md" overflow="hidden">
            <Image src={imageUrl} h="full" w="full" objectFit="cover" />
          </Box>
          {episodes.map((episode: EpisodeType) => (
            <Episode episode={episode} key={episode.id} />
          ))}
        </Box>
      </Box>
    </MotionBox>
  );
}
