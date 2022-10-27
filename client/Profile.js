import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import './stylesheets/Profile.css';
import axios from 'axios';

//need to fetch our profile data from the database to fill in our profile
const Profile = (props) => {
  //deconstructed props object
  const [profileData, setProfileData] = useState({
    username: null,
    age: null,
    location: null,
    comment: null,
    proglang: null,
  });

  useEffect(() => {
    fetch(`/api/${118}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProfileData(data);
        console.log('profile', profileData);
      });
  }, []);

  useEffect(() => {
    async () => {
      const response = await axios.get('/api/118');
      console.log(response)
    }
  })

  

  const { username, age, location, comment, proglang, url } = profileData;

  return (
    <div>
      <Navbar />
      <div className='profilePage'>
        <div className='profileContainer'>
          <div className='username'>
            <h1>{username}</h1>
          </div>
          <img className='profileImage' src={url} alt='profileImage' />
          <p className='userDetail'>Age: {age}</p>
          <p className='userDetail'>Location: {location}</p>
          <p className='userDetail'>Bio: {comment}</p>
          <p className='userDetail'>Programming Language: {proglang}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
