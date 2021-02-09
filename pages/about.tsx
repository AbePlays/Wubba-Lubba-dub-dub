import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  FadeUpAnimation,
  MotionBox,
  MotionStack,
  PageAnimation,
} from "./animations";

interface Props {}

export default function about({}: Props): ReactElement {
  return (
    <MotionBox
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      h="100vh"
      py="8"
      px="4"
    >
      <MotionStack
        variants={FadeUpAnimation.parent}
        maxW="container.xl"
        mx="auto"
        textAlign="center"
        spacing="12"
        py="4"
      >
        <MotionBox variants={FadeUpAnimation.child}>
          <Text textTransform="uppercase" letterSpacing="widest">
            Creator
          </Text>
          <Box
            w="8"
            h="2"
            bg="tomato"
            my="4"
            mx="auto"
            transform="rotate(-15deg) skewX(-15deg)"
          />
          <Text maxW="container.md" mx="auto">
            Hi there, I'm Abhishek - aka Abe 👋 I am a self learner trying to
            get hands on new technologies and producing exciting products that
            are as smart, as they are effective. Wanna talk about Computer
            Sciency things? Drop a message : )
          </Text>
        </MotionBox>

        <MotionBox variants={FadeUpAnimation.child}>
          <Text textTransform="uppercase" letterSpacing="widest">
            Contact
          </Text>
          <Box
            w="8"
            h="2"
            bg="tomato"
            my="4"
            mx="auto"
            transform="rotate(-15deg) skewX(-15deg)"
          />
          <Flex justifyContent="center" alignItems="center">
            <Link
              bg="tomato"
              px="4"
              py="2"
              mr="2"
              href="https://github.com/AbePlays"
              rounded="md"
            >
              Github
            </Link>
            <Link
              bg="tomato"
              px="4"
              py="2"
              mr="2"
              href="mailto:abhi.rawat456@gmail.com"
              rounded="md"
            >
              Mail
            </Link>

            <Link
              bg="tomato"
              px="4"
              py="2"
              href="https://www.linkedin.com/in/abe10/"
              rounded="md"
            >
              LinkedIn
            </Link>
          </Flex>
        </MotionBox>
      </MotionStack>
    </MotionBox>
  );
}
