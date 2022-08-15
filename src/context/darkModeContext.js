import { createContext, useReducer, useEffect } from "react";
import DarModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarModeReducer, INITIAL_STATE);

  // useEffect(() => {
  //   if(JSON.parse(localStorage.getItem("DARK_MODE"))) {
  //     dispatch({
  //       type:"DARK"
  //     })
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("DARK_MODE", state.darkMode);
  // }, [state.darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
