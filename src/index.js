import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

import "../src/index.css";
import { LoginProvider } from "./context/DataLogin";
import { DataForum } from "./context/DataForum";
import { DataIssue } from "./context/DataIssue";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataForum>
        <DataIssue>
          {/* <LoginProvider> */}
          <App />
          {/* </LoginProvider> */}
        </DataIssue>
      </DataForum>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
