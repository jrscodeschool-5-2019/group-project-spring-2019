import React from 'react'
import LandingPage from './routes/landingPage'
import Registration from './routes/registration-form'
import Login from './routes/login-page'
import Page from './routes/studentPage'
import { Router } from '@reach/router'

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
