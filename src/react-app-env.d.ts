/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    //   NODE_ENV: "development" | "production" | "test" | "staging";
    NODE_ENV: "development";
    REACT_APP_API_DOMAIN: string;
    REACT_APP_COTTER_API_KEY: string;
  }
}
/// <reference types="react-scripts" />
