import React from 'react';
import { useContext } from 'react';
import { RefContext } from './RefContext';

const Menu = () => {
  const [refMenu, refFind, refContact, handleClick] = useContext(RefContext)
    ;
  return (
    <div className="items-center justify-center text-center my-20 px-5">
      <div className="mb-10 text-orange-500">
        <h1

          ref={refMenu}
          className="md:text-6xl text-5xl mb-5 font-bold">
          Here's the menu!
        </h1>
        <h1 className="md:text-3xl">
          just tell us what you like and we will make it for you in no-time.
        </h1>
      </div>
      <div className="md:flex md:justify-around items-start text-xl bg-indigo-300 rounded-3xl p-5 shadow-2xl shadow-orange-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none duration-300">
        <ul className="mb-5">
          <h2 className="font-bold text-2xl md:mb-5">Coffee's:</h2>
          <li>Spresso</li>
          <li>Dopio</li>
          <li>Americano</li>
          <li>Latte</li>
          <li>Machiato</li>
          <li>Caramel Machiato</li>
          <li>Cortado</li>
        </ul>
        <ul className="mb-5">
          <h2 className="font-bold text-2xl md:mb-5">Milkshakes:</h2>
          <li>Chocolate</li>
          <li>Strawberry</li>
          <li>Peanut Butter</li>
          <li>Spresso</li>
          <li>Banana</li>
          <li>Mango</li>
        </ul>
        <ul className="mb-5">
          <h2 className="font-bold text-2xl md:mb-5">Sandwiches:</h2>
          <li>Chicken</li>
          <li>Beef</li>
          <li>Sousage</li>
          <li>Pork</li>
          <li>Vegy</li>
          <li>Avocado</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
