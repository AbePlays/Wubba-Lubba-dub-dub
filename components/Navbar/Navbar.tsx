import { Box, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Link href="/">Rick and Morty</Link>
        <Stack isInline spacing="8">
          <Link href="/characters">Characters</Link>
          <Link href="/episodes">Episodes</Link>
          <Link href="/locations">Location</Link>
          <Link href="/about">About</Link>
        </Stack>
      </Flex>
    </Box>
  );
}
