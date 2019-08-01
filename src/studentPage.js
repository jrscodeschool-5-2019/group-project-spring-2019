import React, { useEffect, useState } from 'react'
import Logo from './JRS_Coding_School_logo.png'
import 'bulma/css/bulma.css'
import CardList from './components/card-list/CardList'

function Page() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/directory')
      .then(res => res.json())
      .then(data => setUsers(data.data))
  }, [])

  return (
    // Navagation section and logo

    <div>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <a href='../'>
              <img src={Logo} alt='Logo' width='250px' />
            </a>
            <span className='navbar-burger burger' data-target='navbarMenu'>
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id='navbarMenu' className='navbar-menu'>
            <div className='navbar-end'>
              <a className='navbar-item is-active'>Home</a>
              <a className='navbar-item'>something</a>
              <a className='navbar-item'>something</a>
              <a className='navbar-item'>something</a>
            </div>
          </div>
        </div>
      </nav>

      {/* end of the nav section , search section below */}

      <div className='container'>
        <div id='flow'>
          <span className='flow-1' />
          <span className='flow-2' />
          <span className='flow-3' />
        </div>
        <div className='section'>
          <div className='box'>
            <div className='field has-addons'>
              <div className='control is-expanded'>
                <input
                  className='input has-text-centered'
                  type='search'
                  placeholder='Search Users'
                />
              </div>
              <div className='control'>
                <a className='button is-info'>Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of the search */}

      {/* columns for student cards */}
      <CardList users={users} />
    </div>
  )
}

export default Page
