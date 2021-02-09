import { Box, Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import SeasonCard from "../../components/Episode";
import { data } from "../../data/episodes";
import {
  MotionSimpleGrid,
  FadeLeftAnimation,
  PageAnimation,
  MotionBox,
} from "../animations";
import { SeasonType } from "./types";

interface Props {}

export default function episodes({}: Props): ReactElement {
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
        <Heading>Seasons</Heading>
        <MotionSimpleGrid
          variants={FadeLeftAnimation.parent}
          columns={[1, 1, 2]}
          spacing="8"
          justifySelf="center"
          mt="8"
        >
          {data.map((season: SeasonType) => (
            <SeasonCard details={season} key={season.id} />
          ))}
        </MotionSimpleGrid>
      </Box>
    </MotionBox>
  );
}
