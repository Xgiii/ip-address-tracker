import Image from 'next/image';
import React, { useState } from 'react';

function Header({
  onClick,
  error,
}: {
  onClick: (ip: string) => any;
  error: string;
}) {
  const [ip, setIp] = useState('');

  return (
    <header
      className={`w-full h-[35vh] object-cover overflow-hidden bg-[url('/images/pattern-bg-mobile.png')] md:bg-[url('/images/pattern-bg-desktop.png')] bg-cover`}
    >
      <h1 className='text-center text-4xl text-white font-semibold tracking-wide mt-6'>
        IP Address Tracker
      </h1>

      <div className='my-8 flex items-center justify-center'>
        <input
          type='text'
          onChange={(e) => {
            setIp(e.target.value);
          }}
          value={ip}
          placeholder='Search for IP address or domain'
          className=' px-8 rounded-l-2xl h-14 w-[35vw] text-xl outline-none'
        />
        <button
          onClick={() => {
            onClick(ip);
            if (!error) {
              setIp('');
            }
          }}
          className='bg-black text-white h-14 w-16 rounded-r-2xl flex items-center justify-center'
        >
          <Image
            src='/images/icon-arrow.svg'
            alt='arrow icon'
            width={12}
            height={12}
          />
        </button>
      </div>
      {error && (
        <p className='text-black italic font-bold text-center'>{error}</p>
      )}
    </header>
  );
}

export default Header;
