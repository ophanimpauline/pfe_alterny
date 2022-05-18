import React, {useState} from "react";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {CgSmileSad } from "react-icons/cg"

function Profile() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [profile, setProfile ] = useState({
    phone1: "",
    phone2: "",
    birth_date: "",
    zipcode: "",
    street: "",
    city: "",
  });
  return (
    <>
      {auth.uuid === "" ? (
        <>
          <div className="cart-empty">
            <p>Vous n'avez pas encore de compte! </p>
            <div className="start-shopping">
              <Link to="/signup">
                <CgSmileSad style={{ width: "20", height: "20" }} />
                <span>Inscrivez vous et parcourez notre variété de produits!</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="wrapper">
            <div className="flex-box-1">
              <h1>Vos informations: </h1>
              {/*a modification icon would be here, if you click on it it redirects you to the modification view */}
              <span style={{ cursor: "pointer" }}>
                Editer vos informations <FiEdit />
              </span>
              <div className="email">
                <span>Email:</span>
                <br />
                <span>your email mel base</span>
              </div>
              <div className="tel">
                <span>Numéro de téléphone 1:</span>
                <br />
                <span>your tel mel base</span>
              </div>
              <div className="tel">
                <span>Numéro de téléphone 2:</span>
                <br />
                <span>your tel mel base</span>
              </div>
              <div className="date-de-naissance">
                <span>Date de naissance: </span>
                <br />
                <span>bday</span>
              </div>
              <div className="code-postal">
                <span>Code postale:</span>
                <br />
                <span>code</span>
              </div>
              <div className="rue">
                <span>Rue:</span>
                <br />
                <span>rue</span>
              </div>
              <div className="état">
                <span>Etat:</span>
                <span>rue</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
