import Image from 'next/image';
import React from 'react';

function Header() {
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
          placeholder='Search for IP address or domain'
          className=' px-8 rounded-l-2xl h-14 w-[35vw] text-xl outline-none'
        />
        <button className='bg-black text-white h-14 w-16 rounded-r-2xl flex items-center justify-center'>
          <Image
            src='/images/icon-arrow.svg'
            alt='arrow icon'
            width={12}
            height={12}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
