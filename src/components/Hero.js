import React from 'react';
import HeroImg from '../assets/5c4fa9ff65f21a26b32d7283_CityMag-the-people-vs-coffee-5-850x510.jpg';
const Hero = () => {
  return (
    <div className="flex">
      <div className='flex items-center justify-center'>
        <h2 className="text-9xl text-orange-600 absolute">
          emotion cafe
        </h2>
        <img
          src={HeroImg}
          alt="hero"
          className="bg-cover bg-no-repeat w-screen px-10 bg-fixed"
        />
      </div>
    </div>
  );
};

export default Hero;
