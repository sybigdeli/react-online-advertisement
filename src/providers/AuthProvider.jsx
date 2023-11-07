import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import { apiGetCurrentUser } from "@/api/user";

const authContext = createContext();

const useAuthContext = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  const [loadingCurrentUser, setLoadingCurrentUser] = useState(false);
  const [accessToken, setAccessToken] = useState(() =>
    localStorage.getItem("accessToken")
  );

  const isLoggedIn = !!accessToken;

  const saveAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const fetchCurrentUser = async () => {
    if (loadingCurrentUser) return;

    try {
      setLoadingCurrentUser(true);

      const result = await apiGetCurrentUser();
      setCurrentUser(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCurrentUser(false);
    }
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
    loadingCurrentUser,
    isLoggedIn: !!accessToken,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: propTypes.node,
};
export { AuthProvider, useAuthContext };
