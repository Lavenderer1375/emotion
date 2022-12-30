import React from 'react';
import Logo from '../assets/Logo.png';
import { useState } from 'react';
import { RefContext } from './RefContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    RefContext.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("clicked");
  };

  return (
    <nav className="shadow-md w-full top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font[Poppins] text-stone-800 drop-shadow-xl">
          <span>
            <img
              src={Logo}
              alt="logo"
              style={{ height: '4rem', width: '4rem' }}
            />
          </span>
          <h1 className="text-orange-600 ml-3 text-4xl">emotion</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center cursor-pointer md:pb-0 pb-12 absolute md:static md:bg-white bg-stone-900 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          } `}
        >
          <li
            onClick={handleClick}
            className="text-orange-600 hover:text-gray-400 duration-300 md:ml-8 md:text-xl text-lg md:my-0 my-7"
          >
            Our Menu
          </li>
          <li
            onClick={handleClick}
            className="text-orange-600 hover:text-gray-400 duration-300 md:ml-8 md:text-xl text-lg md:my-0 my-7"
          >
            Find Us
          </li>
          <li
            onClick={handleClick}
            className="text-orange-600 hover:text-gray-400 duration-300 md:ml-8 md:text-xl text-lg md:my-0 my-7"
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
