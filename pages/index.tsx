import { LatLngExpression } from 'leaflet';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import Vl from '../components/Vl';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const Home: NextPage = () => {
  const [ipError, setIpError] = useState('');
  const [ip, setIp] = useState('192.212.174.101');
  const [location, setLocation] = useState('South San Gabriel, California');
  const [timezone, setTimezone] = useState('-08:00');
  const [isp, setIsp] = useState('Southern California Edison');
  const [position, setPosition] = useState<LatLngExpression>([
    34.04915, -118.09462,
  ]);

  console.log(position);

  async function submitIpHandler(ip: string) {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if (!ip || !ipRegex.test(ip)) {
      setIpError('wrong ip!');
      return;
    }
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPFY_API_KEY}&ipAddress=${ip}`
    );
    const result = await res.json();
    setIpError('');
    setIp(ip);
    setLocation(result.location.city + ', ' + result.location.region);
    setTimezone(result.location.timezone);
    setIsp(result.isp);
    setPosition([result.location.lat, result.location.lng]);
  }

  return (
    <div className='h-screen'>
      <Header error={ipError} onClick={(ip) => submitIpHandler(ip)} />
      <section className='absolute flex flex-col items-center md:items-start md:flex-row justify-center md:space-x-6 top-[20%] md:top-[calc(35vh-4.5rem)] left-[50%] -translate-x-[50%] bg-white w-[75vw] md:w-[80vw] h-auto md:h-36 rounded-2xl z-[1000] px-6 pt-4 md:p-6 '>
        <Info label='ip address' detail={ip} />
        <Vl />
        <Info label='location' detail={location} />
        <Vl />
        <Info label='timezone' detail={`UTC${timezone}`} />
        <Vl />
        <Info label='isp' detail={isp} />
      </section>
      <Map position={position} />
    </div>
  );
};

export default Home;
