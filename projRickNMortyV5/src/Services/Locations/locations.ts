import { LocationsType } from "../../Types";
import { instance } from "../Instance";

export const getAllLocations = async (): Promise<LocationsType[]> => {

    const response = await instance.get('/location');
    return response.data.results;
}

export const getSingleLocation = async (id: number): Promise<LocationsType[]> => {

    const response = await instance.get(`/location/${id}`);
    return response.data;
}