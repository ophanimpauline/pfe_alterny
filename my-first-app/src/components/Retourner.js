import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRetour } from "../features/retourSlice";


export default function Retourner() {
  const [values, setValues] = useState({
    id: "",
    num_order: "",
    date_order: "",
    slug_produit_retour: "",
    cause: "",
  });
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRetour(values));
  };


  return (
    <>
      <div className="retourner-container">
        <div className="retourner-flex" style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <h2 className="retourner-h2"> Vous voulez retourner un produit ?</h2>
          <h3 className="retourner-h3">
            Envoyez nous les données requises ci dessous et on s'occupera du
            reste !
          </h3>
          <form className="retourner-form" style={{display:"flex", flexDirection:"column", alignContent:"center"}} onSubmit={handleSubmit}>
      
        <input
          type="number"
          placeholder="Le numéro d'ordre"
          onChange={(e) => setValues({ ...values, num_order: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="La date d'achat"
          onChange={(e) => setValues({ ...values, date_order: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Identifiant du produit"
          onChange={(e) => setValues({ ...values, slug_produit_retour: e.target.value })}
          required
        />
        <textarea
          type="text"
          placeholder="Donnez nous la cause ! "
          onChange={(e) => setValues({ ...values, cause: e.target.value })}
          required
        />
        <button>ENVOYER</button>
          </form>
        </div>
      </div>
    </>
  );
}
