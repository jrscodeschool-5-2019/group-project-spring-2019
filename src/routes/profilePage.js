import React from 'react';

const Profile = props => {
  return (
    <div>
      This is a placeholder profile page!
      {props.user.loggedIn && <p>{props.user.username}</p>}
    </div>
  );
};

export default Profile;
