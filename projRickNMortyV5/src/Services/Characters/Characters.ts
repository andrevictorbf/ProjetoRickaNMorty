import { CharacterType } from '../../Types';
import { instance } from "../Instance";

export const getAllCharacters = async (): Promise<CharacterType[]> => {
    const response = await instance.get('/character');
    return response.data.results; 
}

export const getSingleCharacter = async (id: number): Promise<CharacterType[]> => {
    const response = await instance.get(`/character/${id}`);
    return response.data.results;
}

export const getCharacterPagination = async (page: number): Promise<CharacterType[]> => {
    const response = await instance.get(`/character/?page=${page}`);
    return response.data.info;
}