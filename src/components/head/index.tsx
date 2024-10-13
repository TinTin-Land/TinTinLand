import Head from 'next/head';
import React from "react";

interface HeadProps {
  title?: string;
}

const Heads: React.FC<HeadProps> = ({ title = "TinTinLand | Welcome to Web3 Developer Dao" }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/tintinlogo.svg"/>
    </Head>
  );
};

export default Heads;
