import React from "react";
import { Pokemon } from "../types/Pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const capitalizedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-80">
      <div className="flex justify-center space-x-4 mb-4">
        {pokemon.image_front && (
          <img
            src={pokemon.image_front}
            alt={pokemon.name}
            className="w-24 h-24"
          />
        )}
        {pokemon.image_back && (
          <img
            src={pokemon.image_back}
            alt={`${pokemon.name} back`}
            className="w-24 h-24"
          />
        )}
      </div>
      <h2 className="text-xl font-bold text-center capitalize text-gray-800 mb-2">
        {capitalizedName}
      </h2>
      <p className="text-center text-gray-600">
        <strong>Pokedex Number:</strong> {pokemon.id}
      </p>
      <p className="text-center text-gray-600">
        <strong>Weight:</strong> {pokemon.weight} kg
      </p>
      <p className="text-center text-gray-600">
        <strong>Types:</strong> {pokemon.types.join(", ")}
      </p>
      <p className="text-center text-gray-600">
        <strong>Abilities:</strong> {pokemon.abilities.join(", ")}
      </p>
    </div>
  );
};

export default PokemonCard;