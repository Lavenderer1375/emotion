import React from 'react';
import Pic1 from '../assets/5c4faa2f857698abddd42a6a_CityMag-the-people-vs-coffee-3-850x510.jpg';
import Pic2 from '../assets/5c4faa3c2387eca5a9c65725_CityMag-the-people-vs-coffee-13-850x510.jpg';
const Lorem = () => {
  return (
    <div className="flex-col my-10 text-center items-center justify-center">
      <h2 className="md:text-4xl text-3xl mb-5">Welcom to emotion cafe!</h2>
      <p className="text-sm md:mx-44 mx-10">
        A pop-up espresso cafe offering an amazing coffee experience and
        friendly baristas in the slickest locations around the Barossa,
        Adelaide, and surrounding locations. We are available for weddings,
        private and corporate events, sporting gatherings, festivals, and local
        markets.
      </p>
      <div className="md:flex flex-row items-center justify-evenly my-5">
        <img
          src={Pic1}
          className="md:w-96 w-screen h-60 md:mr-5 md:ml-0 mb-10 md:mb-0 md:rounded-3xl shadow-2xl shadow-slate-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none duration-200"
          alt="cafe1"
        />
        <img
          src={Pic2}
          className="md:w-96 w-screen h-60 md:mr-5 md:ml-0 md:rounded-3xl shadow-2xl shadow-slate-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none duration-200"
          alt="cafe2"
        />
      </div>
    </div>
  );
};

export default Lorem;
