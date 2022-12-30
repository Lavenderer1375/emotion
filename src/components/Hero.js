import React from 'react';
import HeroImg from '../assets/5c4fa9ff65f21a26b32d7283_CityMag-the-people-vs-coffee-5-850x510.jpg';
import Logo from '../assets/Logo.png';

const Hero = () => {
  return (
    <div className="flex mb-5">
      <span className="flex">
        <img
          src={Logo}
          alt="logo"
          style={{
            height: '20rem',
            width: '20rem',
            position: 'absolute',
            marginLeft: '30rem',
            marginTop: '1rem',
          }}
        />
      </span>
      <div className="flex items-center justify-center">
        <h2 className="md:text-9xl text-6xl text-orange-400 absolute">
          emotion cafe
        </h2>
        <p className="absolute md:text-3xl text-xl md:mt-52 mt-32 bg-slate-800 p-1 text-orange-500">
          We Develop the Taste of a Lifetime!
        </p>
        <img
          src={HeroImg}
          alt="hero"
          className="bg-cover bg-no-repeat w-screen md:px-10 bg-fixed shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
