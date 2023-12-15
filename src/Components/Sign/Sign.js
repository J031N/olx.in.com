import React, { useContext, useState } from 'react';
import Email from '../../Assets/email.png'
import Password from '../../Assets/lock.png'
import person from '../../Assets/username.png'
import phone from '../../Assets/phone.png'
import photo from '../../Assets/download.png'
import back from '../../Assets/back.png'
import './Sign.css';
import { useNavigate } from 'react-router-dom';
import { firebaseContest } from '../../Store/FirebaseContest';


function Sign() {
  const navigate = useNavigate()
  const { firebase } = useContext(firebaseContest)

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = (e) => {
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: Phone,
        }).then(() => {
          navigate("/")
        })
      })
    })
  }



  return (
    <div className='container'>
      <div className='c'>
        <form onSubmit={handleClick} action="">

          <div className="header">

            <div className='child'>
              <img className='phot' src={photo} alt="" />



              <div className="inputs">
                <img className='back' src={back} alt="" onClick={()=>{
                  navigate('/')
                }}/>
                <div className="input">
                  <img className='person' src={person} alt="" />
                  <input
                  className='olx'
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    name='username'

                  />

                </div>

                <div className="input" >
                  <img className='email' src={Email} alt="" />
                  <input
                   className='olx'
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    name='email'
                  />
                </div>

                <div className="input" >
                  <img src={phone} alt="" />
                  <input
                   className='olx'
                    type='phone'
                    placeholder='Phone Number'
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    name='phone'
                  />
                </div>

                <div className="input">
                  <img className='email' src={Password} alt="" />
                  <input
                   className='olx'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    name='password'

                  />
                </div>

                <span className='span'></span>
              </div>
              <div className="forgo">Already a member ? <h4 style={{ paddingLeft: '10px', fontSize: '17px' }}
               onClick={()=>{
                navigate('/login')
              }} > Log In</h4></div>


              <div className="submit-btn">
                <button className='submi'>Sign Up</button> 

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
}
export default Sign