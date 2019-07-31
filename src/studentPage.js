import React from 'react'
import Logo from './JRS_Coding_School_logo.png'
import 'bulma/css/bulma.css'

function Page() {
  return (
    // Navagation section and logo

    <div>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="../">
              <img src={Logo} alt="Logo" width="250px" />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">Home</a>
              <a class="navbar-item">something</a>
              <a class="navbar-item">something</a>
              <a class="navbar-item">something</a>
            </div>
          </div>
        </div>
      </nav>

      {/* end of the nav section , search section below */}

      <div class="container">
        <div id="flow">
          <span class="flow-1" />
          <span class="flow-2" />
          <span class="flow-3" />
        </div>
        <div class="section">
          <div class="box">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input
                  class="input has-text-centered"
                  type="search"
                  placeholder="Search Users"
                />
              </div>
              <div class="control">
                <a class="button is-info">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of the search */}

      {/* columns for student cards */}
      <div class="row columns">
        <div class="column is-one-third"> cards go here </div>
        <div class="column is-one-third"> cards go here </div>
        <div class="column is-one-third"> cards go here </div>
      </div>
    </div>
  )
}

export default Page
