import React from 'react';
import Logo from '../img/JRS_Coding_School_logo.png';
import {Link} from '@reach/router';
import 'bulma/css/bulma.css';

function LandingPage() {
  document.onload = document.title = 'JRS Student Directory';

  return (
    <span>
      <div className='has-text-centered'>
        <img src={Logo} alt='JRS Logo' />
      </div>
      <span className='columns is-flex is-centered'>
        <div
          className='column is-one-third box has-text-centered is-primary'
          style={{backgroundColor: 'honeydew'}}>
          <div className='land-btn'>
            <Link to='/student-view'>
              <button className='button is-inline-flex is-large is-rounded'>
                View JRS Alum
              </button>
            </Link>
            <h1>For potential employers or future JRS students!</h1>
          </div>
          <div className='land-btn'>
            <Link to='/student-login'>
              <button className='button is-inline-flex is-large is-rounded'>
                JRS Alumni Login
              </button>
            </Link>
            <h1>Registered JRS Students login here!</h1>
          </div>
          <div className='land-btn'>
            <Link to='/registration'>
              <button className='button is-inline-flex is-large is-rounded'>
                Student registration
              </button>
            </Link>
            <h1>JRS Student? Not Registered? Click Here!</h1>
          </div>
        </div>
      </span>
    </span>
  );
}

export default LandingPage;
