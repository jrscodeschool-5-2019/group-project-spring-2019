import React, { Component, useReducer } from "react";
import { Link, navigate } from "@reach/router";
import { merge } from "ramda";
import Logo from "./JRS_Coding_School_logo.png";
import "bulma/css/bulma.css";

var ID = function() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

console.log(ID());

const initialState = {
  name: {
    first: "",
    last: ""
  },
  contactLinks: {
    gitHub: "",
    linkedIn: "",
    other: ""
  },
  currentStudent: false,
  seekingEmployment: false,
  img: "",
  gradYear: "",
  employmentStatus: "",
  bio: "",
  finalProject: "",
  username: "",
  email: "",
  passwordHash: "",
  __v: 0
};

function reducer(state, { type, payload }) {
  if (type === "SET_FIRST") {
    return merge(state, { name: { first: payload } });
  } else if (type === "SET_LAST") {
    return merge(state, { name: { ...state.name, last: payload } });
  } else if (type === "SET_EMAIL") {
    return merge(state, { email: payload });
  } else if (type === "SET_USERNAME") {
    return merge(state, { username: payload });
  } else if (type === "SET_PASSWORD") {
    return merge(state, { passwordHash: payload });
  }
  return state;
}

export default function Registration(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8000/directory", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(res => {
        navigate("/student-login");
      });
  }

  return (
    <span className="reg-page box" style={{ backgroundColor: "honeydew" }}>
      <div className="has-text-centered">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="columns has-text-centered is-half"
      >
        <div className="column">
          <h1>Student Registration</h1>
          <div className="reg-name-input">
            <input
              className="form-input"
              type="text"
              name="first_name"
              value={state.name.first}
              onChange={e =>
                dispatch({
                  type: "SET_FIRST",
                  payload: e.target.value
                })
              }
              placeholder="First Name"
            />
          </div>
          <div className="reg-name-input">
            <input
              className="form-input"
              type="text"
              name="last_name"
              value={state.name.last}
              onChange={e =>
                dispatch({
                  type: "SET_LAST",
                  payload: e.target.value
                })
              }
              placeholder="Last Name"
            />
          </div>
          <div className="reg-name-input">
            <input
              className="form-input"
              type="text"
              name="email"
              value={state.email}
              onChange={e =>
                dispatch({
                  type: "SET_EMAIL",
                  payload: e.target.value
                })
              }
              placeholder="Email Address"
            />
          </div>
          <div className="reg-name-input">
            <input
              className="form-input"
              type="text"
              name="username"
              value={state.username}
              onChange={e =>
                dispatch({
                  type: "SET_USERNAME",
                  payload: e.target.value
                })
              }
              placeholder="Username"
            />
          </div>
          <div className="reg-name-input">
            <input
              className="form-input"
              type="password"
              name="passwordHash"
              value={state.passwordHash}
              onChange={e =>
                dispatch({
                  type: "SET_PASSWORD",
                  payload: e.target.value
                })
              }
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="button is-centered is-rounded reg-button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </span>
  );
}

// export default Registration;
