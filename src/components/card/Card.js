import React from 'react'
import 'bulma/css/bulma.css'
import './card-styles.css'

//other Acc comes in as an array of objects. Each object has a name and a link
//Need to pass down logged in state from another object,
// then put in some sort of login about if loggedin then (<button>Edit</button>)
// Not adding yet because I don't know how the legged in state lives

const Card = ({ user }) => {
  return (
    <div className='box card'>
      <img alt={`${user.name} img`} src={user.photo} />
      <h1>{user.name}</h1>
      <h3>{user.year}</h3>
      <h3>{user.employ}</h3>
      <h3>
        <a href={user.github}>Github</a>, <a href={user.linkedin}>LinkedIn</a>
        {user.otherAcc.map(arr => {
          return <a href={arr.link}>, {arr.name}</a>
        })}
        {/* <div className='icon'>
          <i className='fab fa-github' />
        </div> */}
      </h3>
      <p>{user.bio}</p>
      <p>Final Project: {user.finalProj}</p>
    </div>
  )
}

export default Card
