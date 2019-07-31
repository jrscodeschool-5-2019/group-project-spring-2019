import React from "react";
import LandingPage from "./landingPage";
import Registration from "./registration-form";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <div>
      <Router>
        <LandingPage path="/" />
        <Registration path="registration" />
      </Router>
    </div>
  );
}

export default App;
