import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "../containers/App";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
      <Router>
        <App />
      </Router>
  );
};
