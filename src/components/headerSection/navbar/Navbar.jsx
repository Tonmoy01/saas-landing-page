import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import { IoMdMenu } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Navbar({ isHomePage }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full h-[80px] bg-transparent'>
      <div className='basic-container'>
        <Link to='/'>
          <img src={logo} className='h-[25px]' />
        </Link>

        {isHomePage && (
          <>
            <div className='hidden md:flex items-center '>
              <ul className='flex gap-4'>
                <li>Home</li>
                <li className='text-gray-400'>Product</li>
                <li className='text-gray-400'>Features</li>
                <li className='text-gray-400'>Pricing</li>
              </ul>
            </div>

            <div className='hidden md:flex md:gap-2'>
              <button className='flex justify-between items-center  bg-transparent px-6 gap-2 rounded-lg border-solid border-2 border-gray-400 font-bold'>
                <Link to='/login'>Login</Link>
              </button>
              <button className='px-8 py-3 rounded-[10px] bg-btnBgColor text-white font-bold shadow-btnShadow'>
                Free Trial
              </button>
            </div>
          </>
        )}

        <div
          className='md:hidden cursor-pointer text-2xl'
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <IoIosClose /> : <IoMdMenu />}
        </div>
      </div>

      <div
        className={
          toggle
            ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b'
            : 'hidden'
        }
      >
        <ul>
          <li className='p-4 hover:bg-gray-100'>Home</li>
          <li className='p-4 hover:bg-gray-100'>Product</li>
          <li className='p-4 hover:bg-gray-100'>Features</li>
          <li className='p-4 hover:bg-gray-100'>Pricing</li>
          <div className='flex flex-col my-4 gap-4'>
            <button className='border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4 rounded-md'>
              Login
            </button>
            <button className='px-8 py-5 rounded-md bg-[#B588FF] text-white font-bold'>
              Free Trial
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
