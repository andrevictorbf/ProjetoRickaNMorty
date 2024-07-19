
import { CharacterType } from "../../Types"

interface CharactersCardProps {
  characters: CharacterType[] | null;
}

const CharactersCard: React.FC<CharactersCardProps> = ({ characters }) => {
  if (!characters || !Array.isArray(characters)) {
      return <div>Nenhum personagem encontrado.</div>;
  }

  return (
      <div>
          {characters.map(character => (
              <div key={character.id}>
                  <h2>{character.name}</h2>
                  <p>{character.status}</p>
                  <img src={character.image} alt={character.name} />
                  <p>{character.species}</p>
                  <p>{character.gender}</p>
                  <p>Origem: {character.origin.name}</p>
                  <p>Localização: {character.location.name}</p>
              </div>
          ))}
      </div>
  );
};

export default CharactersCard;