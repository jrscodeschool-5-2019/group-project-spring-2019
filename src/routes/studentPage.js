<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import CardList from '../components/card-list/CardList';
import SearchDirectory from '../components/search-directory/SearchDirectory';
import SideBar from '../components/sidebar/Sidebar';
=======
import React, { useEffect, useState } from 'react'
import 'bulma/css/bulma.css'
import CardList from '../components/card-list/CardList'
import SearchDirectory from '../components/search-directory/SearchDirectory'
import SideBar from '../components/sidebar/Sidebar'
>>>>>>> 1205b2adbb14bf0598b969ca33b6ade9035f3784

const Page = props => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/student-view')
      .then(res => res.json())
      .then(data => setUsers(data.data))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredUsers = users.filter(
    user =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) +
      user.name.last.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="columns">
        {/* search bar */}
        <SideBar />
        {/* Search bar section */}
        <div className="column is-9">
          <div className="container">
            <div className="section">
              <div className="box">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <SearchDirectory handleChange={handleChange} />
                  </div>
                  <div className="control">
                    <button className="button is-info">Search</button>
                  </div>
                </div>
                <label className='checkbox'>
                  <input onChange={inputChange} type='checkbox' id='hello' />
                  Remember me
                </label>
              </div>
            </div>
          </div>
          {/* Cards called in here */}
          <CardList users={filteredUsers} />
        </div>
      </div>
    </div>
  )
}

export default Page
