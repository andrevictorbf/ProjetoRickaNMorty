
import React from 'react';
import { CharacterType } from '../../Types';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';

interface CharactersCardProps {
  characters: CharacterType[] | null;
}

export const CharactersCard: React.FC<CharactersCardProps> = ({ characters }) => {
  if (!characters || !Array.isArray(characters)) {
    return <div>Nenhum personagem encontrado.</div>;
  }

  return (
    <div>
      {characters.map(character => (
        <Col key={character.id} className="shadow-sm mb-4 rounded">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                {character.status}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{character.gender}</ListGroup.Item>
              <ListGroup.Item>{character.origin.name}</ListGroup.Item>
              <ListGroup.Item>{character.location.name}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-center">
              <Button variant="dark">Veja mais!</Button>
            </Card.Body>
          </Card>
          {/* esqueleto dos cards 
                // <div key={character.id}>
                //     <h2>{character.name}</h2>
                //     <p>{character.status}</p>
                //     <img src={character.image} alt={character.name} />
                //     <p>{character.species}</p>
                //     <p>{character.gender}</p>
                //     <p>Origem: {character.origin.name}</p>
                //     <p>Localização: {character.location.name}</p>
                // </div> */}

        </Col>

      ))}
    </div>
  );
};