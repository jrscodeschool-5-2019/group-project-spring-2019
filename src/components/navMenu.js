import React, {useState} from 'react';
import Logo from '../img/JRS_Coding_School_logo.png';
import 'bulma/css/bulma.css';
import {Link} from '@reach/router';

function NavMenu(props) {
  const [isActive, setIsActive] = useState('');

  // update `is-active` state for use with dropdown menu on mobile devices
  const hamburgerHelper = e =>
    isActive ? setIsActive('') : setIsActive('is-active');

  // const LoggedInMessage = () => {
  //   if ((props.user.LoggedIn = true)) {
  //     return <div>Hello, {props.user.username}!</div>;
  //   } else if ((props.user.LoggedIn = false)) {
  //     return <div />;
  //   }
  // };

  const logout = event => {
    event.preventDefault();

    console.log('logging out');
    fetch('http://localhost:8000/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          props.updateUser({
            loggedIn: false,
            username: '',
          });
        }
      })
      .catch(error => {
        console.log('Logout error');
      });
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <a href='../'>
              <img src={Logo} alt='Logo' width='250px' />
            </a>
            <span
              data-target='navbarMenu'
              role='button'
              className={`navbar-burger burger ${isActive}`}
              aria-label='menu'
              aria-expanded='false'
              onClick={hamburgerHelper}>
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id='navbarMenu' className={`navbar-menu  ${isActive}`}>
            <div className='navbar-end'>
              <Link to='/' user={props.user} className='navbar-item is-active'>
                Home
              </Link>
              {!props.user.loggedIn && (
                <Link to='/student-login' className='navbar-item'>
                  Login
                </Link>
              )}
              {props.user.loggedIn && (
                <Link to='/student-view' className='navbar-item' onClick={logout}>
                  Logout
                </Link>
              )}
              {!props.user.loggedIn && (
                <Link to='/registration' className='navbar-item'>
                  Register
                </Link>
              )}
              <Link to='/student-view' user={props.user} className='navbar-item'>
                View Students
              </Link>
              {props.user.loggedIn && (
                <Link
                  to={`/profile/${props.user.username}`}
                  user={props.user}
                  className='navbar-item'>
                  Profile
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavMenu;
