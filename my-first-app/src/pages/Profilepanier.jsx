import React from "react";
import "../App.css";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

export default function Profilepanier() {
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

      <Cart />
    </>
  );
}
