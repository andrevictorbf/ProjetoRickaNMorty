import { Card, Container } from "react-bootstrap";
import { CharacterType } from "../../Types";

interface CharDetailCardProps {
    characters: CharacterType[] | null;
}
export const charDetailCard: React.FC<CharDetailCardProps> = ({ characters }) => {
    if (!characters || !Array.isArray(characters)) {
        return <div>Nenhum personagem encontrado.</div>;
    }
    return (

        <Container>
            {characters.map(character => (
                <Card key={character.id} style={{ height: '18rem' }}>
                    <Card.Img variant="left" src={character.image} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                            {character.status}
                        </Card.Text>
                        <Card.Text>
                            <p>Especie: </p>{character.species}
                        </Card.Text>
                        <Card.Text>
                            <p>Origem: </p>{character.origin.name}
                        </Card.Text>
                        <Card.Text>
                            <p>Ultima Localizacao: </p>{character.location.name}
                        </Card.Text>

                    </Card.Body>
                </Card>
            ))};
        </Container>


    );
};
