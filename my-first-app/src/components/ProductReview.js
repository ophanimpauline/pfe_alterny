import React, { useEffect, useState } from "react";
import Rate from './Rate'
//import {useDispatch} from "react-redux"
//import { sendReview } from "../features/ReviewSlice";
import { useParams } from "react-router-dom";

const ProductReview = () => {
  //const dispatch = useDispatch();
 
  let { id } = useParams();

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState({
        review: "",
    });
  
    const [isSubmit, setIsSubmit] = useState(false);

 

   /* const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        
      };*/
    
   /* useEffect(() => {

      if( isSubmit) {
        console.log(review);
      }
    }, [isSubmit, review])*/

  return (
    <>
    <div className="review-container" style={{display:"flex", justifyContent:"center", alignContent:"center",width:"800px", paddingTop:"50px", paddingBottom:"20px"}}> 
    <form style={{width:"700px", height:"500px", paddingBottom:"50px"}}> 
    <div className="rating-container" style={{}}>
      <Rate rating={rating} onRating={(rate) => setRating(rate)} />
    </div>
    
    <span>{rating}</span>
    <div className="product-review-input-container"> 
    <input className="product-review-input"
    type="text"
    name="review"
    placeholder="Vous avez acheté ce produit? Donnez nous votre avis !"
      required
      style={{height:"200px",width:"600px"}}
    />
    </div>
    <button>ENVOYER</button>
    </form>
    </div>
  </>
  )
}

export default ProductReview 