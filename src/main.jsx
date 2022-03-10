import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import AppRoutes from "./components/AppRoutes";
import { SplitwiseProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <SplitwiseProvider>
      <AppRoutes />
    </SplitwiseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
