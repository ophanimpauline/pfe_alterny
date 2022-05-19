import React from 'react'
import Wishlist from '../components/Wishlist'
import '../App.css'
import { Link } from "react-router-dom";

export default function Profilewishlist() {
  return (
    <>
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

      <Wishlist />
    </>
  )
}
