import React from 'react';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';

function HeroSection() {
  return (
    <div>
      <Navbar isHomePage={true} />
      <Hero />
    </div>
  );
}

export default HeroSection;
