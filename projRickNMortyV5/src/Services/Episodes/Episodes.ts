
// refatorar para os episodios - ok
import { episodeType } from '../../Types';
import { instance } from "../Instance";

export const getAllEpisodes = async (): Promise<episodeType[]> => {

    const response = await instance.get('/episodes');
    return response.data.results;
}

export const getSingleEpisode = async (id: number): Promise<episodeType[]> => {
    const response = await instance.get(`/episode/${id}`);
    return response.data.results;
}
export const getCharacterByEpisode = async (id: number): Promise<episodeType[]> => {
    const response = await instance.get(`/episode/${id}/characters`);
    return response.data.results;
}