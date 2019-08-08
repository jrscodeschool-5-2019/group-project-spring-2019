
import React from 'react'
import './card-styles.css'

const Card = ({ user }) => {
  return (
    <div className="box card">
      <img className="avatar" alt={`${user._id} img`} src={user.img} />
      <br />
      <h1>
        <strong>
          {user.name.first} {user.name.last}
        </strong>
      </h1>
      <h3>{user.employer}</h3>
      <br />
      <h3>
        <span className="label">Graduation Year:</span> {user.gradYear}
      </h3>
      <br />
      <h3>
        <span className="label">Current Location:</span>
        {user.location}
      </h3>
    </div>
  );
};

export default Card;
