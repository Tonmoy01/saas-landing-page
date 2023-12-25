import React from 'react';

import usa from '../../assets/usa.png';
import uk from '../../assets/uk.png';
import nl from '../../assets/nl.png';
import fr from '../../assets/fr.png';
import gr from '../../assets/gr.png';
import EmailInput from '../emailInput/EmailInput';

const countrys = [
  {
    id: 1,
    name: 'um',
    img: usa,
  },
  {
    id: 2,
    name: 'gb',
    img: uk,
  },
  {
    id: 3,
    name: 'nl',
    img: nl,
  },
  {
    id: 4,
    name: 'fr',
    img: fr,
  },
];

function Availablity() {
  return (
    <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full px-4'>
        <h3 className='text-center md:text-5xl text-3xl font-bold md:mb-0 mb-8'>
          Availablity
        </h3>

        {/* Countrys */}
        <div className='flex md:gap-16 md:items-end md:flex-row flex-col-reverse justify-center items-center'>
          {/* Left Side*/}
          <div className='left md:mt-20 mt-10 md:w-6/12'>
            <h3 className='mb-5 md:text-4xl text-2xl font-semibold md:text-start text-center'>
              Upcoming Countrys
            </h3>
            <div className='flex justify-center gap-8'>
              {countrys?.map(({ id, img, name }) => (
                <div key={id} className='w-full'>
                  <p className='text-[#A6A6A6]'>{name}</p>
                  <img src={img} alt='Image' />
                </div>
              ))}
            </div>

            {/* Request */}
            <div className='flex items-center gap-10 mt-14'>
              <h4 className='text-xl font-semibold'>
                You have a Country request?
              </h4>
              <div className='md:w-auto w-6/12 text-end'>
                <button className='px-5 py-3 text-white rounded-full bg-purple-500'>
                  Contact Us
                </button>
              </div>
            </div>

            <div>
              <h4 className='text-xl font-semibold mt-20 mb-6'>
                Get informed for new Countrys
              </h4>
              <EmailInput />
            </div>
          </div>

          {/* Right Side */}
          <div className='right w-6/12'>
            <div>
              <img src={gr} alt='Germany with Map' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availablity;
