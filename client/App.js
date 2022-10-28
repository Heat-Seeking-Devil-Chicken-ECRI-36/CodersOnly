import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext, useMemo } from 'react';
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

//rendering profile here just for now before we add routers
const App = () => {
  const [currUser, setCurrUser] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  const value = useMemo(() => ({ userId, setUserId }), [userId, setUserId]);

  // const navigate = useNavigate();
  const initialState = {
    userId: null,
  };

  useEffect(() => {
    fetch('/api/friends')
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  return (
    <UserContext.Provider value={value}>
      <Routes>
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
      </Routes>
    </UserContext.Provider>
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
