import React, { createContext, useContext, useState } from "react";
import data from "../data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <AppContext.Provider value={{ birthdays, setBirthdays }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
