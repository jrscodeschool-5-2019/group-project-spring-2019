import React from 'react'

const SearchDirectory = ({ handleChange }) => {
  return (
    <input
      className='input has-text-centered'
      type='search'
      placeholder='Search students by name, company, or location'
      onChange={handleChange}
    />
  )
}

export default SearchDirectory
