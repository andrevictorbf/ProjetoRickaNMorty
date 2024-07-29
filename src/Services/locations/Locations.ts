import { instance } from "../Instance";
import { CharacterType, LocationsType } from '../../Types';


export const getAllLocations = async (page: number): Promise<{ results: LocationsType[], totalPages: number }> => {
    const response = await instance.get(`/location?page=${page}`);
    return {
        results: response.data.results,
        totalPages: response.data.info.pages
    };
};
export const locationChars = async (id: number): Promise<CharacterType[]> => {
    const response = await instance.get(`/location/${id}/`);
    const characters = response.data.residents;
    const characterPromises = characters ? characters.map((url: string) => instance.get(url)) : [];
    const charactersResponses = await Promise.all(characterPromises);
    return charactersResponses.map(res => res.data);
};

export const getSingleLocation = async (id: number): Promise<LocationsType> => {
    const response = await instance.get(`/location/${id}`);
    return response.data;
};