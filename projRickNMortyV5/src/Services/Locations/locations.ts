import { instance } from "../Instance";
import { CharacterType, LocationsType } from '../../Types';

export const getAllLocations = async (): Promise<LocationsType[]> => {

    const response = await instance.get('/location');
    return response.data.results;
}
export const locationChars = async (id: number): Promise<CharacterType[]> => {
    const response = await instance.get(`/location/${id}/`);
    const characters = response.data.residents;
    const characterPromises = characters ? characters.map((url: string) => instance.get(url)) : [];
    const charactersResponses = await Promise.all(characterPromises);
    return charactersResponses.map(res => res.data);
}

export const getSingleLocation = async (id: number): Promise<LocationsType> => {
    const response = await instance.get(`/location/${id}`);
    return response.data;
}