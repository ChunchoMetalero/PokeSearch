import React, { useState } from "react";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";

interface SearchBarProps {
  setSearchResults: (results: Pokemon[]) => void;
}

const SearchBar = ({ setSearchResults }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      setSearchResults([
        {
          id: data.id,
          name: data.name,
          image_front: data.sprites.front_default,
          image_back: data.sprites.back_default,
          types: data.types.map((type: any) => type.type.name),
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          weight: data.weight,
        },
      ]);
    } catch (error) {
      // Manejar errores específicos
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          // Mostrar un mensaje amigable si es un error 404
          alert("No Pokémon found. Try searching for another one!");
        } else {
          // Manejar otros errores de Axios
          alert("An error occurred. Please try again later.");
        }
      } else {
        // Manejar cualquier otro tipo de error inesperado
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        className="flex shadow-md"
        onSubmit={(e) => {
          e.preventDefault(); // Evitar el comportamiento predeterminado
          handleSearch(); // Llamar a la función de búsqueda
        }}
      >
        <input
          type="text"
          placeholder="Search for a Pokémon"
          className="border border-gray-300 focus:ring-2 focus:ring-blue-400 p-2 rounded-l-md text-gray-700 focus:outline-none w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-r-md"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
