import { Box, Link, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <Box py="4">
      <Text textAlign="center">
        Made with ❤️ by{" "}
        <Link href="https://github.com/AbePlays" target="_blank">
          Abe
        </Link>
      </Text>
    </Box>
  );
}
