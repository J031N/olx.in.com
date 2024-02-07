import React, { Fragment, useContext, useState } from 'react';
import './Create.css'
import Header from '../Header/Header';
import { AuthContest, firebaseContest } from '../../Store/FirebaseContest';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [number, setNumber] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const { firebase } = useContext(firebaseContest)
  const { user } = useContext(AuthContest)
  const date = new Date()
  const navigate = useNavigate()
  const handleSubmit = (e) => {

    console.log(description);
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {

        firebase.firestore().collection("products").add({
          name: name,
          category: category,
          price: price,
          number: number,
          description: description,
          url: url,
          userId: user.uid,
          createdAt: date.toDateString()
        })

      }).then(() => {
        navigate("/")
      })
    })
  }
  return (

    <Fragment>
      <Header />
      <div className="parentCreate"  >
       
          <h2>Sell your item now</h2>
          <div className='childInputs' >
            <label style={{ marginLeft: '20px' }} htmlFor="fname">What are you selling?*</label>
            <input required
              type="text"
              id='fname'
              name='name'
              placeholder='Enter your sell product'
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '30rem', height: '30px', padding: '10px', marginLeft: '190px' }} />
          </div>
          <div className='childInputs'>
            <label style={{ marginLeft: '35px' }} htmlFor="fname">Choose a category*</label>
            <input required
              type="text"
              id='fname'
              placeholder='Enter your category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: '30rem', height: '30px', padding: '10px', marginLeft: '190px' }} />
          </div>
          <div className='childInputs'>
            <label style={{ marginLeft: '55px' }} htmlFor="fname">Mobile number*</label>
            <input required
              type="number"
              id='fname'
              placeholder='Mobile number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              style={{ width: '30rem', height: '30px', padding: '10px', marginLeft: '190px' }} />
          </div>
          <div className='childInputs'>
            <label style={{ marginLeft: '130px' }} htmlFor="fname">Price*</label>
            <input required
              type="number"
              id='fname'
              placeholder='Price'
              value={price}
              onChange={(e) => (setPrice(e.target.value))}
              style={{ width: '30rem', height: '30px', padding: '10px', marginLeft: '190px' }} />
          </div>
          <div className="description" style={{ display: 'flex', marginTop: '20px' }}>
            <label style={{ marginLeft: '115px' }} htmlFor="des">Description*</label>
            <br />
            <textarea required
              value={description}
              placeholder='About your product'
              onChange={(e) => setDescription(e.target.value)}
              style={{ padding: '10px', marginLeft: '220px' }} name="" id="" cols="60" rows="2"></textarea>


          </div>
          <div className="uploadPhotos">
            <label style={{ marginLeft: '84px' }} htmlFor="photos">Upload photos*</label>
            <br />
            <img src={image ? URL.createObjectURL(image) : ''} alt="posts" width="100px" height="100px" ></img>
            <br />
            <input type="file" required onChange={(e) => setImage(e.target.files[0])} />

          </div>
          <button onClick={handleSubmit}  style={{ marginTop: '10px', marginLeft: '380px' }}>Upload and Submit</button>


      </div>
    </Fragment>
  );
};

export default Create;
