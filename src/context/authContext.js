import { createContext, useEffect, useState } from "react";
import helperApi from "../apiHelper/apiHelper";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
    google: "false",
  });
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    checkLoggedIn();
    getAllUsers();
  }, []);

  useEffect(() => {
    revalidateToken();
    isAdmin();
  }, [loggedIn]);

  const getAllUsers = async () => {
    const response = await helperApi.get('/auth');
    setUsers(response.data)
  }

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
    toast.success("Succesfully Logged In");
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
    setAdmin(false);
    setLoggedIn(false);
  };

  const isAdmin = () => {
    // if the token doesn't exist
    if (!loggedIn) {
      setAdmin(false);
      return;
    }
    const token = JSON.parse(localStorage.getItem('jwtrapperfinder'));
    const { user_role } = token;
    return user_role === 'ADMIN' ? setAdmin(true) : setAdmin(false);
  }

  const revalidateToken = async () => {
    if (!loggedIn) return;
    try {
      const response = await helperApi.post('/auth/renew');
      console.log(response.data, 'hello revalidate')
      setUser(response.data?.user);
      localStorage.setItem('jwtrapperfinder', JSON.stringify({user_role: response.data.user.role, token: response.data.token}))
    } catch (error) {
      console.log(error);
    }
  }
    

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
        admin,
        users
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
