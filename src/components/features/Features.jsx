import React from 'react';

import job from '../../assets/job.png';
import company from '../../assets/company.png';
import analytics from '../../assets/analytics.png';

function Features() {
  const featuresData = [
    {
      id: 1,
      img: job,
      title: 'Job Leads',
      desc: 'Refine searches with bollean search operators and get an accurate search with matching results',
    },
    {
      id: 2,
      img: company,
      title: 'Company research',
      desc: 'Follow your dream Costumers and their  recruitment actions.',
    },
    {
      id: 3,
      img: analytics,
      title: 'Analytics',
      desc: 'Get an overview of crutial job data that can help you to make important decisions.',
    },
  ];

  return (
    <>
      <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full px-4'>
          {/* Section Header */}
          <div className='md:flex md:justify-between md:gap-2 mb-16'>
            <h1 className='md:text-5xl font-semibold md:w-3/12 text-center md:text-left text-3xl mb-10 md:mb-0'>
              All Features you need
            </h1>
            <p className='text-lg text-[#A6A6A6] px-5 md:w-7/12 text-center md:text-left mb-10 md:mb-0'>
              We offer the features you need to get to your dream base and
              follow trends in the recruitment Market to take important
              decisions.
            </p>
            <div className='md:w-2/12 text-center'>
              <button className='mx-auto px-5 py-3 text-white rounded-full bg-btnBgColor'>
                Free Trial
              </button>
            </div>
          </div>

          {/* Section Card */}
          <div className='md:flex md:justify-between gap-11'>
            {featuresData?.map(({ id, img, title, desc }) => (
              <div key={id} className='w-full'>
                <img src={img} alt={title} className='w-full' />
                <div>
                  <h2 className='text-3xl font-semibold my-5'>{title}</h2>
                  <p className='text-lg font-medium text-[#A6A6A6]'>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
