import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import LandingPage from "./routes/landingPage";
import Registration from "./routes/registration-form";
import Login from "./routes/login-page";
import Page from "./routes/studentPage";
import Profile from "./routes/profilePage";
import NavMenu from "./components/navMenu";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || {
      loggedIn: false,
      username: ""
    }
  );

  useEffect(() => getUser(), []);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }, [user]);
  console.log(user);

  const updateUser = userObject => setUser(userObject);

  // I don't think we need this, but I'm afraid to delete it. So here it will remain.
  const getUser = () => {
    fetch("http://localhost:8000/user/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(res => console.log(res));
    // .then(res => {
    //   if (res.user) {
    //     console.log('Get User: There is a user saved in the server session: ');
    //     setUser({
    //       loggedIn: true,
    //       username: res.user.username,
    //       name: res.user.name,
    //     });
    //   } else {
    //     console.log('Get user: no user');
    //     setUser({
    //       loggedIn: false,
    //       username: '',
    //       name: '',
    //     });
    //   }
    // });
  };

  return (
    <div>
      <NavMenu user={user} updateUser={updateUser} />

      <Router>
        <LandingPage path="/" />
        <Registration path="/registration" user={user} />
        <Login path="/student-login" updateUser={updateUser} user={user} />
        <Page path="/student-view" />
        <Profile path="/profile/:username" user={user} />
      </Router>
    </div>
  );
}

export default App;
