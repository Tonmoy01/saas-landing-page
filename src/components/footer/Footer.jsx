import React from 'react';
import footerImg from '../../assets/footerImg.png';
import logo from '../../assets/logo_white.png';
import EmailInput from '../emailInput/EmailInput';

function Footer() {
  return (
    <div className='w-full md:mt-28 mt-10 text-white bg-footerBgColor'>
      {/* Footer header section */}
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full px-4'>
        <div className='md:mb-32 mb-14 text-center md:text-start'>
          <h2 className='md:text-[50px] text-2xl font-semibold pt-20 pb-8'>
            People are Saying About Jobsource
          </h2>
          <p className='pb-8 md:text-lg text-sm text-[#A6A6A6] font-medium'>
            Everything you need to find the right costumers in <br /> your
            Market.
          </p>
          <img src={footerImg} alt='Footer Image' className='mx-auto md:mx-0' />
        </div>

        {/* Footer bottom section */}
        <div className='md:flex'>
          {/* left side */}
          <div className='md:w-6/12 mb-10 md:mb-0 text-center md:text-start'>
            <img src={logo} alt='logo' className='mx-auto md:mx-0' />
            <p className='mt-11 mb-7 text-[#A6A6A6] text-lg'>
              Get newest Informations about Jobsource
            </p>
            <EmailInput className='bg-footerBgColor outline-none w-full ' />
          </div>
          {/* right side */}
          <div className='md:flex gap-10 justify-center items-center md:w-6/12 md:mb-32 pb-5 text-center md:text-start'>
            <div className='space-y-4 md:border-none border-b-2'>
              <p className='mb-6'>Help and Company</p>
              <p>Talk to support</p>
              <p>Imprint</p>
              <p>privacy policy</p>
              <p>Training</p>
            </div>
            <div className='space-y-4'>
              <p className='mb-6'>Product</p>
              <p>Feedback</p>
              <p>Consultation call</p>
              <p>Try out for Free</p>
              <p>Pricing product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
