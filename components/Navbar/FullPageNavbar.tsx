import { Box, Flex, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement, useState } from "react";

import {
  MotionBox,
  MotionFlex,
  MotionHeading,
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
    imageUrl: "/Characters.jpg",
    href: "/characters/1",
  },
  {
    id: 2,
    title: "Episodes",
    imageUrl: "/Episodes.jpg",
    href: "/episodes",
  },
  {
    id: 3,
    title: "Locations",
    imageUrl: "/Locations.jpg",
    href: "/locations/1",
  },
  {
    id: 4,
    title: "About",
    imageUrl: "/About.jpg",
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
  isMenuOpen: boolean;
}

export default function FullPageNavbar({
  toggleMenu,
  isMenuOpen,
}: Props): ReactElement {
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
        bg="#ffcda3"
        position="absolute"
        top="0"
      />
      <MotionBox
        variants={NavbarPrimaryBackground}
        h="100vh"
        w="100vw"
        px="4"
        bg={isImage ? `url(${imageUrl}) center center` : "#ef4f4f"}
        animation={`${cameraPan} 30s infinite`}
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
        top="0"
        color="white"
      >
        <Box maxW="container.xl" mx="auto" px="4">
          <Flex
            h="7vh"
            justifyContent="space-between"
            alignItems="center"
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="light"
            fontSize="sm"
          >
            <MotionBox variants={NavbarLeftHeaderAnimation}>
              <Link href="/">Rick and Morty</Link>
            </MotionBox>
            <MotionText
              variants={NavbarRightHeaderAnimation}
              cursor="pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </MotionText>
          </Flex>
          <Flex
            h="93vh"
            justifyContent="space-between"
            alignItems="center"
            color="white"
          >
            <MotionFlex
              variants={NavbarLinksAnimation.parent}
              flexDirection="column"
              fontSize={["3rem", "4rem", "5rem", "6rem", "7rem"]}
              fontWeight="bold"
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
              display={["none", "none", "none", "block"]}
              variants={NavbarFadeLeftAnimation.parent}
              maxW="md"
              ml="auto"
            >
              <MotionHeading variants={NavbarFadeLeftAnimation.child}>
                Wubba Lubba dub-dub
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
