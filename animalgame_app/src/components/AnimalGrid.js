import React from "react";

const AnimalGrid = ({ animals, onAnimalClick }) => {
  return (
    <div className="animal-grid">
      {animals.map((animal) => (
        <img
          key={animal.name}
          src={animal.image}
          alt={animal.name}
          className="animal-image"
          onClick={() => onAnimalClick(animal.name)}
        />
      ))}
    </div>
  );
};

export default AnimalGrid;
