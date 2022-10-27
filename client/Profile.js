import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import './stylesheets/Profile.css';
import axios from 'axios';




const initialState = {
  name: null,
  // username: null,
  age: null,
  location: null,
  comment: null,
  proglang: null,
  url: null,
}
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
  const id = 131;

  const userDataObj = {};

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProfileData(data);
        console.log('in useEffect',data)
        // for(let value of data[0]){
        //   userDataObj.value = data.value;
        // }
      });
  }, []);

  // fetch(`/api/${id}`)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       setProfileData(data);
  //       console.log('in useEffect',data)
  //       // for(let value of data[0]){
  //       //   userDataObj.value = data.value;
  //       });


  // console.log(userDataObj);
  // console.log('profile data at index [0]', profileData[0]);
  console.log(profileData[0])

  // const data = profileData[0];
  // console.log(Object.assign(data, profileData[0]))
  // const objectkeys = Object.keys(data);
  // console.log(objectkeys)
  //add update logic
  //make fetch request to the endpoint of /:id/deleteProfile

  //add delete logic
  //make fetch request to the endpoint of /:id/editProfile
  //need to change all the paragraph tags to input tags and look for onchange

  // const userName = profileData;
  // console.log(userName);

  // const uName = profileData[0].name;
  // console.log('name', uName)


  const { name, age, location, comment, proglang, url } = profileData;
  // console.log(profileData[0]['name'])

  return (
    <div>
      <Navbar />
      <div className='profilePage'>
        <div className='profileContainer'>
          <div className='username'>
            {/* <h1>{username}</h1> */}
          </div>
          <img className='profileImage' src={"https://images.squarespace-cdn.com/content/v1/5c9a6f50fb18202f00c10756/c2ebb970-7d78-41dc-8ac7-b0c13d1bfc42/THOR.png?format=1000w"} alt='profileImage' />
          <p className='userDetail'>Name: {"Chris"}</p>
          <p className='userDetail'>Age: {"29"}</p>
          <p className='userDetail'>Location: {"Savannah"}</p>
          <p className='userDetail'>Bio: {"Coding is Life"}</p>
          <p className='userDetail'>Programming Language: {"JavaScript"}</p>
          <button className='editProfile'>Edit Profile</button>
          <button className='deleteProfile'>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
