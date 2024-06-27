import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './UserDetails.css';

function UserDetails() {
  const {id} = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [id]);

  if (!user) {
    return null;
  }

  return (
    <div id="details">
      <h2>{user.name}</h2>
      <img src={user.picture} alt={user.name} />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Balance:</strong> {user.balance}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Eye Color:</strong> {user.eyeColor}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>About:</strong> {user.about}</p>
      <p><strong>Registered:</strong> {new Date(user.registered).toLocaleString()}</p>
      <p><strong>Location:</strong> {user.latitude}, {user.longitude}</p>
      <p><strong>Tags:</strong> {user.tags.join(', ')}</p>
      <h3>Friends:</h3>
      <ul>
        {user.friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
      <p><strong>Greeting:</strong> {user.greeting}</p>
      <p><strong>Favorite Fruit:</strong> {user.favoriteFruit}</p>
    </div>
  );
}

export default UserDetails;
