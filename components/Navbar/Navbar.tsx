import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const router = useRouter();

  const { pathname } = router;
  console.log(pathname);

  return (
    <Box
      shadow="base"
      px="4"
      py="2"
      w="full"
      style={{
        position: `${pathname === "/" ? "fixed" : "static"}`,
        color: `${pathname === "/" ? "white" : "black"}`,
      }}
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
          <Link href="/locations/1">Locations</Link>
          <Link href="/about">About</Link>
        </Stack>
      </Flex>
    </Box>
  );
}
