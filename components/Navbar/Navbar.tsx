import {
  Flex,
  Text,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import { MotionBox, MoveDownAnimation } from "../../pages/animations";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("gray.50", "gray.700");
  const { route } = useRouter();

  return (
    <MotionBox
      variants={MoveDownAnimation}
      initial="hidden"
      animate="show"
      shadow="base"
      px="4"
      py="2"
      h="7vh"
      w="full"
      zIndex="100"
      position="fixed"
      top="0"
      color={route === "/" ? "white" : color}
      bg={route === "/" ? "transparent" : bg}
    >
      <Flex
        h="full"
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        mx="auto"
        textTransform="uppercase"
        letterSpacing="widest"
        fontWeight="light"
        fontSize="sm"
      >
        <Link href="/">Rick and Morty</Link>
        <Stack isInline spacing="8">
          <Link href="/characters/1">Characters</Link>
          <Link href="/episodes">Episodes</Link>
          <Link href="/locations/1">Locations</Link>
          <Link href="/about">About</Link>
          <Text onClick={toggleColorMode} cursor="pointer">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Text>
        </Stack>
      </Flex>
    </MotionBox>
  );
}
