import React, { useEffect, useState } from 'react'
import 'bulma/css/bulma.css'
import CardList from './components/card-list/CardList'
import NavMenu from './navMenu'

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
      <NavMenu />

      {/* end of the nav section , search section below */}
      <div className="container">
        <div id="flow">
          <span className="flow-1" />
          <span className="flow-2" />
          <span className="flow-3" />
        </div>
        <div className="section">
          <div className="box">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input has-text-centered"
                  type="search"
                  placeholder="Search Users"
                />
              </div>
              <div className="control">
                <a className="button is-info">Search</a>
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
