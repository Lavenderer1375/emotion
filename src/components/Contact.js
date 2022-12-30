import React from 'react';

const Contact = () => {
  return (
    <div className="bg-slate-700 pt-20 pl-20 pr-20 text-white">
      <div className="flex justify-center mb-10 text-2xl font-bold">
        <p>Thank you for contributing with us.</p>
      </div>
      <div className="flex text-lg font-bold mb-10">
        <ul>
          <li>Phone: 454-258-4747</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Adress: Hijab Av, Keshavarz Blv, Vali-e-asr Sq, Tehran, Iran</li>
        </ul>
      </div>
      <h1 className="flex justify-end text-orange-600 ml-3 text-4xl font-bold pb-5">emotion</h1>
      <div className="flex justify-center pb-2">
        <p>Developed by Kianush Abedi ©</p>
      </div>
    </div>
  );
};

export default Contact;
