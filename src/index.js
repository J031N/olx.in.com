import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseContest } from './Store/FirebaseContest';
import App from './App';
import firebase from './firebase/Config'
import Context from './Store/FirebaseContest';
import './index.css'
 ReactDOM.render(

  <firebaseContest.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
   
    </firebaseContest.Provider>
,document.getElementById('root'));