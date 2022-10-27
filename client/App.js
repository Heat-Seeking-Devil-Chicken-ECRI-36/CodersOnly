import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import Login from './Login.js';
import SignUp from './SignUp';
import Profile from './Profile';
import Feed from './Feed';
import UpdateProfile from './components/UpdateProfile';
import Matches from './Matches';
import CreateProfile from './CreateProfile.js';
import { UserContext } from './UserContext.js';

//imported stylesheet
import './stylesheets/style.css';


const initialState = {userId: null};

function reducer(state, action) {
  switch(action.type){
    case 'login':
      userId = action.payload
      return {...state.userId, userId}
  }
}



//rendering profile here just for now before we add routers
const App = () => {
  const [currUser, setCurrUser] = useState(4);
  const [allUsers, setAllUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  // const navigate = useNavigate();
  const initialState = {
    userId: null,
  };

  //fetching all the users to display on feed
  //not sure why they are fetching the data here since we haven't even logged in yet?
  useEffect(() => {
    fetch(`/api/${currUser}/friends`)
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  return (
    <Routes>
      <UserContext.Provider value="">
        <Route
          path="/"
          element={<Login currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route
          path="/Feed"
          element={<Feed currUser={currUser} allUsers={allUsers} />}
        />
        <Route path="/Profile" element={<Profile currUser={currUser} />} />
        <Route
          path="/Matches"
          element={<Matches currUser={currUser} allUsers={allUsers} />}
        />
        <Route
          path="/signup"
          element={<SignUp currUser={currUser} initialState={initialState} />}
        />
        <Route path="/CreateProfile" element={<CreateProfile />} />
      </UserContext.Provider>
    </Routes>
  );
};

// <div>
//   <div>
//     {/* <Profile/>
//     <UpdateProfile/> */}
//     <HomePage/>
//   </div>
//   {/* <Login /> */}
// </div>

export default App;

// removed /signup & /login since / is capturing both
// <Route path='/SignUp' element={<SignUp />} />
// <Route path='/Login' element={<Login />} />

// Removed homepage cause we want to feed anyways
// /* <Route path='/HomePage' element={<HomePage />} /> */

// Moving /UpdateProfile functionality to just /Profile
// <Route path='/UpdateProfile' element={<UpdateProfile />} />
