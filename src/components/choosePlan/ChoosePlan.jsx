import React from 'react';
import tikmark from '../../assets/tikmark.png';
import arrow from '../../assets/arrow.png';

function ChoosePlan() {
  return (
    <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full px-4'>
        <h3 className='text-5xl text-center font-bold mt-20 mb-10'>
          Choose Plan <br /> That’s Right For You
        </h3>
        <p className='text-center text-lg text-[#A6A6A6]'>
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className='md:flex items-center gap-7 mt-20'>
          {/* Free Card */}
          <div className='bg-white w-full rounded-[20px] p-10 shadow-cardShadow mb-5'>
            <div className='text-center mb-10'>
              <h4 className='text-3xl font-semibold pt-10'>Free</h4>
              <p className='my-5 text-lg text-[#A6A6A6]'>
                Have a go and test your superpowers
              </p>
              <div className='flex justify-center items-start gap-1'>
                <p className='text-lg text-[#A6A6A6]'>$</p>
                <p className='text-[50px] font-semibold'>0</p>
              </div>
            </div>

            <div className='bg-[#F9FAFB] p-5 rounded-lg'>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>1 User</span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>2 Files</span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>
                  Public Share & Comments
                </span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />
                <span className='text-lg font-medium'>Chat Support</span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />
                <span className='text-lg font-medium'>New income apps</span>
              </div>
              <div className='mt-5 text-center'>
                <button className='text-[#B588FF] text-lg font-semibold bg-white px-24 py-5 rounded-[20px] shadow-buttonShadow'>
                  Signup for free
                </button>
              </div>
            </div>
          </div>

          {/* Pro Card */}
          <div className='bg-[#B588FF] w-full rounded-[20px] p-10 shadow-cardShadow mb-5'>
            <div className='text-center mb-10'>
              <h4 className='text-3xl font-semibold pt-10 text-white'>Pro</h4>
              <p className='my-5 text-lg text-white'>
                Complete Acess to all Features
              </p>
              <div className='flex justify-center items-end gap-1'>
                <p className='text-[50px] text-white font-semibold'>334</p>
                <p className='text-lg text-white'>€/mo</p>
              </div>
            </div>

            <div className='bg-[#F9FAFB] p-5 rounded-lg'>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>up to 4 Users</span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>Whole Labour Market</span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>
                  All available countrys
                </span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />
                <span className='text-lg font-medium'>
                  Full acess to Analytics
                </span>
              </div>
              <div className='flex gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />
                <span className='text-lg font-medium'>
                  All upcoming Features
                </span>
              </div>
              <div className='mt-5 text-center'>
                <button className='text-lg text-white font-semibold bg-[#B588FF] px-24 py-5 rounded-[20px] shadow-buttonShadow'>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Business Card */}
          <div className='bg-white w-full rounded-[20px] p-10 shadow-cardShadow'>
            <div className='text-center mb-10'>
              <h4 className='text-3xl font-semibold pt-10'>Business</h4>
              <p className='my-5 text-lg text-[#A6A6A6]'>
                For Bigger Teams with all Features from Pro
              </p>
              <div className='flex justify-center items-start gap-1'>
                <p className='text-lg text-[#A6A6A6]'>$</p>
                <p className='text-[50px] font-semibold'>X</p>
              </div>

              <div className='w-full border border-[#C2C2C2] flex items-center p-2.5'>
                <select className='w-full outline-none'>
                  <option>Number of users</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <div>
                  <img src={arrow} alt='arrow' />
                </div>
              </div>
            </div>

            <div className='bg-[#F9FAFB] p-9 rounded-lg'>
              <div className='flex items-start gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>
                  All the features of pro plan
                </span>
              </div>
              <div className='flex items-start gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>
                  Account success Manager
                </span>
              </div>
              <div className='flex items-start gap-5 mt-[22px]'>
                <img src={tikmark} alt='tikmark' />{' '}
                <span className='text-lg font-medium'>
                  Single Sign-On (SSO)
                </span>
              </div>

              <div className='mt-5 text-center'>
                <button className='text-[#B588FF] text-lg font-semibold bg-white px-10 py-5 rounded-[20px] shadow-buttonShadow'>
                  Signup for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan;
