import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Components/Login/Login';
import { useEffect, useContext } from 'react';
import { AuthContest, firebaseContest } from './Store/FirebaseContest';
import Create from './Components/Create/Create';
import ViewPost from './Pages/ViewPost';
import Post from './Store/PostContext';

function App() {
  const { setUser } = useContext(AuthContest)
  const { firebase } = useContext(firebaseContest)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/olx.in.com' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<Create />} />
            <Route path='/view' element={<ViewPost />} />
          </Routes>
        </Router>
      </Post>

    </div>
  );
}

export default App;
