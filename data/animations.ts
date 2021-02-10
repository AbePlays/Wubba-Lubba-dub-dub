import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion.custom(Box);
export const MotionImage = motion.custom(Image);
export const MotionText = motion.custom(Text);
export const MotionSimpleGrid = motion.custom(SimpleGrid);
export const MotionStack = motion.custom(Stack);
export const MotionLink = motion.custom(Link);
export const MotionFlex = motion.custom(Flex);
export const MotionHeading = motion.custom(Heading);

export const FadeUpAnimation = {
  parent: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  },
  child: {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: {
      opacity: 0,
    },
  },
};

export const FadeLeftAnimation = {
  parent: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  child: {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
};

export const PageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      delayChildren: 1,
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

export const MoveDownAnimation = {
  hidden: {
    y: -100,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// Navbar Animation
export const NavbarPrimaryBackground = {
  hidden: {
    y: "-100vh",
  },
  show: {
    y: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 1,
    },
  },
};

export const NavbarSecondaryBackground = {
  hidden: {
    y: "-100vh",
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      delay: 0.05,
      duration: 1,
    },
  },
};

export const ShellAnimation = {
  hidden: {},
  show: {},
  exit: {},
};

export const NavbarLeftHeaderAnimation = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 1,
    },
  },
};

export const NavbarRightHeaderAnimation = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,

    x: 0,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const NavbarLinksAnimation = {
  parent: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  },
  child: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
};

export const NavbarFadeLeftAnimation = {
  parent: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.5,
      },
    },
  },
  child: {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0 },
  },
};
