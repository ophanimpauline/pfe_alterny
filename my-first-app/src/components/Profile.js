import React from "react";

function Profile() {
  return (
    <div className="wrapper">
      <div className="flex-box-1">
        <h1>Vos informations: </h1>
        {/*a modification icon would be here, if you click on it it redirects you to the modification view */}
        <div className="email">
          <span>Email:</span>
          <br/>
          <span>your email mel base</span>
        </div>
        <div className="tel">
          <span>Numéro de téléphone 1:</span>
          <br/>
          <span>your tel mel base</span>
        </div>
        <div className="tel">
          <span>Numéro de téléphone 2:</span>
          <br/>
          <span>your tel mel base</span>
        </div>
        <div className="date-de-naissance">
          <span>Date de naissance: </span>
          <br/>
          <span>bday</span>
        </div>
        <div className="code-postal">
          <span>Code postale:</span>
          <br/>
          <span>code</span>
        </div>
        <div className="rue">
          <span>Rue:</span>
          <br/>
          <span>rue</span>
        </div>
        <div className="état">
          <span>Etat:</span>
          <span>rue</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
