"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import { Pokemon } from "../types/Pokemon";
import "./styles.css";

// Pagina principal que renderiza el componente SearchBar y PokemonList
const Page = () => {
    const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
    
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Search for a Pokémon
        </h1>
        <SearchBar setSearchResults={setSearchResults} />
        <PokemonList results={searchResults} />
      </div>
    );
};
  

export default Page;
