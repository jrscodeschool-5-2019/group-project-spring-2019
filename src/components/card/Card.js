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
      <img className='avatar' alt={`${user._id} img`} src={user.img} />
      <br />
      <h1>
        <strong>
          {user.name.first} {user.name.last}
        </strong>
      </h1>
      <h3>{user.employmentStatus}</h3>
      {/* <br />
      <p>{user.bio}</p> */}
      {/* <br /> */}
      {/* <h3>
        <a href={user.contactLinks.gitHub}>Github</a> |
        <a href={user.contactLinks.linkedIn}> LinkedIn </a> |
        <a href={user.contactLinks.other}> Other</a>
      </h3> */}
      <br />
      <h3>
        <span className='label'>Graduation Year:</span> {user.gradYear}
      </h3>
      <br />
      <h3>
        <span className='label'>Current Location:</span>
        {/* {user.location.city}, {user.location.state} */} Location to be added
        here later, gater
      </h3>
      {/* <p>
        <span className='label'>Final Project:</span> {user.finalProject}
      </p> */}
    </div>
  )
}

export default Card
