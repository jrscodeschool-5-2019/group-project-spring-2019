import React from 'react'

const Filter = ({ users, setFilteredCards }) => {
  const checkboxClick = () => {
    const employed = document.getElementById('employed')
    const seeking = document.getElementById('seeking')
    const current = document.getElementById('current')
    const alumni = document.getElementById('alumni')
    if (employed.checked) {
      if (current.checked) {
        // disable seeking and alumni
        // may also have to put disable = false for others. try it without and see!
        setFilteredCards(
          users.filter(
            user =>
              user.seekingEmployment === false && user.currentStudent === true
          )
        )
      } else if (alumni.checked) {
        //disable seeking and current
        setFilteredCards(
          users.filter(
            user =>
              user.seekingEmployment === false && user.currentStudent === false
          )
        )
      } else {
        //disable seeking
        setFilteredCards(users.filter(user => user.seekingEmployment === false))
      }
    } else if (seeking.checked) {
      if (current.checked) {
        //disable employed and alumni
        setFilteredCards(
          users.filter(
            user =>
              user.seekingEmployment === true && user.currentStudent === true
          )
        )
      } else if (alumni.checked) {
        //disable employed and current
        setFilteredCards(
          users.filter(
            user =>
              user.seekingEmployment === true && user.currentStudent === false
          )
        )
      } else {
        //disable employed
        setFilteredCards(users.filter(user => user.seekingEmployment === true))
      }
    } else if (current.checked) {
      //disable alumni
      setFilteredCards(users.filter(user => user.currentStudent === true))
    } else if (alumni.checked) {
      //disable current
      setFilteredCards(users.filter(user => user.currentStudent === false))
    } else {
      //nothing disabled
      setFilteredCards(users)
    }
  }

  const dropdownTrigger = e => {
    const triggerClass = e.target.parentNode.parentNode.parentNode
    triggerClass.classList.toggle('is-active')
  }

  return (
    <div className='filterer'>
      <div className='dropdown is-right is-hoverable'>
        <div className='dropdown-trigger'>
          <button
            className='button'
            aria-haspopup='true'
            aria-controls='dropdown-menu3'
            onClick={dropdownTrigger}
          >
            <span>Filter</span>
            <span className='icon is-small'>
              <i className='fas fa-angle-down' aria-hidden='true' />
            </span>
          </button>
        </div>
        <div className='dropdown-menu' id='dropdown-menu' role='menu'>
          <div className='dropdown-content'>
            <div className='dropdown-item'>Employment Status</div>
            <div className='dropdown-item'>
              <label className='checkbox'>
                <input type='checkbox' id='employed' onClick={checkboxClick} />{' '}
                Happily Employed
              </label>
            </div>
            <div className='dropdown-item'>
              <label className='checkbox'>
                <input type='checkbox' id='seeking' onClick={checkboxClick} />{' '}
                Seeking Employment
              </label>
            </div>
            <hr className='dropdown-divider' />
            <div className='dropdown-item'>Graduation Status</div>
            <div className='dropdown-item'>
              <label className='checkbox'>
                <input type='checkbox' id='current' onClick={checkboxClick} />{' '}
                Current Students
              </label>
            </div>
            <div className='dropdown-item'>
              <label className='checkbox'>
                <input type='checkbox' id='alumni' onClick={checkboxClick} />{' '}
                Alumni
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
