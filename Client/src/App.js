import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { PageRoutes } from "./PageRoutes";
import "./index.scss"

const App = () => {
  return (

    <BrowserRouter>
    <CssBaseline>
      <div>
        <PageRoutes />
      </div>
      </CssBaseline>
    </BrowserRouter>

  );
};

export default App;
