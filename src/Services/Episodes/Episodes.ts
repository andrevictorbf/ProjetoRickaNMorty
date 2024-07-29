
import { CharacterType, EpisodeType } from '../../Types';
import { instance } from "../Instance";


export const getAllEpisodes = async (page: number): Promise<{ results: EpisodeType[], totalPages: number }> => {
    const response = await instance.get(`/episode?page=${page}`);
    return {
        results: response.data.results,
        totalPages: response.data.info.pages
    };
};
export const episodeChars = async (id: number): Promise<CharacterType[]> => {
    const response = await instance.get(`/episode/${id}/`);
    const characters = response.data.characters;
    const characterPromises = characters ? characters.map((url: string) => instance.get(url)) : [];
    const charactersResponses = await Promise.all(characterPromises);
    return charactersResponses.map(res => res.data);
}

export const getSingleEpisode = async (id: number): Promise<EpisodeType> => {
    const response = await instance.get(`/episode/${id}`);
    return response.data;
}
