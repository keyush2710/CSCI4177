import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const { fName, lName, email } = location.state;

  return (
    <div id="profilePage">
      <h2>Profile Page</h2>
      <p><strong>First Name:</strong> {fName}</p>
      <p><strong>Last Name:</strong> {lName}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;
