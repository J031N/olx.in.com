import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Email from '../../Assets/email.png'
import Password from '../../Assets/lock.png'
import photo from '../../Assets/download.png'
import back from '../../Assets/back.png'

import './Login.css';
import { firebaseContest } from '../../Store/FirebaseContest';


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { firebase } = useContext(firebaseContest)
  const submit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert('Logged In')

    }).catch(() => {
      alert("Please enter your correct password ")

    }).then(() => {
      navigate('/')
    })
  }


  return (
    <div className='container'>
      <div className='child'>
        <form onSubmit={submit} action="">
          <div className="header">


            <img className='photos' src={photo} alt="" />


            <div className="inputs">
              <img className='back' src={back} alt="" onClick={() => {
                navigate('/signup')
              }} />

              <div className="input" >
                <img className='email' src={Email} alt="" />
                <input type="email"
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <img className='email' src={Password} alt="" />
                <input type="password"
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="forgot">forgot password ? <h4 onClick={() => {
              navigate('/signup')
            }}>Click here!</h4></div>


            <div className="submit-btn">

              <button className="submi">Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
