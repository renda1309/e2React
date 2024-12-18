import React from "react";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
