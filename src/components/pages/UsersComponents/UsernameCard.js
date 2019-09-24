import React from 'react';

const UsernameCard = props => {
 const { username, avatar_url, name } = props;
  return (
    <div className="userCard">
      <br/>
      <p className="userName">{username}</p>
      <br/>
      <img src={avatar_url} alt={username} />
      <p className="userName"> Name: {name}</p>
      <br/>
    </div>
  );
}

export default UsernameCard