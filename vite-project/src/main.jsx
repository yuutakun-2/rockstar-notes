import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import ThemedApp from "./themedApp";

import "./index.css";

import { CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemedApp />
    <CssBaseline />
  </React.StrictMode>
);
