import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavMenu from "./NavMenu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavMenu></NavMenu>
    <App />
  </React.StrictMode>
);
