import { ReactNode } from 'react';
import Head from 'next/head';
import { Container, Heading } from '@chakra-ui/react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Perseverance Rover</title>
      </Head>

      <Container maxW="container.xl" mt="4rem">
        <Heading>Perseverance Rover</Heading>

        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
