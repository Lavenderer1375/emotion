import React from 'react';
import { useContext } from 'react';
import { RefContext } from './RefContext';

const Contact = () => {
  const [refMenu, refFind, refContact, handleClick] = useContext(RefContext);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-700 pt-16 pl-20 pr-20 text-white">
      <div className="flex items-center justify-center mb-6">
        <button
          className="border-2 rounded-lg p-2 font-bold hover:cursor-pointer bg-orange-600 hover:-translate-x-1 hover:-translate-y-1 duration-200"
          onClick={() => toTop()}
        >
          Back To Top
        </button>
      </div>
      <div className="flex justify-center mb-10 text-2xl font-bold">
        <p>Thank you for contributing with us.</p>
      </div>
      <div className="flex text-lg font-bold mb-10">
        <ul>
          <li className="text-orange-300 mb-2">
            Adress: Hijab Av, Keshavarz Blv, Vali-e-asr Sq, Tehran, Iran
          </li>
          <li className="text-orange-300  mb-2">Phone: 454-258-4747</li>
          <li className="text-purple-400">Instagram</li>
          <li className="text-blue-400 mt-2">Facebook</li>
        </ul>
      </div>
      <h1
        ref={refContact}
        className="flex md:justify-end justify-center text-orange-600 ml-3 text-4xl font-bold pb-5"
      >
        emotion
      </h1>
      <div className="flex justify-center pb-2">
        <p>Developed by Kianush Abedi ©</p>
      </div>
    </div>
  );
};

export default Contact;
