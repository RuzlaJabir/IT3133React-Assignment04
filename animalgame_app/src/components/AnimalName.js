import React from "react";
import '../assets/css/compo.css';

const AnimalName = ({ animalName }) => {
  return <h2 className="animal-name">Animal Name: {animalName}</h2>;
};

export default AnimalName;
