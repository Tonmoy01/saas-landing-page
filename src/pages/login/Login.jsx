import React, { useState } from 'react';
import Navbar from '../../components/headerSection/navbar/Navbar';
import { Link } from 'react-router-dom';
import FormInput from '../../components/formInput/FormInput';

import apple from '../../assets/apple.png';
import google from '../../assets/google.png';

function Login() {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  return (
    <div className='poppins'>
      <Navbar />

      <div className='w-full md:mt-28 mt-10 md:mb-20 mb-10'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full px-4'>
          <div className='md:flex justify-center items-center'>
            {/* Left Side */}
            <div className='w-6/12'>
              <h2 className='text-4xl mb-8 text-[50px] font-semibold'>
                Sign in to
              </h2>
              <h4 className='text-[35px] font-medium mb-16'>
                your Jobsource Account
              </h4>
              <p className='text-black mb-2'>
                If you don’t have an account, register
              </p>
              <p>
                You can{' '}
                <Link to='/register' className='text-[#4D47C3] font-semibold'>
                  Register here!
                </Link>
              </p>
            </div>

            {/* Right side */}
            <div className='w-4/12'>
              <h2 className='text-3xl font-medium mb-6'>Sign in</h2>

              <form>
                <FormInput
                  type={'email'}
                  placeholder={'Enter email'}
                  value={inputValue.email}
                  onChange={handleInputChange}
                  className='w-full py-5 px-5 bg-inputBgColor rounded-[9px] focus:outline-none mt-[38px] placeholder:text-[15px] placeholder:text-[#A7A3FF] placeholder:font-normal'
                  name='email'
                />
                <FormInput
                  type={'password'}
                  placeholder={'Enter password'}
                  value={inputValue.password}
                  onChange={handleInputChange}
                  className='w-full py-5 px-5 bg-inputBgColor rounded-[9px] focus:outline-none mt-[38px] placeholder:text-[15px] placeholder:text-[#A7A3FF] placeholder:font-normal'
                  name='password'
                />
                <p className='text-end text-[13px] text-[#B0B0B0] mt-4'>
                  <Link to='/'>Forgot Password?</Link>
                </p>
                <button
                  type='submit'
                  className='w-full bg-btnBgColor text-white py-5 rounded-[9px] focus:outline-none focus:ring mt-[46px] shadow-logRegBtnShadow'
                >
                  Login
                </button>
              </form>

              <div className='mt-11'>
                <p className='text-[#B5B5B5] text-center font-medium'>
                  or continue with
                </p>
                <div className='flex justify-center items-center gap-5 mt-11'>
                  <img src={apple} alt='apple' />
                  <img src={google} alt='google' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
