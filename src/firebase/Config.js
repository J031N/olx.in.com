import firebase from 'firebase'
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBrGzpr6u7yYH2w_vh5Kt82hsmv2928f3w",
  authDomain: "react-ac289.firebaseapp.com",
  projectId: "react-ac289",
  storageBucket: "react-ac289.appspot.com",
  messagingSenderId: "615131189520",
  appId: "1:615131189520:web:fe3c93ab8e65c716459595",
  measurementId: "G-XTH1KV0GLB"
};

 export default firebase.initializeApp(firebaseConfig)



