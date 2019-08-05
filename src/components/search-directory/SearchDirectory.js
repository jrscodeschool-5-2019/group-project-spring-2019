import React from 'react'

 const SearchDirectory = ({handleChange}) => {
return (
   
     <input
       className= 'input has-text-centered'
       type ='search'
       placeholder= "Search students"
       onChange={handleChange}
      />
    
  )
}

 export default SearchDirectory


 