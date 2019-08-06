import React, { useEffect, useState } from 'react'
import 'bulma/css/bulma.css'
import CardList from '../components/card-list/CardList'
import SearchDirectory from '../components/search-directory/SearchDirectory'
import NavMenu from '../components/navMenu'
import SideBar from '../components/sidebar/Sidebar'

function Page() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/directory')
      .then(res => res.json())
      .then(data => setUsers(data.data))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredUsers = users.filter(
    user =>
      user.name.first.toLowerCase().includes(search.toLowerCase()) +
      user.name.last.toLowerCase().includes(search.toLowerCase()) +
      user.employmentStatus.toLowerCase().includes(search.toLowerCase())
    // +
    // user.location.city.toLowerCase().includes(search.toLowerCase()) +
    // user.location.state.toLowerCase().includes(search.toLowerCase())
  )

  const dropdownTrigger = e => {
    const triggerClass = e.target.parentNode.parentNode.parentNode
    triggerClass.classList.toggle('is-active')
  }

  const checkboxClick = e => {
    console.log(e.target.id)
  }

  return (
    // Navigation section and logo
    <div>
      <NavMenu />
      <div className='columns'>
        <SideBar />I changed a branch of a branch!
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
                    <div className='filterer'>
                      <div className='dropdown is-right'>
                        <div className='dropdown-trigger'>
                          <button
                            className='button'
                            aria-haspopup='true'
                            aria-controls='dropdown-menu3'
                            onClick={dropdownTrigger}
                          >
                            <span>Filter</span>
                            <span className='icon is-small'>
                              <i
                                className='fas fa-angle-down'
                                aria-hidden='true'
                              />
                            </span>
                          </button>
                        </div>
                        <div
                          className='dropdown-menu'
                          id='dropdown-menu'
                          role='menu'
                        >
                          <div className='dropdown-content'>
                            <div className='dropdown-item'>
                              Employment Status
                            </div>
                            <div className='dropdown-item'>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  id='seekingEmploymentFalse'
                                  onClick={checkboxClick}
                                />{' '}
                                Happily Employed
                              </label>
                            </div>
                            <div className='dropdown-item'>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  id='seekingEmploymentTrue'
                                  onClick={checkboxClick}
                                />{' '}
                                Seeking Employment
                              </label>
                            </div>
                            <hr className='dropdown-divider' />
                            <div className='dropdown-item'>
                              Graduation Status
                            </div>
                            <div className='dropdown-item'>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  id='currentStudent'
                                  onClick={checkboxClick}
                                  tof='true'
                                />{' '}
                                Current Students
                              </label>
                            </div>
                            <div className='dropdown-item'>
                              <label className='checkbox'>
                                <input
                                  type='checkbox'
                                  id='currentStudent'
                                  onClick={checkboxClick}
                                  tof='false'
                                />{' '}
                                Alumni
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
