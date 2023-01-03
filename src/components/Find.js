import React from 'react';
import { useContext } from 'react';
import { RefContext } from './RefContext';

const Find = () => {
  const [refMenu, refFind, refContact, handleClick] = useContext(RefContext);
  return (
    <div className="grid grid-flow-row md:grid-cols-2 bg-orange-200 shadow-xl">
      <div
        ref={refFind}
      >
        <iframe
          style={{
            width: '90%',
            height: '400px',
            marginLeft: '1rem',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
          title="map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=35.710978,%2051.396134&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div className="md:flex flex-col md:items-start justify-center md:text-4xl text-xl font-bold md:mr-5 mb-10 text-center md:text-left text-orange-900">
        <h2>This is where we are staying for now!</h2>
        <p className="text-lg mt-2">come and join us for a good coffee.</p>
      </div>
    </div>
  );
};

export default Find;
