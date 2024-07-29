import axios from 'axios';
import { CharacterType, EpisodeType } from '../../Types';
import { instance } from "../Instance";

export const getAllCharacters = async (page: number): Promise<{ results: CharacterType[], totalPages: number }> => {
    const response = await instance.get(`/character?page=${page}`);
    return {
        results: response.data.results,
        totalPages: response.data.info.pages
    };
};
export const getCaroseulChars = async (): Promise<{ results: CharacterType[]}> => {
    const response = await instance.get('/character');
    return {
        results: response.data.results,
    };
};

export const getSingleCharacter = async (id: number): Promise<CharacterType> => {
    const response = await instance.get(`/character/${id}`);
    return response.data;
};

export const charEpisode = async (id: number): Promise<EpisodeType[]> => {
    const response = await instance.get(`/character/${id}`);
    const character = response.data;
    const episodePromises = character.episode.map((url: string) => axios.get(url));
    const episodesResponses = await Promise.all(episodePromises);
    return episodesResponses.map(res => res.data);
};