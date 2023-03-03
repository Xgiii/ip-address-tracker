import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header
      className={`w-full h-[30vh] object-cover overflow-hidden bg-[url('/images/pattern-bg-mobile.png')] md:bg-[url('/images/pattern-bg-desktop.png')] bg-cover`}
    >
      <h1 className='text-center text-4xl text-white font-semibold tracking-wide mt-6'>
        IP Address Tracker
      </h1>
    </header>
  );
}

export default Header;
