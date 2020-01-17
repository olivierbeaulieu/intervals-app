import React from 'react';
import Head from 'next/head';
import GuitarScales from '../components/GuitarScales';
import { useGoogleAnalytics } from '../utils/analytics';
import '../global.css';

const Home = () => {
  useGoogleAnalytics();

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GuitarScales />
    </div>
  );
};

export default Home;
