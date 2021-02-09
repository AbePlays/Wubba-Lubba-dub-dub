import { Box, Flex, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement, useState } from "react";

import {
  MotionBox,
  MotionFlex,
  MotionHeading,
  MotionLink,
  MotionText,
  NavbarFadeLeftAnimation,
  NavbarLeftHeaderAnimation,
  NavbarLinksAnimation,
  NavbarPrimaryBackground,
  NavbarRightHeaderAnimation,
  NavbarSecondaryBackground,
  ShellAnimation,
} from "../../pages/animations";

const navbarData: NavbarDataType[] = [
  {
    id: 1,
    title: "Characters",
    imageUrl: "/Characters.png",
    href: "/characters/1",
  },
  {
    id: 2,
    title: "Episodes",
    imageUrl: "/Episodes.png",
    href: "/episodes",
  },
  {
    id: 3,
    title: "Location",
    imageUrl: "/Locations.jpg",
    href: "/locations/1",
  },
  {
    id: 4,
    title: "About",
    imageUrl: "/Characters.png",
    href: "/about",
  },
];

const cameraPan = keyframes`
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 40% 10%;
  }
  50% {
    background-position: 0% 10%;
  }
  75% {
    background-position: 10% 40%;
  }
  100% {
    background-position: 0% 0%;
  }
  `;

interface NavbarDataType {
  id: number;
  title: string;
  imageUrl: string;
  href: string;
}

interface Props {
  toggleMenu: () => void;
}

export default function FullPageNavbar({ toggleMenu }: Props): ReactElement {
  const defaultBg = "green.300";
  const [isImage, setIsImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleMouseEnter = (imgUrl: string) => {
    setIsImage(true);
    setImageUrl(imgUrl);
  };

  const handleMouseLeave = () => {
    setIsImage(false);
    setImageUrl("");
  };

  return (
    <MotionBox
      variants={ShellAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      h="100vh"
      w="100vw"
      overflow="hidden"
      position="relative"
    >
      <MotionBox
        variants={NavbarSecondaryBackground}
        h="100vh"
        w="100vw"
        bg="yellow.400"
        position="absolute"
        top="0"
      />
      <MotionBox
        variants={NavbarPrimaryBackground}
        h="100vh"
        w="100vw"
        bg={isImage ? `url(${imageUrl}) center center` : defaultBg}
        animation={`${cameraPan} 30s infinite`}
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
        top="0"
      >
        <Box maxW="container.xl" mx="auto">
          <Flex
            h="7vh"
            justifyContent="space-between"
            alignItems="center"
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="light"
            fontSize="sm"
          >
            <MotionLink variants={NavbarLeftHeaderAnimation} href="/">
              Rick and Morty
            </MotionLink>
            <MotionText
              variants={NavbarRightHeaderAnimation}
              cursor="pointer"
              onClick={toggleMenu}
            >
              Menu
            </MotionText>
          </Flex>
          <Flex
            h="93vh"
            justifyContent="space-between"
            alignItems="center"
            fontSize="7rem"
            fontWeight="bold"
            color="white"
          >
            <MotionFlex
              variants={NavbarLinksAnimation.parent}
              flexDirection="column"
            >
              {navbarData.map((item: NavbarDataType) => {
                return (
                  <MotionBox
                    onMouseEnter={() => {
                      handleMouseEnter(item.imageUrl);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                    }}
                    key={item.id}
                    onClick={toggleMenu}
                    w="min-content"
                    variants={NavbarLinksAnimation.child}
                    _hover={{
                      color: "black",
                    }}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </MotionBox>
                );
              })}
            </MotionFlex>
            <MotionBox
              variants={NavbarFadeLeftAnimation.parent}
              maxW="md"
              ml="auto"
            >
              <MotionHeading variants={NavbarFadeLeftAnimation.child}>
                About
              </MotionHeading>
              <MotionText
                variants={NavbarFadeLeftAnimation.child}
                fontSize="sm"
                mt="4"
              >
                This website contains details about the animated Tv Series 'Rick
                and Morty'. It contains information about characters, episodes
                and location mentioned thoughout the show. Being an avid watcher
                of the series and a fan, I decided to built this as a fun little
                project. Enjoy!
              </MotionText>
            </MotionBox>
          </Flex>
        </Box>
      </MotionBox>
      <div></div>
    </MotionBox>
  );
}
