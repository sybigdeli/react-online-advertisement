import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import axios from "axios";

const authContext = createContext();

const useAuthContext = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  const [accessToken, setAccessToken] = useState(() =>
    localStorage.getItem("accessToken")
  );

  const isLoggedIn = !!accessToken;

  const saveAccessToken = (token) => {
    localStorage.getItem("accessToken", token);
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const fetchCurrentUser = async () => {
    const result = await axios.get("http://demo2578450.mockable.io/auth/me", {
      headers: {
        Authorization: accessToken,
      },
    });

    setCurrentUser(result.data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchCurrentUser();
    }
  }, [isLoggedIn]);

  const values = {
    logout,
    saveAccessToken,
    CurrentUser,
    isLoggedIn: !!accessToken,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: propTypes.node,
};
export { AuthProvider, useAuthContext };
