import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgSmileSad } from "react-icons/cg";
import { getProfile } from "../features/profileSlice";
import "../App.css"

function Profile() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile)

  useEffect(() => {
    if (auth.uuid) {
      dispatch(getProfile)
    }
  }, [auth.uuid, dispatch]);
  
  return (
    <>
      {auth.uuid === "" ? (
        <>
          <div className="cart-empty">
            <p>Vous n'avez pas encore de compte! </p>
            <div className="start-shopping">
              <Link to="/signup">
                <CgSmileSad style={{ width: "20", height: "20" }} />
                <span>
                  Inscrivez vous et parcourez notre variété de produits!
                </span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
        
          <div className="profile-wrapper">
            <div className="profile-flex-box">
            <div className="buttons-flex">
              <Link to="/Profile"> 
            <button className="profile-profile">Votre profile</button>
            </Link>
            <Link to="/Profile-panier">
              <button className="profile-cart">Votre panier</button>
              </Link>
              <Link to="/Profile-wishlist">
              <button className="profile-wishlist">Liste de souhaits</button>
              </Link>
              <Link to="/Profile-vendeurs">
              <button className="profile-vendeurs">Vendeurs favoris</button>
              </Link>
              </div>
              <h1 className="title1-profile">Vos informations: </h1>
              {/*a modification icon would be here, if you click on it it redirects you to the modification view */}
              <span className= "title2-profile"style={{ cursor: "pointer" }}>
                Editer vos informations
                <Link to="/editprofile" style={{ textDecoration: "none" }}>
                  <FiEdit />
                </Link>
              </span>
              <div className="profile-email">
                <span>Email:</span>
                <br />
                <span>{auth.email}</span>
              </div>
              <div className="profile-tel">
                <span>Numéro de téléphone 1:</span>
                <br />
                <span>{profile.phone1}</span>
              </div>
              <div className="profile-tel">
                <span>Numéro de téléphone 2:</span>
                <br />
                <span>{profile.phone2}</span>
              </div>
              <div className="profile-bd">
                <span>Date de naissance: </span>
                <br />
                <span>{profile.birth_date}</span>
              </div>
              <div className="profile-code-postal">
                <span>Code postale:</span>
                <br />
                <span>{profile.zipcode}</span>
              </div>
              <div className="profile-rue">
                <span>Rue:</span>
                <br />
                <span>{profile.street}</span>
              </div>
              <div className="profile-état">
                <span>Cité:</span>
                <span>{profile.city}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
