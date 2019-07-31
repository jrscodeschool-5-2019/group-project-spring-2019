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
      <img alt={`${user._id} img`} src={user.img} />
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <h3>{user.gradYear}</h3>
      <h3>{user.employmentStatus}</h3>
      <h3>
        {/* {user.contactLinks.map(obj => {
          return <a href={obj.link}>{obj.name} </a>
        })} */}
        {/* <div className='icon'>
          <i className='fab fa-github' />
        </div> */}
      </h3>
      <p>{user.bio}</p>
      <p>Final Project: {user.finalProject}</p>
    </div>
  )
}

export default Card
