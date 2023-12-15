import React from 'react';
import { useEffect,useState,useContext } from 'react';
import './View.css';
import { PostContext } from '../../Store/PostContext';
import { firebaseContest } from '../../Store/FirebaseContest';
function View() {
  const [userDetails,setUserDetails]=useState("")
  const {postDetails}=useContext(PostContext)
  const {firebase}=useContext(firebaseContest)
 
  useEffect(()=>{
    const {userId}=postDetails
    firebase.firestore().collection("users").where('id','==',userId).get().then((response)=>{
      response.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  },[postDetails])
  return (
   <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.catagory}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       { userDetails&& <div className="contactDetails">
          <p>userDetails</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
