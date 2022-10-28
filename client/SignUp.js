// import React from 'react';
// import './stylesheets/SignUp.css';
// import { Link } from 'react';

// //fetch request ---->>>>
// const SignUp = (props) => {
//   const createUserHandler = (e) => {
//     e.preventDefault();
//     const userObj = {};
//     const inputs = document
//       .querySelectorAll('.SignUpForm input')
//       .forEach((el) => {
//         userObj[el.name] = el.value;
//       });

//     const langType = document.querySelector('.proglangDropDown').value;
//     userObj.proglang = langType;
//     userObj.matches = {};
//     userObj.matches[userObj.username] = 'no';

//     fetch('/api', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userObj),
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         console.log(data);
//         props.setToggleSignUp(false);
//       });
//   };

//   return (
//     <div className='SignUpDiv'>
//       <div className='SignUp'>
//         <button onClick={() => props.setToggleSignUp(false)}>
//           Back to Login
//         </button>
//         <form className='SignUpForm' onSubmit={createUserHandler}>
//           <label>Username:</label>
//           <input name='username' type='text' placeholder='Username'></input>

//           <label>Password:</label>
//           <input name='password' type='password' placeholder='Password'></input>

//           <label>Name:</label>
//           <input name='name' type='text' placeholder='Name'></input>

//           <label>Age:</label>
//           <input name='age' type='number' placeholder='Age' min='1'></input>

//           <label>State:</label>
//           <input name='location' type='text' placeholder='State'></input>

//           <label>Photo url:</label>
//           <input name='url' type='text' placeholder='url'></input>

//           <label>Programming Language:</label>
//           <select
//             className='proglangDropDown'
//             name='proglang'
//             type='text'
//             placeholder='Programming Language'
//           >
//             <option value='javascript'>JavaScript</option>
//             <option value='java'>Java</option>
//             <option value='python'>Python</option>
//             <option value='C++'>C++</option>
//             <option value='C#'>C#</option>
//           </select>

//           <label>Bio:</label>
//           <input name='comment' type='text' placeholder='bio'></input>
//         </form>
//         <button onClick={createUserHandler}>Create Profile</button>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useEffect, useState, useContext } from 'react';
import './stylesheets/SignUp.css';
import { Link } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { STATES } from 'mongoose';
import { UserContext } from './UserContext';

// fetch request ---->>>>

const SignUp = () => {
  //declared on app
  //const [userId, setUserId] = useState(null);
  //changed name from createUserHandler to "signUpHandler"

  const { userId, setUserId } = useContext(UserContext);

  let id;
  const navigate = useNavigate();
  const sendUser = async (user, pass) => {
    // console.log(user, pass)
    const userData = { username: user, password: pass };
    const response = await axios.post('/api/', userData);
    // all the data associated with that username
    const data = response.data;
    id = data;
    // create route to create profile page
    //console.log(typeof data)
    //console.log('state', userId)
  };
  // navigate('/CreateProfile')
  return (
    <div className="SignUpDiv">
      <div className="SignUp">
        <button onClick={() => props.setToggleSignUp(false)}>
          Back to Login
        </button>
        <form className="SignUpForm">
          {/* <form className="SignUpForm" onSubmit={signUpHandler}> */}
          <label>Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          ></input>

          <label>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          ></input>
        </form>
        <button
          onClick={() => {
            const user = document.getElementById('username');
            const pass = document.getElementById('password');
            setUserId(sendUser(user.value, pass.value));
          }}
        >
          Sign Up
        </button>
        {console.log('143', userId)}
        {userId !== null && <Navigate to="/createProfile" userId={userId} />}
      </div>
    </div>
  );
};

export default SignUp;

// Old button router
// {/* linking submit button back to login page */}
// {/* this breaks for some reason when we uncomment the link component :( */}
// {/* <Link to='/'> */}
// <button
//   onClick={() => props.setToggleSignUp(false)}
//   className='submitPost'
// >
//   Signup
// </button>
// {/* </Link> */}
