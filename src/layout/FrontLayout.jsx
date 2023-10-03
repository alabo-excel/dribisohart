import React, { Fragment } from 'react';
import Head from "next/head"
import HeaderNav from "@/components/HeaderNav";
import FooterNav from '@/components/FooterNav';

const FrontLayout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title> Dr. Ibiso Darlington Hart </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Ibiso Darlington Hart" />
        <meta property="og:description" content="Ibiso Darlington Hart (PhD) is a highly accomplished business development strategist and leadership professional with an impressive career spanning over two decades. Throughout her diverse professional journey, she has gained extensive experience in various industries, including banking and the Aviation Sector." />
        <meta property="og:image" content="./images/IMGL9344.jpg" />
        <meta property="og:url" content="http://www.dribisohart.com/" />
        <meta property="og:site_name" content="Dr Ibiso Darlington Hart" />

        <meta name="twitter:title" content="Dr. Ibiso Darlington Hart" />
        <meta name="twitter:description" content="Ibiso Darlington Hart (PhD) is a highly accomplished business development strategist and leadership professional with an impressive career spanning over two decades. Throughout her diverse professional journey, she has gained extensive experience in various industries, including banking and the Aviation Sector." />
        <meta name="twitter:image" content="./images/IMGL9344.jpg" />

      </Head>
      <HeaderNav />
      {children}
      <FooterNav />
    </Fragment>
  );
};

export default FrontLayout;