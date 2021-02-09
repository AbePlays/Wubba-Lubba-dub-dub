import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion.custom(Box);
export const MotionImage = motion.custom(Image);
export const MotionText = motion.custom(Text);
export const MotionSimpleGrid = motion.custom(SimpleGrid);
export const MotionStack = motion.custom(Stack);

export const FadeUpAnimation = {
  parent: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  },
  child: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  },
};

export const FadeLeftAnimation = {
  parent: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  child: {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0 },
  },
};

export const PageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: { opacity: 0 },
};

export const MoveUpAnimation = {
  hidden: {
    y: 50,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
