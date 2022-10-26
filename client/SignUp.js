import React, {useState} from 'react';
import './stylesheets/SignUp.css';
import { Link } from 'react';
import { Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

//fetch request ---->>>>




const SignUp = (props) => {
  //changed name from createUserHandler to "signUpHandler"
  const signUpHandler = (e) => {
    // e.preventDefault();
    // const userObj = {};
    // const inputs = document
    //   .querySelectorAll('.SignUpForm input')
    //   .forEach((el) => {
    //     userObj[el.name] = el.value;
    //   });

    // not sure if we should keep the 2 lines below on signup:
    // userObj.matches = {};
    // userObj.matches[userObj.username] = 'no';

    

    // fetch('/api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userObj),
    // })
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     //state on Login.js
    //     //props.navigate('/CreateProfile');
    //     //we need this to not take us back to login -> it will need to redirect to CreateProfile.
    //     props.setToggleSignUp(false);
    //   });
  };
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const sendUser = async (user, pass) => {
    // console.log(user, pass)
    const userData = { username: user, password: pass };
    const response = await axios.post('/api/', userData);
    // all the data associated with that username
    const data = response.data;
    console.log(data, 'data');
    // create route to main page
    setUserId(data);
    navigate('/CreateProfile')
    // return;
  };
    return (
    <div className="SignUpDiv">
      <div className="SignUp">
        <button onClick={() => props.setToggleSignUp(false)}>
          Back to Login
        </button>
        <form className="SignUpForm">
          {/* <form className="SignUpForm" onSubmit={signUpHandler}> */}
          <label>Username:</label>
          <input id='username' name="username" type="text" placeholder="Username"></input>

          <label>Password:</label>
          <input id='password' name="password" type="password" placeholder="Password"></input>
        </form>
        <button onClick={()=>{
          const user = document.getElementById('username');
          const pass = document.getElementById('password');
          sendUser(user.value, pass.value, props.navigate)
        }}>Sign Up</button>
        {/* {userId ? <Navigate to="/CreateProfile"/> : return ''; } */}
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
