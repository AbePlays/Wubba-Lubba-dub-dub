import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import Fonts from "../components/Fonts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const theme = extendTheme({
  fonts: {
    body: "Nunito",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
