import React from 'react';
import '../stylesheets/FeedItem.css';

const FeedItem = (props) => {
  //the way each user profile will look in the feed
  console.log('feed item', props.allUsers)
  if (!props.user) {
    return <p>No more users in your area</p>;
  }
  const { user_id, name, age, location, comment, proglang, url } = props.user;
  return (
    <div className='feedContainer'>
      <div className='username'>
        <h3 id='userName'>{user_id}</h3>
      </div>
      <img className='feedImage' src={url} alt='profileImage' />
      <p className='userDetail'>Name: {name}</p>
      <p className='userDetail'>Age: {age}</p>
      <p className='userDetail'>Location: {location}</p>
      <p className='userDetail'>Bio: {comment}</p>
      <p className='userDetail'>Programming Language: {proglang}</p>
    </div>
  );
};

export default FeedItem;
