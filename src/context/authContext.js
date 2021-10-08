import { createContext, useEffect, useState } from "react";
import helperApi from "../apiHelper/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    google: "false",
  });
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    checkLoggedIn();
  });

  const signUpUser = async (user) => {
    const response = await helperApi.post("/auth/signup", user);
    const { data } = response;
    setUser(data.user);
    localStorage.setItem(
      "jwtrapperfinder",
      JSON.stringify(data.token, data.user)
    );
    setLoggedIn(true);
  };

  const loginUser = async (user) => {
    const response = await helperApi.post("/auth/login", user);
    const { data } = response;
    setUser(data.user);
    localStorage.setItem(
      "jwtrapperfinder",
      JSON.stringify(data.token, data.user)
    );
    setLoggedIn(true);
    if (data.user.role === 'ADMIN') {
      setAdmin(true)
    }
  };

  const checkLoggedIn = () => {
    const token = localStorage.getItem("jwtrapperfinder");
    return token ? setLoggedIn(true) : setLoggedIn(false);
  };

  const logOutUser = () => {
    localStorage.removeItem("jwtrapperfinder");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        loggedIn,
        setLoggedIn,
        logOutUser,
        signUpUser,
        admin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
