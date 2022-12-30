import { useRef, createContext } from 'react';

export const RefContext = createContext();

function RefrenceProvider(props) {
  const ref = useRef(null);
  return (
    <RefContext.Provider value={[ref]}>{props.children}</RefContext.Provider>
  );
}

export default RefrenceProvider;
