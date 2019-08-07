import React, { useEffect, useState } from 'react'
import 'bulma/css/bulma.css'
import CardList from '../components/card-list/CardList'
import SearchDirectory from '../components/search-directory/SearchDirectory'
import SideBar from '../components/sidebar/Sidebar'
import Filter from '../components/filter/Filter'

const Page = props => {
  const [users, setUsers] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/student-view')
      .then(res => res.json())
      .then(data => {
        setUsers(data.data)
        setFilteredCards(data.data)
      })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredUsers = filteredCards.filter(
    user =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) +
      user.name.last.toLowerCase().includes(search.toLowerCase()) +
      user.employmentStatus.toLowerCase().includes(search.toLowerCase())
    // +
    // user.location.city.toLowerCase().includes(search.toLowerCase()) +
    // user.location.state.toLowerCase().includes(search.toLowerCase())
  )

  return (
    // Navigation section and logo
    <div>
      <div className='columns'>
        <SideBar />
        <div className='column is-9'>
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
                  <div className='control' />
                  <Filter users={users} setFilteredCards={setFilteredCards} />
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
