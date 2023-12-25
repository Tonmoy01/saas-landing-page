import React, { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

function EmailInput() {
  const [email, setEmail] = useState('');

  return (
    <div className='border-2 border-[#A6A6A6] rounded-full p-2 md:w-10/12 w-full flex items-center'>
      <input
        type='email'
        className='p-2 outline-none w-full'
        placeholder='Enter your email here'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className='bg-purple-500 rounded-full text-white p-2 text-xl'>
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
}

export default EmailInput;
