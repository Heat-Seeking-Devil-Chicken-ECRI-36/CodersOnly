import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MatchesItem from './components/MatchesItem';
import Navbar from './components/NavBar';
import './stylesheets/Matches.css';
const Matches = (props) => {
  const [userMatches, setUserMatches] = useState([]);

  useEffect(() => {
    //fetch request to the endpoint of matches
    fetch(`/api/${props.userId}/matches`)
      .then((data) => data.json())
      .then((data) => {
        //props.allUser contains all user profiles, el is another users profile
        // const matchesArr = props.allUsers.filter((el) => {
        //   if (
        //     data.matches[el.username] === 'yes' &&
        //     el.matches[props.currUser] === 'yes'
        //   )
        //     return true;
            
        // });

        //returns an array of arrays of objects
        const matchesArr = data;
        console.log(matchesArr);
        const matchesItemsArr = matchesArr.map((el) => {
          console.log(el);
          //displays on matches page all the matches that also said yes to you
          //however there are repeating users and the information of the matched user isnt loading
          return <MatchesItem key={el._id} user={el[0]} />;
        });

        setUserMatches(matchesItemsArr);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className='MyMatches'>My Matches</h1>
      <div className='MainMatchesContainer'>{userMatches}</div>
    </div>
  );
};

export default Matches;
