import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import AppRoutes from "./components/AppRoutes";
import { StepperProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <StepperProvider>
      <AppRoutes />
    </StepperProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
