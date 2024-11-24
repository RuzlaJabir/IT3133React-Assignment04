import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AnimalName from "./components/AnimalName";
import AnimalGrid from "./components/AnimalGrid";
import Result from "./components/Result";
import { animals } from "./data/AnimalsDb";

function App() {
  const [randomAnimal, setRandomAnimal] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setRandomAnimal(animals[randomIndex].name);
  }, []);

  const handleAnimalClick = (animalName) => {
    if (animalName === randomAnimal) {
      setResult("Win");
    } else {
      setResult("Lose");
    }
  };

  return (
    <div className="App">
      <Header />
      <AnimalName animalName={randomAnimal} />
      <AnimalGrid animals={animals} onAnimalClick={handleAnimalClick} />
      {result && <Result result={result} />}
    </div>
  );
}

export default App;
