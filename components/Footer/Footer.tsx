import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box py="2" px="4" borderTop="1px" borderColor={bg}>
      <Text textAlign="center">
        Made with ♥️ by{" "}
        <Link href="https://github.com/AbePlays" target="_blank">
          Abe
        </Link>
      </Text>
    </Box>
  );
}
