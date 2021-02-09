import { ChakraProvider, extendTheme, Box, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import Fonts from "../components/Fonts";
import Footer from "../components/Footer";
import Navbar, { FullPageNavbar } from "../components/Navbar";

export const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

const MyApp = ({ Component, pageProps, router }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AnimatePresence exitBeforeEnter>
        {isMenuOpen && <FullPageNavbar toggleMenu={toggleMenu} />}
      </AnimatePresence>

      {!isMenuOpen && (
        <>
          <Navbar toggleMenu={toggleMenu} />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Footer />
        </>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
