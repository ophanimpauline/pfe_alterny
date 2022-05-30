import React from "react";
import { useNavigate } from "react-router-dom";



export default function Infobar() {
  const navigate = useNavigate();

  return (
    <div className="container-infobar">
 
      <span className="link-1">Achetez maintenant payez plus tard</span>
      <span className="link-2" onClick={() => navigate("/vendeur-info")}>| Comment vendre sur notre site</span>
    </div>
  );
}
