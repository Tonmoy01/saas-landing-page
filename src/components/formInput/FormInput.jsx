import React, { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

function FormInput({ type, placeholder, value, onChange, className, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className='relative'>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className} ${type === 'password' ? 'pr-10' : ''}`}
        name={name}
      />
      {type === 'password' && (
        <div
          className='absolute top-2/3 transform -translate-y-1/2 right-2 cursor-pointer'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
        </div>
      )}
    </div>
  );
}

export default FormInput;
