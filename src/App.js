import React, {useState, useEffect} from 'react';
import LandingPage from './landingPage';
import Registration from './registration-form';
import Login from './login-page';
import Page from './studentPage';
import {Router} from '@reach/router';

function App() {
  const [user, setUser] = useState({loggedIn: false, username: '', name: ''});

  // useEffect(() => getUser(),[])

  const updateUser = userObject => {
    setUser(userObject);
    console.log('userObject from App.js');
    console.log(userObject);
  };

  // const getUser = () => {
  //   axios.get('/').then(response => {
  //     console.log('Get user response: ');
  //     console.log(response.data);
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ');

  //       setUser({
  //         loggedIn: true,
  //         studentId: response.data.user._id,
  //         username: response.data.user.username,
  //       });
  //     } else {
  //       console.log('Get user: no user');
  //       setUser({
  //         loggedIn: false,
  //         studentId: '',
  //         username: '',
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      <Router>
        <LandingPage path='/' />
        <Registration path='registration' />
        <Login path='/student-login' updateUser={updateUser} />
        <Page path='/directory' />
      </Router>
    </div>
  );
}

export default App;
