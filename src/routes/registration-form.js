import React, {useReducer, useState, useEffect} from 'react';
import {Link, navigate, redirectTo} from '@reach/router';
import {merge} from 'ramda';
import Logo from '../img/JRS_Coding_School_logo.png';
import 'bulma/css/bulma.css';

const initialState = {
  name: {
    first: '',
    last: '',
  },
  email: '',
  username: '',
  password: '',
};

function reducer(state, {type, payload}) {
  if (type === 'SET_FIRST') {
    return merge(state, {name: {...state.name, first: payload}});
  } else if (type === 'SET_LAST') {
    return merge(state, {name: {...state.name, last: payload}});
  } else if (type === 'SET_EMAIL') {
    return merge(state, {email: payload});
  } else if (type === 'SET_USERNAME') {
    return merge(state, {username: payload});
  } else if (type === 'SET_PASSWORD') {
    return merge(state, {password: payload});
  }
  return state;
}

const Registration = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEnabled, setIsEnabled] = useState(false);

  document.onload = document.title = 'Student/Alumni Registration';

  // this throws an error in the console, but it still works
  useEffect(() => {
    if (props.user.loggedIn) {
      redirectTo(`/profile/${props.user.username}`);
    }
  }, []);

  const runValidation = () => {
    state.name.first.length > 0 &&
    state.email.includes('@') &&
    state.email.includes('.com') &&
    state.email.length > 0 &&
    state.password.length >= 8 &&
    state.username.length > 0
      ? setIsEnabled(true)
      : setIsEnabled(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:8000/registration', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if (!res.error) {
          console.log('successful signup');
          navigate('/student-login');
        } else {
          alert(res.error);
          console.log('username or email already in use');
        }
      })
      .catch(error => {
        console.log('Sign up server error: ');
        console.log(error);
      });
  };

  const addDangerToEmail = () => {
    return state.email.includes('@') && state.email.includes('.com')
      ? ''
      : state.email.length > 0
      ? 'is-danger'
      : '';
  };

  const addDangerToPassword = () => {
    return state.password.length > 0 && state.password.length < 8 ? 'is-danger' : '';
  };

  return (
    <span className='reg-page box' style={{backgroundColor: 'honeydew'}}>
      <div className='has-text-centered'>
        <Link to='/'>
          <img src={Logo} alt='JRS logo' />
        </Link>
      </div>
      <form
        onChange={runValidation}
        onBlur={runValidation}
        onSubmit={handleSubmit}
        className='columns has-text-centered is-half'>
        <div className='column'>
          <h1>Student/Alumni Registration</h1>
          <div className='reg-name-input'>
            <input
              id='first-name-input'
              className='form-input input'
              type='text'
              name='first_name'
              value={state.name.first}
              onChange={e =>
                dispatch({
                  type: 'SET_FIRST',
                  payload: e.target.value,
                })
              }
              placeholder='First Name'
            />
          </div>
          <div className='reg-name-input'>
            <input
              className='form-input input'
              type='text'
              name='last_name'
              value={state.name.last}
              onChange={e =>
                dispatch({
                  type: 'SET_LAST',
                  payload: e.target.value,
                })
              }
              placeholder='Last Name'
            />
          </div>
          <div className='reg-name-input'>
            <input
              id='email-input'
              className={`form-input input ${addDangerToEmail()}`}
              type='text'
              name='email'
              value={state.email}
              onChange={e => {
                dispatch({
                  type: 'SET_EMAIL',
                  payload: e.target.value,
                });
              }}
              placeholder='Email Address'
            />
          </div>
          <div className='reg-name-input'>
            <input
              className='form-input input'
              type='text'
              name='username'
              value={state.username}
              onChange={e =>
                dispatch({
                  type: 'SET_USERNAME',
                  payload: e.target.value,
                })
              }
              placeholder='Username'
            />
          </div>
          <div className='reg-name-input'>
            <input
              id='password-input'
              className={`form-input input ${addDangerToPassword()}`}
              type='password'
              name='password'
              value={state.password}
              onChange={e =>
                dispatch({
                  type: 'SET_PASSWORD',
                  payload: e.target.value,
                })
              }
              placeholder='Password (at least 8 characters)'
            />
          </div>
          <div>
            <button
              disabled={!isEnabled}
              type='submit'
              className='button is-centered is-rounded reg-button'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </span>
  );
};

export default Registration;
