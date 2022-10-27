import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import './stylesheets/Profile.css';
import axios from 'axios';





//need to fetch our profile data from the database to fill in our profile
const Profile = (props) => {
  //deconstructed props object
  const [profileData, setProfileData] = useState({
    name: null,
    // username: null,
    age: null,
    location: null,
    comment: null,
    proglang: null,
  });

  // const userProfileData = null;

  // useEffect(() => {
  //   fetch(`/api/${4}`)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       // setProfileData(data);
  //       // console.log('profile', profileData);
  //       userProfileData = data;
  //     });
  // }, []);

  // console.log(userProfileData);
  const id = 4;

  useEffect(() => {
    async () => {
      try{
        const response = await axios.get(`/api/${id}`);
        if(response.status === 200){
          setUserProfile(response.data);
        }
        console.log(response)
      }
      catch(err){
        console.log(err)
      }
    }
  })

  //add update logic
  //make fetch request to the endpoint of /:id/deleteProfile

  //add delete logic
  //make fetch request to the endpoint of /:id/editProfile
  //need to change all the paragraph tags to input tags and look for onchange

  

  const { name, age, location, comment, proglang, url } = profileData;

  return (
    <div>
      <Navbar />
      <div className='profilePage'>
        <div className='profileContainer'>
          <div className='username'>
            {/* <h1>{username}</h1> */}
          </div>
          <img className='profileImage' src={url} alt='profileImage' />
          <p className='userDetail'>Name: {name}</p>
          <p className='userDetail'>Age: {age}</p>
          <p className='userDetail'>Location: {location}</p>
          <p className='userDetail'>Bio: {comment}</p>
          <p className='userDetail'>Programming Language: {proglang}</p>
          <button className='editProfile'>Edit Profile</button>
          <button className='deleteProfile'>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
