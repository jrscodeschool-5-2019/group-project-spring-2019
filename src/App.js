import React from 'react'
import LandingPage from './landingPage'
import Registration from './registration-form'
import Login from './login-page'
import Page from './studentPage'
import { Router, Link } from '@reach/router'

function App() {
  return (
    <div>
      <Router>
        <LandingPage path='/' />
        <Registration path='registration' />
        <Login path='/student-login' />
        <Page path='/student-view' />
      </Router>
    </div>
  )
}

export default App
