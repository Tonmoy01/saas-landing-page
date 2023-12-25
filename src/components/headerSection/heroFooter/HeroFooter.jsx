import React from 'react';

function HeroFooter() {
  return (
    <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full md:flex flex-col justify-center items-center gap-5 md:px-0'>
        <h1 className='md:text-4xl text-2xl md:text-left text-center mb-3 font-bold text-[#191A15]'>
          More then 5.000.000 Job Ads per Year
        </h1>
        <p className='md:text-lg text-[#A6A6A6] text-center text-sm mb-20'>
          We collect millions of job ads and screen them for their uniqueness
          and filter out the important data you need to grow your business
        </p>
      </div>
    </div>
  );
}

export default HeroFooter;
