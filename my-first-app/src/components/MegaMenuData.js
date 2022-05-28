
import React from 'react'
import { useSelector } from 'react-redux'

export default function MegaMenuData() {
let collections = [];
const categories = useSelector((state) => state.categories);

categories.items.map((item) => {
  collections.push({
    "id": item.id,
    "categorie": item.title, 
  });
  console.log(collections);
});

let subcollections = [];


categories.items[0].SubCollections[0].map((item) => {
  subcollections.push({
    "id": item[0].id,
    "souscategorie": item[0].title,
  });
});


console.log(subcollections);


  return (
    <> 
    <div key={collections.id}>{collections}</div>
    <div key={subcollections.id}>{subcollections}</div>
    </>
    )
}


