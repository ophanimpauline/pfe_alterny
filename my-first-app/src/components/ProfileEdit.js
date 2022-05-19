import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../App.css";
import authSlice from "../features/auth/authSlice";
import { updateProfile } from "../features/profileSlice";

export default function ProfileEdit() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  const [profile, setProfile] = useState({
    user: auth.uuid,
    phone1: "",
    phone2: "",
    birth_date: "",
    zipcode: "",
    street: "",
    city: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(profile));
  };

  return (
    <>
      <form className="profile-edit" onSubmit={handleSubmit} >
        <h1>Modifier vos informations: </h1>

        <label>Téléphone 1: * </label>
        <input
          type="number"
          name="phone1"
          placeholder=""
          onChange={(e) => {
            setProfile({ ...profile, phone1: e.target.value });
          }}
        />

        <label>Téléphone 2: </label>
        <input
          type="number"
          name="phone2"
          placeholder=""
          onChange={(e) => {
            setProfile({ ...profile, phone2: e.target.value });
          }}
        />

        <label>Date de naissance: </label>
        <input
          type="birthdate"
          name="birthdate"
          placeholder=""
          onChange={(e) => {
            setProfile({ ...profile, birthdate: e.target.value });
          }}
        />

        <label>Code postal: *</label>
        <input
          type="text"
          name="zipcode"
          placeholder=""
          onChange={(e) => {
            setProfile({ ...profile, zipcode: e.target.value });
          }}
        />

        <label>Rue: *</label>
        <input
          type="text"
          name="re_password"
          placeholder=""
          onChange={(e) => {
            setProfile({ ...profile, street: e.target.value });
          }}
          required
        />

        <label>Cité: *</label>
        <input
          type="text"
          name="re_password"
          placeholder=""
          onChange={(e) => {
            setProfile({ ...profile, city: e.target.value });
          }}
          required
        />

        <button
          style={{
            backgroundColor: "black",
            padding: "20px 40px",
            marginTop: "10px",
            marginBottom: "30px",
            color: "white",
            border: "none",
          }}
        >
          ENREGISTRER
        </button>
      </form>
    </>
  );
}
