import React, { Component } from 'react'
import { Link } from '@reach/router'
import Logo from '../img/JRS_Coding_School_logo.png'
import 'bulma/css/bulma.css'

class Login extends Component {
  render() {
    return (
      <span className='reg-page box' style={{ backgroundColor: 'honeydew' }}>
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
                  className='form-input'
                  type='text'
                  placeholder='Username'
                />
              </div>
              <div className='reg-name-input'>
                <input
                  className='form-input'
                  type='text'
                  placeholder='Password'
                />
              </div>
              <div>
                <button className='button is-rounded'>Login</button>
              </div>
            </div>
          </form>
        </div>
      </span>
    )
  }
}

export default Login
