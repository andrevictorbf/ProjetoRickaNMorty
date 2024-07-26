import { instance } from "../Instance";
import { LocationsType } from '../../Types';
export const getAllLocations = async (): Promise<LocationsType[]> => {

    const response = await instance.get('/location');
    return response.data.results;
}

export const getSingleLocation = async (id: number): Promise<LocationsType[]> => {
    const response = await instance.get(`/location/${id}`);
    return response.data;
}

