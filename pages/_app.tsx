import { ChakraProvider, theme } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
