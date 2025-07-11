import React from 'react';
import ProfileComponent from '../../../components/User/Profile';

const Profile = ({ user, setUser }) => {
  return (
    <ProfileComponent user={user} setUser={setUser} />
  );
};

export default Profile;
