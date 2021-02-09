import { ChakraProvider, theme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
