import React, {useState, useEffect} from 'react';
import LandingPage from './landingPage';
import Registration from './registration-form';
import Login from './login-page';
import Page from './studentPage';
import {Router} from '@reach/router';

function App() {
  const [user, setUser] = useState({loggedIn: false, username: ''});

  useEffect(() => getUser(), []);

  const updateUser = userObject => setUser(userObject);

  // getUser is not really working (backend issue I think)
  const getUser = () => {
    fetch('http://localhost:8000/user/', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
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
      <Router>
        <LandingPage path='/' />
        <Registration path='/registration' />
        <Login path='/student-login' updateUser={updateUser} />
        <Page path='/student-view' user={user} updateUser={updateUser} />
      </Router>
    </div>
  );
}

export default App;
