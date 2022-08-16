import { useReducer, useEffect } from "react";
import { createContext } from "react";
import AuthenticationReducer from "./AuthenticationReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthenticationContext = createContext(INITIAL_STATE);

export const AuthenticationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthenticationContext.Provider
      value={{ currentUser: state.currentUser, dispatch }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
