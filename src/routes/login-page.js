import React, {useState, useEffect} from 'react';
import {navigate, Link, redirectTo} from '@reach/router';
import Logo from '../img/JRS_Coding_School_logo.png';
import 'bulma/css/bulma.css';

const Login = props => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  // this throws an error in the console, but it still works
  useEffect(() => {
    if (props.user.loggedIn) {
      redirectTo(`/profile/${props.user.username}`);
    }
  }, []);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit');

    fetch('http://localhost:8000/student-login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(state),
    })
      .then(res => {
        console.log('login response: ');
        console.log(res);
        if (res.status === 200) {
          return res;
        } else if (res.status === 401) {
          alert('Incorrect username or password');
        } else {
          throw new Error('login unsuccessful');
        }
      })
      .then(res => res.json())
      .then(res => {
        // update App.js state
        props.updateUser({
          loggedIn: true,
          username: res.username,
        });
      })
      .then(res => navigate('/student-view'))
      .catch(error => {
        console.log('login error: ');
        console.log(error);
      });
  };

  return (
    <span className='reg-page box' style={{backgroundColor: 'honeydew'}}>
      <div className='has-text-centered'>
        <div>
          <Link to='/'>
            <img src={Logo} alt='JRS Logo' />
          </Link>
        </div>
        <form className='columns'>
          <div className='column'>
            <h1>Alumni Login</h1>
            <div className='reg-name-input'>
              <input
                className='form-input input'
                type='text'
                name='username'
                placeholder='Username'
                value={state.username || ''}
                onChange={handleChange}
              />
            </div>
            <div className='reg-name-input'>
              <input
                className='form-input input'
                type='password'
                name='password'
                placeholder='Password'
                value={state.password || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type='submit'
                onClick={handleSubmit}
                className='button is-rounded'>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </span>
  );
};

export default Login;
