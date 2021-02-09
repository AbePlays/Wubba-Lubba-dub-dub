import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import { MotionBox, MoveDownAnimation } from "../../pages/animations";
import DarkModeToggle from "./DarkModeToggle";

interface Props {
  toggleMenu: () => void;
}

export default function Navbar({ toggleMenu }: Props): ReactElement {
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
        <Flex alignItems="center">
          <Text cursor="pointer" onClick={toggleMenu} mr="4">
            Menu
          </Text>
          <DarkModeToggle />
        </Flex>
      </Flex>
    </MotionBox>
  );
}
