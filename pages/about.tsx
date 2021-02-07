import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props {}

export default function about({}: Props): ReactElement {
  return (
    <Box>
      <Text>This is about page</Text>
    </Box>
  );
}
