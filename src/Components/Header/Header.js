import React, { useContext } from 'react'
import './Header.css'
import OlxLogo from '../../Assets/OlxLogo'
import Search from '../../Assets/Search'
import Arrow from '../../Assets/Arrow'
import SellButton from '../../Assets/SellButton'
import SellButtonPlus from '../../Assets/SellButtonPlus'
import { AuthContest } from '../../Store/FirebaseContest'
import { firebaseContest } from '../../Store/FirebaseContest'
import { useNavigate } from 'react-router-dom'
function Header() {

  const navigate = useNavigate()
  const { firebase } = useContext(firebaseContest)
  const { user } = useContext(AuthContest)
  return (
    <div className='parentDiv'>
      <div className="childDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='location...' />
          <Arrow></Arrow>

        </div>
        <div className="productSearch">
          <div className="inpu">
            <input type="text" placeholder="Find car,mobile phone and more..." />
          </div>
          <div className="searchButton">
            <Search color='#ffffff'></Search>
          </div>

        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow></Arrow>
        </div>
        <div className="loginpage">
          <span onClick={() => {
            navigate('/signup')
          }}>{user ? `Welcome ${user.displayName}` : "SignUp"}</span>
          <hr />
        </div>
        {user && <span onClick={() => {
          firebase.auth().signOut()
          navigate('/')
        }} className='log'>Logout</span>}

        
        <div onClick={(()=>{
          user ?navigate('/create') : alert('User is not authenticated.')
          
        })} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Header
