import React from 'react';
import borderImg from '../../../assets/border.png';
import picture from '../../../assets/job-img.png';
import HeroFooter from '../heroFooter/HeroFooter';

function Hero() {
  return (
    <>
      <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full md:flex justify-center items-center px-4'>
          <div className='left m-auto'>
            <h1 className='md:text-[65px] text-5xl font-bold text-black text-center md:text-left'>
              The Jobdatabase for Recruiting
            </h1>
            <img
              src={borderImg}
              alt='border image'
              className='mx-auto md:mx-0'
            />

            <p className='text-lg font-medium mt-16 text-black md:w-[500px] md:text-left text-center'>
              We summarize job portals and company websites for you and provide
              you with all job advertisements. Get access to important data of
              your next potentials.
            </p>

            <div className='mt-10 md:flex md:gap-4'>
              <button className='w-full mb-4 md:mb-0 md:mr-4 md:w-44 px-8 py-3 rounded-2xl bg-[#B588FF] text-white font-bold'>
                Try Free Trial
              </button>
              <button className='w-full md:w-40 px-8 py-3 rounded-2xl border-solid border-2 border-gray-400 font-bold'>
                Book Call
              </button>
            </div>
          </div>

          <div className='right mt-10'>
            <img src={picture} alt='Job Image' style={{ height: '500px' }} />
          </div>
        </div>
      </div>
      <HeroFooter />
    </>
  );
}

export default Hero;
