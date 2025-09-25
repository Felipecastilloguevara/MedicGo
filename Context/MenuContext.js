import { createContext, useContext, useState } from 'react';

const menuContext = createContext();

export function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);  

  return(
    <menuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </menuContext.Provider>
  );
}
export function useMenu() {
  return useContext(menuContext);
}