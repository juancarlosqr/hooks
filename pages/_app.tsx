import { ChakraProvider } from '@chakra-ui/react';

function RedPlanetRoversApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default RedPlanetRoversApp;
