import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './UserProfiles.css';

function UserProfiles() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://express-t4.onrender.com/api/users');
      const data = await response.json();
      setUsers(data)
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Profiles</h2>
      <div id="users">
        {users.map((user) => (
          <Link to={`/user/${user._id}`}>
            <div id="profileLink">
              <img src={user.picture} alt={user.name}/>
              <p id="user_name">{user.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserProfiles;