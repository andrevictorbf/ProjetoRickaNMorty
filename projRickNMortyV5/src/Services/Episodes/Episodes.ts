// refatorar para os episodios 
import { CharacterType } from '../../Types';
import { instance } from "../Instance";

export const getAllCharacters = async (): Promise<CharacterType[]> => {

    const response = await instance.get('/character');
    return response.data;
}

export const getCharacter = async (id: number): Promise<CharacterType[]> => {
    const response = await instance.get(`/character/${id}`);
    return response.data;
}