import { useRef, createContext } from 'react';

export const RefContext = createContext();

function RefrenceProvider(props) {
  const refMenu = useRef(null);
  const refFind= useRef(null);
  const refContact = useRef(null);
  const handleClick = (refName) => {
    refName.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <RefContext.Provider value={[refMenu, refFind, refContact,handleClick] }>{props.children}</RefContext.Provider>
  );
}

export default RefrenceProvider;
