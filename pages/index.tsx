import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Wubba Lubba dub-dub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading>Wubba Lubba dub dub</Heading>
      </Box>
    </Box>
  );
}
