import { Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { MotionBox, PageAnimation } from "./animations";

interface Props {}

export default function about({}: Props): ReactElement {
  return (
    <MotionBox
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      h="100vh"
      bg="gray.300"
    >
      <Text>This is about page</Text>
    </MotionBox>
  );
}
