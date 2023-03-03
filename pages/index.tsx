import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Map />
    </div>
  );
};

export default Home;
