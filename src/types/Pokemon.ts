// Define la interfaz de un Pokémon
export interface Pokemon {
    id: number; // ID del Pokémon
    name: string; // Nombre del Pokémon
    image_front: string; // Imagen frontal del Pokémon
    image_back: string; // Imagen trasera del Pokémon
    types: string[]; // Tipos del Pokémon
    abilities: string[]; // Habilidades del Pokémon
    weight: number; // Peso del Pokémon
}