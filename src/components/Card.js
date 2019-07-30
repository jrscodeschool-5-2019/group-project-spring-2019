import React from 'react'
import 'bulma/css/bulma.css'

//other Acc comes in as an array of objects. Each object has a name and a link

const Card = ({
  photo,
  name,
  year,
  employ,
  github,
  linkedin,
  otherAcc,
  bio,
  finalProj
}) => {
  return (
    <div className='box'>
      <img alt={`${name} img`} src={photo} />
      <h1>{name}</h1>
      <h3>{year}</h3>
      <h3>{employ}</h3>
      <h3>
        <a href={github}>Github</a>, <a href={linkedin}>LinkedIn</a>,{' '}
        {otherAcc.map(arr => {
          return <a href={arr.link}>{arr.name}</a>
        })}
        {/* <div className='icon'>
          <i className='fab fa-github' />
        </div> */}
      </h3>
      <p>{bio}</p>
      <p>Final Project: {finalProj}</p>
    </div>
  )
}

export default Card
