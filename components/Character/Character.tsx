import { Box, Image, Text, Stack, Spacer } from "@chakra-ui/react";
import React, { MutableRefObject, ReactElement, useRef } from "react";
import { FadeUpAnimation, MotionBox } from "../../pages/animations";
import { CharacterType } from "../../pages/characters/types";

interface Props {
  details: CharacterType;
}

export default function Character({ details }: Props): ReactElement {
  const divRef: MutableRefObject<HTMLDivElement> = useRef();

  const handleMouseEnter = () => {
    divRef.current.style.opacity = "0";
  };

  const handleMouseLeave = () => {
    divRef.current.style.opacity = "0.3";
  };

  return (
    <MotionBox
      variants={FadeUpAnimation.child}
      position="relative"
      rounded="sm"
      overflow="hidden"
    >
      <Image src={details.image} />
      <Box
        position="absolute"
        h="full"
        w="full"
        top="0"
        bg="black"
        opacity="0.3"
        transition="opacity 300ms ease-in-out"
        ref={divRef}
      />
      <Stack
        position="absolute"
        h="full"
        w="full"
        top="0"
        p="1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Spacer />
        <Text
          textAlign="center"
          color="white"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          {details.name}
        </Text>
      </Stack>
    </MotionBox>
  );
}
