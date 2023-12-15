import React, { useContext } from 'react'
import Heart from '../../Assets/Heart'
import './Posts.css'
import { useEffect, useState } from 'react'
import { firebaseContest } from '../../Store/FirebaseContest'
import { PostContext } from '../../Store/PostContext'
import { useNavigate } from 'react-router-dom'
import { AuthContest } from '../../Store/FirebaseContest'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Posts() {
  const { user } = useContext(AuthContest)
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const { firebase } = useContext(firebaseContest)
  const { setPostDetails } = useContext(PostContext)
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPosts = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPosts);
    })
  }, [])

  return (
    <>
      <div className="parent p-4">
      <div className="heading">
          <span>Quick Menu</span>
         
        </div>
      
        <div className="row" >
        {products.map((product) => {

return(

          <div  onClick={() => {
            if (user) {
              setPostDetails(product);
              navigate('/view');
            } else {
              alert("User is not authenticated.");
            }
          }}  className=" child col-md-3">
          
            <div className="card" >
              <div className="favorite">
              <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="body">
                <p className="rate"> {product.price}</p>
                <p className="kilometer">{product.category}</p>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <p>{product.createdAt}</p>
              </div>
            </div>
           
          </div>
          )
        })}
          </div>
          <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
     
     
      </div>
    </>
  )
  
      }

export default Posts
