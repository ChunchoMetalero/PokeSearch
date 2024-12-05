import React from "react";
import { Pokemon } from "../types/Pokemon";

// Propiedades que recibe el componente PokemonCard
interface PokemonCardProps {
  pokemon: Pokemon;
}

// Componente que muestra la información de un Pokémon
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const capitalizedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-90">
      <div className="flex justify-center space-x-4 mb-4">
        {pokemon.image_front && (
          <img
            src={pokemon.image_front}
            alt={pokemon.name}
            className="w-40 h-40"
          />
        )}
        {pokemon.image_back && (
          <img
            src={pokemon.image_back}
            alt={`${pokemon.name} back`}
            className="w-40 h-40"
          />
        )}
      </div>
      <h2 className="text-xl font-bold text-center capitalize text-gray-800 mb-2">
        {capitalizedName}
      </h2>
      <p className="text-center text-gray-600">
        <strong>Pokédex Number:</strong> {pokemon.id}
      </p>
      <p className="text-center text-gray-600">
        {/* Convertir el peso a kilogramos */}
        <strong>Weight:</strong> {pokemon.weight / 10} kg
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