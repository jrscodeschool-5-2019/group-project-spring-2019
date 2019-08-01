import React from 'react'
import 'bulma/css/bulma.css'
import Card from '../card/Card'
import './card-list-styles.css'

const CardList = ({ users }) => {
  return (
    <div className='container card-list'>
      {users.map(item => {
        return <Card key={item._id} user={item} />
      })}
    </div>
  )
}

export default CardList
