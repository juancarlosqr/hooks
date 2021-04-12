import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>red planet rovers</title>
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
