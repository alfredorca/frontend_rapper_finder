import { createContext, useEffect, useState } from "react";

export const LandingContext = createContext({});

const LandingProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const [login, setLogin] = useState(false);
  

  useEffect(() => {
    checkIfClicked();
    displayLogin();
  });

  const checkIfClicked = () => (click ? true : false);

  const displayLogin = () => (login ? true : false);


  return (
    <LandingContext.Provider value={{ setLogin, setClick, displayLogin, click, login }}>
      {children}
    </LandingContext.Provider>
  );
};

export default LandingProvider;
