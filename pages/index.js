import React from 'react';
import Head from 'next/head';
import Fretboard from '../components/Fretboard';
import ScaleSelect from '../components/ScaleSelect';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <style type="text/css">
        {`
        body {
          font-family: 'Source Sans Pro', sans-serif;
        }
        `}
      </style>
    </Head>
    <ScaleSelect />
    <Fretboard />
  </div>
);

export default Home;
