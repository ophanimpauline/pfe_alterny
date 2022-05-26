import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getStore } from "../features/Store/StoreSlice";

export default function Store() {

  const dispatch = useDispatch();
  const { sid } = useParams();

  useEffect(() => {
    dispatch(getStore(sid));
  }, [sid, dispatch]);

  console.log(sid)

  return (
    <>
    
    </>
  );
}
