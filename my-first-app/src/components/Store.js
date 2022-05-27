import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getStore } from "../features/Store/StoreSlice";
import Storereview from "./Storereview";
import {


  FiHeart

} from "react-icons/fi";
import { addToFavstores} from "../features/FavStores/favstoresSlice"


export default function Store() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const store= useSelector((state) => state.store);
 
  useEffect(() => {
    dispatch(getStore(id));
  }, [id, dispatch]);


  const handleAddToStoreFavs  = (store) => {
    dispatch( addToFavstores(store));
};


  return (
    <>
    {store.storeLoaded ? (
    <div className="store-container">
      <div className="another-store-container">
        <h1 className="store-name">
          {store?.store_name}
        </h1>
        <div className="store-add-to-favs">
          <FiHeart onClick={()=> handleAddToStoreFavs(store)}/>
          </div>
        <div className="store-image-container">
        <img src={store?.StoreImage[0].store_image} alt="image"/>
        </div>
        <div className="store-description-container">
          <div className="store-description">
            {store?.description}
          </div>
        </div>
        <span>{store.brand}</span>
        <Storereview/>
        <div className="store-reviews-container">
                            {store?.reviews? (
                        <div className="second-reviews-container" key={store.reviews.id}>
                        {store.reviews.map((review)=>(
                            <> 
                            <h1>{review.name}</h1>
                            <span>{review.date}</span>
                            <div>{review.description}</div>
                            </>
                              ))}
                        </div>
                            ) : <div>cette boutique n'a pas de reviews ! </div> }
        </div>

      </div>
    </div>
      ) : <span> une erreur est survenue </span> } 
    </>
  );
}
