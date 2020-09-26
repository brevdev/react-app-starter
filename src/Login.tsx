import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import agent from "./agent";
import BrevStacks from "./BrevStacks";
import Cotter from "cotter";
import { Config, VerifySuccess, OnBeginHandler } from "cotter/lib/binder";

const checkEmail: OnBeginHandler = async (payload): Promise<string | null> => {
  try {
    if (payload.identifier === undefined) {
      console.error("There was an error during verification");
      return "There was an error during verification";
    }
    //   await agent.User.query(payload.identifier);
  } catch (error) {
    if (error?.response?.status === 404) {
      return "User does not exist";
    } else {
      console.log(error);
      return "There was an error during verification";
    }
  }
  return null;
};
const setupCotter = (onCotterSuccess: (payload: VerifySuccess) => void) => {
  const config: Config = {
    ApiKeyID: process.env.REACT_APP_COTTER_API_KEY,
    Type: "EMAIL",
    ButtonBackgroundColor: "#6ca7b2",
    ButtonTextColor: "#fffcf9",
    ButtonText: "Sign In",
    ErrorColor: "#ff5c6c",
    OnSuccess: onCotterSuccess,
  };

  const cotter = new Cotter(config);
  cotter
    .signInWithWebAuthnOrLink(checkEmail)
    .showEmailForm()
    .then((response: any) => {})
    .catch((err: any) => console.log(err));
};

export const CotterLogin: React.FC = () => {
  const [darkMode] = useState(""); // default light mode
  //   const history = useHistory();

  // const { isAuthenticated, login } = useContext(AuthContext);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     history.replace("/");
  //   }
  // }, [isAuthenticated, history]);

  useEffect(() => {
    const onCotterSuccess = async (verifySuccess: any) => {
      // await agent.Auth.identify(verifySuccess.oauth_token.id_token);
      // login();
    };
    setupCotter(onCotterSuccess);
  }, []);
  // }, [login]);

  return (
    <div className={`App${darkMode} login`}>
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrevStacks />
        <h2>Brev</h2>

        <div id="cotter-form-container" style={{ width: 300, height: 300 }} />
      </header>
    </div>
  );
};

const Login: React.FC = () => {
  return <CotterLogin />;
};

export default Login;
