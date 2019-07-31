import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Logo from "./JRS_Coding_School_logo.png";
import "bulma/css/bulma.css";

class Registration extends Component {
  render() {
    return (
      <span className="reg-page box" style={{ backgroundColor: "honeydew" }}>
        <div className="has-text-centered">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <form className="columns has-text-centered is-half">
          <div className="column">
            <h1>Student Registration</h1>
            <div className="reg-name-input">
              <input
                className="form-input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="reg-name-input">
              <input
                className="form-input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="reg-name-input">
              <input
                className="form-input"
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="reg-name-input">
              <input
                className="form-input"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="reg-name-input">
              <input
                className="form-input"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <button className="button is-centered is-rounded reg-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </span>
    );
  }
}
export default Registration;
