import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getSingleCharacter, charEpisode } from "../../Services";
import { CharacterType, EpisodeType } from "../../Types";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const CharDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  useEffect(() => {
    const fetchCharacterAndEpisodes = async () => {
      try {
        const characterData = await getSingleCharacter(Number(id));
        setCharacter(characterData);

        const episodeData = await charEpisode(Number(id));
        setEpisodes(episodeData);
      } catch (error) {
        console.error("Erro ao buscar personagem ou episódios:", error);
      }
    };

    fetchCharacterAndEpisodes();
  }, [id]);

  if (!character || episodes.length === 0) {
    return null;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Gênero: {character.gender}</p>
      <p>Origem: {character.origin.name}</p>
      <p>Localização: {character.location.name}</p>
      <p>Espécie: {character.species}</p>
      <p>Tipo: {character.type || 'N/A'}</p>
      
      <h2>Episódios:</h2>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>
            {episode.name} (Air date: {episode.air_date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharDetail;

