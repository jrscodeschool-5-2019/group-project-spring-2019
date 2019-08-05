import React, { useEffect, useState } from 'react'
import Logo from './JRS_Coding_School_logo.png'
import 'bulma/css/bulma.css'
import CardList from './components/card-list/CardList'

function NavMenu() {
  const [isActive, setIsActive] = useState('')

  // update `is-active` state for use with dropdown menu on mobile devices
  const hamburgerHelper = e =>
    isActive ? setIsActive('') : setIsActive('is-active')

  return (
    // Navagation section and logo

    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="../">
              <img src={Logo} alt="Logo" width="250px" />
            </a>
            <span
              data-target="navbarMenu"
              role="button"
              className={`navbar-burger burger ${isActive}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={hamburgerHelper}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" className={`navbar-menu  ${isActive}`}>
            <div className="navbar-end">
              <a className="navbar-item is-active" href="../">
                Home
              </a>
              <a className="navbar-item">something</a>
              <a className="navbar-item">something</a>
              <a className="navbar-item">something</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu
