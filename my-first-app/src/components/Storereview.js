import React, { useEffect, useState } from "react";
import Rate from "./Rate";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendStoreReview } from "../features/ReviewSlice";
import jwtDecode from "jwt-decode";

const ProductReview = () => {
  
  let { id } = useParams();
  //const current = new Date();
  
  const dispatch = useDispatch();
  const REVIEW = useSelector((state) => state.review);

  const accessToken = localStorage.getItem("access") ? localStorage.getItem("access") : null;
  const user_id = accessToken ? jwtDecode(accessToken).user_id : null;
  
  const handleSendReview = (review) => {
    dispatch(sendStoreReview(review));
  };

  const [rating, setRating] = useState(0);
  //an issue with setting the rate, i made it static so i can test the apis 
  const [review, setReview] = useState({
    user: user_id ? user_id : null,
    id: id,
    note: 3,
    description: "",
  });


  const [isSubmit, setIsSubmit] = useState(false);

   const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendStoreReview(review));
        setIsSubmit(true);
        };



  return (
    <>
      <div
        className="review-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "800px",
          paddingTop: "50px",
          paddingBottom: "20px",
        }}
      >
        <form onSubmit={handleSubmit}
          style={{ width: "700px", height: "500px", paddingBottom: "50px" }}
        >
          <div className="rating-container" style={{}}>
            <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          </div>
          <span>{rating}</span>
          <div className="product-review-input-container">
            <textarea
              className="product-review-input"
              type="text"
              name="review"
              placeholder="Vous avez acheté de cette boutique? Donnez nous votre avis !"
              required
              style={{ height: "200px", width: "600px" }}
              onChange={(e) => {
                setReview({ ...review, description: e.target.value });
              }}
            />
          </div>
          <button>ENVOYER</button>
        </form>    
      </div>
    </>
  );
};

export default ProductReview;
