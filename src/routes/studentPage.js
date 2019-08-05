import React, { useEffect, useState } from 'react'
import 'bulma/css/bulma.css'
import CardList from '../components/card-list/CardList'
import SearchDirectory from '../components/search-directory/SearchDirectory'
import NavMenu from '../components/navMenu'
import SideBar from '../components/sidebar/Sidebar'

function Page() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  // remove this const [ v, setResults] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/directory')
      .then(res => res.json())
      .then(data => setUsers(data.data))
    //.then(user => setUsers())
  }, [])
  const handleChange = e => {
    setSearch(e.target.value)
    console.log(e.target.value)
    console.log(users)
    console.log(filteredUsers)
  }

  const filteredUsers = users.filter(
    user =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) +
      user.name.last.toLowerCase().includes(search.toLowerCase())
  )
  return (
    // Navagation section and logo

    <div>
      <NavMenu />
      <div className='columns'>
        <SideBar />
        <div className='column is-9'>
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
                    <SearchDirectory handleChange={handleChange} />
                  </div>
                  <div className='control'>
                    <a className='button is-info'>Search</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardList users={filteredUsers} />
        </div>
      </div>

      {/* End of the search */}

      {/* columns for student cards */}
    </div>
  )
}

export default Page
