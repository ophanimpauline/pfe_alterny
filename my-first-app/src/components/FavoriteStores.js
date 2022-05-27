import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { removeFromFavStores } from "../features/FavStores/favstoresSlice";

export default function FavoriteStores() {
  const favstores = useSelector((state) => state.favstores);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleRemoveFromFavStores = (favstoresItem) => {
    dispatch(removeFromFavStores(favstoresItem));
  };

  return (
    <div className="favstores-container" style={{ padding: "100px" }}>
      <h2>Vos boutiques favorites!</h2>
      {favstores.favstoresItems.length === 0 ? (
        <div className="favstores-empty">
          <p>Vous n'avez aucune boutique favorite! </p>
          <div className="start-shopping">
            <Link to="/">
              <span>Parcourez notre site et découvrez nos produits!</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="favstores-items">
          {favstores.favstoresItems?.map((favstoresItem) => (
            <div className="favstores-item" key={favstoresItem.id}>
              <div className="favstores-product">
                <div>
                  <h3 onClick={() => navigate(`/boutique/${favstoresItem.user}`)}>{favstoresItem.store_name}</h3>

                  <p style={{ color: "black" }}>{favstoresItem.description}</p>
                  <button
                    onClick={() => handleRemoveFromFavStores(favstoresItem)}
                  >
                    {" "}
                    Supprimer{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
