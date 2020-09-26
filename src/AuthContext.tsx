import React, { useEffect, useCallback } from "react";
// import { useAuth } from "./useAuth";
import Cotter from "cotter";
import agent from "./agent";
import { useHistory } from "react-router";

interface AuthContextType {
  isAuthenticated: boolean;
  isError: boolean;
  isLoading: boolean;
  logout: () => void;
  login: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  logout: () => {},
  login: () => {},
});

const cotter = new Cotter(process.env.REACT_APP_COTTER_API_KEY);

const getCotterAccessToken = async () => {
  const token = await cotter.tokenHandler.getAccessToken();
  return token?.token || null;
};

const cotterLogout = () => {
  return cotter.logOut();
};

const AuthContextProvider: React.FC = (props) => {
  //   const auth = useAuth(
  //     cotterLogout,
  //     getCotterAccessToken,
  //     agent.configRequestAuth
  //   );
  const auth = {
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    logout: () => {},
    login: () => {},
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth.isAuthenticated,
        isError: auth.isError,
        isLoading: auth.isLoading,
        logout: auth.logout,
        login: auth.login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
