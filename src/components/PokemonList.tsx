import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../types/Pokemon";

interface PokemonListProps {
  results: Pokemon[];
}

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;


