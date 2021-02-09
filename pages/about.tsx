import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactElement } from "react";

import {
  FadeUpAnimation,
  MotionBox,
  MotionStack,
  PageAnimation,
} from "../data/animations";

interface Props {}

export default function about({}: Props): ReactElement {
  const bg = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");

  return (
    <MotionBox
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      h="93vh"
      py="8"
      px="4"
      mt="7vh"
    >
      <Head>
        <title>Wubba Lubba dub-dub | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionStack
        variants={FadeUpAnimation.parent}
        maxW="container.xl"
        mx="auto"
        textAlign="center"
        spacing="12"
        py="4"
      >
        <MotionBox variants={FadeUpAnimation.child}>
          <Text
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="bold"
          >
            Creator
          </Text>
          <Box
            w="8"
            h="2"
            bg={bg}
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
          <Text
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="bold"
          >
            Contact
          </Text>
          <Box
            w="8"
            h="2"
            bg={bg}
            my="4"
            mx="auto"
            transform="rotate(-15deg) skewX(-15deg)"
          />
          <Flex justifyContent="center" alignItems="center">
            <Link
              target="_blank"
              bg={bg}
              color={color}
              px="4"
              py="2"
              mr="2"
              href="https://github.com/AbePlays"
              rounded="md"
              border="1px"
              borderColor={color}
              _hover={{
                backgroundColor: color,
                color: bg,
                borderColor: bg,
              }}
            >
              Github
            </Link>
            <Link
              bg={bg}
              color={color}
              px="4"
              py="2"
              mr="2"
              href="mailto:abhi.rawat456@gmail.com"
              rounded="md"
              border="1px"
              borderColor={color}
              _hover={{
                backgroundColor: color,
                color: bg,
                borderColor: bg,
              }}
            >
              Mail
            </Link>

            <Link
              target="_blank"
              bg={bg}
              color={color}
              px="4"
              py="2"
              href="https://www.linkedin.com/in/abe10/"
              rounded="md"
              border="1px"
              borderColor={color}
              _hover={{
                backgroundColor: color,
                color: bg,
                borderColor: bg,
              }}
            >
              LinkedIn
            </Link>
          </Flex>
        </MotionBox>
      </MotionStack>
    </MotionBox>
  );
}
