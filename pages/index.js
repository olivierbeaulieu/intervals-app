import React from 'react';
import Head from 'next/head';
import GuitarScales from '../components/GuitarScales';
import { useGoogleAnalytics } from '../utils/analytics';
import { Main } from 'grommet';
import Layout from '../components/Layout';
import '../global.css';

const Home = () => {
  useGoogleAnalytics();

  return (
    <Layout>
      <Head>
        <title>Fretboard.rocks - Interactive Scale Visualizations</title>
      </Head>

      <GuitarScales />
    </Layout>
  );
};

export default Home;
