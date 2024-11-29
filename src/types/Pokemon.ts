export interface Pokemon {
    id: number;
    name: string;
    image_front: string;
    image_back: string;
    types: string[];
    abilities: string[];
    weight: number;
}