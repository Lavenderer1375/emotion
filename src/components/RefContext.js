import { useRef, createContext } from 'react';

export const RefContext = createContext();

function RefrenceProvider(props) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  return (
    <RefContext.Provider value={{ref1, ref2, ref3}}>{props.children}</RefContext.Provider>
  );
}

export default RefrenceProvider;
