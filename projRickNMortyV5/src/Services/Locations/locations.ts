import { LocationsType } from "../../Types";
import { instance } from "../Instance";

export const getAllLocations = async (): Promise<LocationsType[]> => {
    const response = await instance.get('/locations');
    return response.data.results;
}