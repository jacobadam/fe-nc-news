import React from 'react';

const UsernameCard = props => {
 const { username, avatar_url, name } = props;
  return (
    <div className="userCard">
      <h1 className="userName">{username}</h1>
      <img src={avatar_url} alt={username} />
      <h3 className="userName"> Name: {name}</h3>
    </div>
  );
}

export default UsernameCard