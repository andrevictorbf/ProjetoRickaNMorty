
// refatorar para os episodios - ok
import { EpisodeType } from '../../Types';
import { instance } from "../Instance";

export const getAllEpisodes = async (): Promise<EpisodeType[]> => {

    const response = await instance.get('/episode');
    return response.data.results;
}

export const getSingleEpisode = async (id: number): Promise<EpisodeType[]> => {
    const response = await instance.get(`/episode/${id}`);
    return response.data.results;
}
// export const getCharacterByEpisode = async (id: number): Promise<episodeType[]> => {
//     const response = await instance.get(`/episode/${id}/characters`);
//     return response.data.results;
// }