import { createContext, useReducer } from "react";
import auth from "./reducers/auth";

import authInitialState from "./initialstates/authInitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = (children: any) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);

  return (
    <GlobalContext.Provider value={{ authState, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
