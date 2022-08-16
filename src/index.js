import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
