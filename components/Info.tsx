import React from 'react';

function Info({ label, detail }: { label: string; detail: string }) {
  return (
    <>
      <div className='flex flex-col space-y-1 md:space-y-3 items-center mb-4 md:mb-0 md:items-start md:w-[20%]'>
        <h2 className='text-slate-500 font-bold text-xs md:text-sm tracking-widest '>
          {label.toUpperCase()}
        </h2>
        <p className='lg:text-[1.4rem] md:text-xl text-[1.2rem] font-bold text-center md:text-start md:leading-6'>
          {detail}
        </p>
      </div>
    </>
  );
}

export default Info;
