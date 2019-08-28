import React from 'react';

const UsernameCard = props => {
 const { username, avatar_url, name } = props;
  return (
    <div>
      <h1>Username: {username}</h1>
      <img src={avatar_url} alt={username} />
      <h3> Name: {name}</h3>
    </div>
  )
}

export default UsernameCard