import React from 'react';
import { IoIosStar } from 'react-icons/io';

import thunder from '../../assets/thunder.png';
import chart from '../../assets/chart.png';
import icon from '../../assets/icon.png';

function DataProvider() {
  const providData = [
    {
      id: 1,
      img: thunder,
      header: 'High Quality Data',
      paragraph:
        'Our data is always up to date and is checked for accuracy Especially when it comes to contact data and allocation, we place great importance on accuracy.',
    },
    {
      id: 2,
      img: chart,
      header: 'Analytics',
      paragraph:
        'Analyze the job market in which you operate. we provide you with important data to help you make decisions in your market.',
    },
    {
      id: 3,
      img: icon,
      header: 'Export',
      paragraph:
        'Select your data and export it in a data format that suits you.',
    },
  ];

  return (
    <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full md:flex md:justify-center gap-8 px-4'>
        {/* Left side */}
        <div className='left w-7/12 md:mx-0 mx-auto'>
          <h1 className='md:text-[50px] font-semibold text-[25px] text-center md:text-left'>
            How we can provide the Data you need
          </h1>
          <p className='text-[#A6A6A6] md:mt-8 md:mb-28 mt-4 mb-14 text-center text-sm md:text-left md:text-base'>
            Jobsource become a common Data provider for many business in the
            field of recruiting and Data analytics.
          </p>

          <div className='rating flex flex-col gap-3 text-center md:text-left'>
            <div className='icons flex gap-1 text-2xl mx-auto md:mx-0'>
              <IoIosStar color='#FFC728' />
              <IoIosStar color='#FFC728' />
              <IoIosStar color='#FFC728' />
              <IoIosStar color='#FFC728' />
              <IoIosStar color='#FFC728' />
            </div>
            <p className='text-lg'>
              <span className='font-bold'>5</span>/5 rating
            </p>
            <p className='text-[#A6A6A6] font-bold text-lg'>Google</p>
          </div>
        </div>

        {/* Right side */}
        <div className='right md:w-5/12'>
          {providData?.map(({ id, img, header, paragraph }) => (
            <div key={id} className='flex items-start gap-3 mt-5 text-left'>
              <div>
                <img src={img} alt='Thunder' />
              </div>
              <div className='w-full'>
                <h1 className='text-3xl font-bold'>{header}</h1>
                <p className='text-lg text-[#A6A6A6] font-medium mt-3'>
                  {paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataProvider;
