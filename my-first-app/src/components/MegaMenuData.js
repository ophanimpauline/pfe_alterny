import React from 'react'
import axios from 'axios';
// DB url for catégories
const collection = '';
// DB url for subcatégories
const subcollection = '';
// query to get the categories
const getCategories = async () => {
  try {
    const response = await axios.get(collection, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(response.data);
  } catch (errors) {
    if (response.data) {
      const Response = response.data;
     const Collections  = {
     c1: (Response().vêtementsfemme),
     c2:(Response().chaussuresfemme),
     c3:(Response().accessoiresfemme),
     c4:(Response().vêtementshomme),
     c5: (Response().chaussureshomme),
     c6: (Response().accessoireshomme),
     c7: (Response().filles),
     c8: (Response().filles),

 }

    } else if (errors) {
      var Collections = ["Vêtements femme", "Chaussures femme", "Accessoires femme", "Vêtementshomme" , "Chaussures homme", "Accessoires homme", "Filles", "Garcons"];
      };
      return Collections;
    }
   
};
//query to get all the subcatgeories and then divide them according to the categories 
const getSubCategories = async () => {
    try {
      const response = await axios.get(subcollection, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (errors) {
      if (response.data) {
        const Response = response.data;
       const SubCollections = {
       sc1: (Response().vêtementsfemme),
       sc2:(Response().chaussuresfemme),
       sc3:(Response().accessoiresfemme),
       sc4:(Response().vêtementshomme),
       sc5: (Response().chaussureshomme),
       sc6: (Response().accessoireshomme),
       sc7: (Response().filles),
       sc8: (Response().filles),
  
   }
  
      } else if (errors) {
        var Collections = ["Vêtements femme", "Chaussures femme", "Accessoires femme", "Vêtementshomme" , "Chaussures homme", "Accessoires homme", "Filles", "Garcons"];
        };
        return SubCollections;
      }
     
  };



export default MegaMenuData; 