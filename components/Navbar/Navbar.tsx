import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <Box
      position="fixed"
      top="0"
      color="white"
      w="full"
      shadow="base"
      px="4"
      py="2"
    >
      <Flex
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
          <Link href="/characters">Characters</Link>
          <Link href="/episodes">Episodes</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/about">About</Link>
        </Stack>
      </Flex>
    </Box>
  );
}
