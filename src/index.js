import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectProvider } from "./context/createProject";
import "./styles/index.css";


ReactDOM.render(
  <React.StrictMode>
    <ProjectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
