import { instace } from "../Instace";

export interface CharacterResponse {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    episode: string[];
    url: string;
    created: string;
}

export const getCharacter = async (id: number): Promise<CharacterResponse[]> => {
    const response = await instace.get(`/character/${id}`);
    return response.data;
}