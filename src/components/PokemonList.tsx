import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types/Pokemon";

// Propiedades que recibe el componente PokemonList
interface PokemonListProps {
  results: Pokemon[];
}

// Componente que muestra una lista de Pokémon
const PokemonList = ({ results }: PokemonListProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No Pokémon found. Try searching for another one!
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-6 min-h-[50vh]">
        {results.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonList;


