import React, {useReducer} from 'react';
import {Link, navigate} from '@reach/router';
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

  document.onload = document.title = 'Student/Alumni Registration';

  const isEnabled =
    state.name.first.length > 0 &&
    state.email.includes('@') &&
    state.email.includes('.com') &&
    state.email.length > 0 &&
    state.password.length > 8 &&
    state.username.length > 0;

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
          console.log('username or email already in use');
        }
      })
      .catch(error => {
        console.log('Sign up server error: ');
        console.log(error);
      });
  };

  function emailValidationColors() {
    if (state.email.includes('@') && state.email.includes('.com')) {
      document.getElementById('email-input').style.outlineColor = 'green';
    } else {
      document.getElementById('email-input').style.className = 'is-danger';
    }
  }

  function passwordValidation() {
    if (state.password.length < 8) {
      document.getElementById('password-input').style.className = 'is-danger';
    } else {
      document.getElementById('password-input').style.borderColor =
        'rgb(238, 238, 238';
    }
  }

  function validationColors() {
    emailValidationColors();
    passwordValidation();
  }

  return (
    <span className='reg-page box' style={{backgroundColor: 'honeydew'}}>
      <div className='has-text-centered'>
        <Link to='/'>
          <img src={Logo} alt='JRS logo' />
        </Link>
      </div>
      <form
        // onChange={validationColors}
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
              className='form-input input'
              type='text'
              name='email'
              value={state.email}
              onChange={e => {
                dispatch({
                  type: 'SET_EMAIL',
                  payload: e.target.value,
                });
              }}
              // onBlur={emailValidationColors()}
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
              className='form-input input'
              type='password'
              name='password'
              value={state.password}
              onBlur={passwordValidation}
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
